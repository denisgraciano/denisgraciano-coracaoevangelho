// src/app/inscricao-curso/inscricao-curso.component.ts
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import {
  FormsModule,
  ReactiveFormsModule,
  FormBuilder,
  FormGroup,
  Validators
} from '@angular/forms';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { DadosInscricao } from './dados-inscricao.model';
import { InscricaoService } from './inscricao.service';
import { CepService, Endereco } from '../services/cep.service';

// ── NOVO: importa os serviços de autenticação e perfil já existentes ──
import { AuthService } from '../area-aluno/services/auth.service';
import { PerfilService } from '../area-aluno/services/perfil.service';

@Component({
  selector: 'app-inscricao-curso',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './inscricao-curso.component.html',
  styleUrls: ['./inscricao-curso.component.scss']
})
export class InscricaoCursoComponent implements OnInit, OnDestroy {

  private destroy$ = new Subject<void>();

  mostrarSenha = false;
  mostrarConfirmarSenha = false;

  formularioInscricao: FormGroup;
  cursoId: number = 0;
  cursoTitulo: string = 'Fundamentos da Doutrina Espírita';

  // ── NOVO: controla visualmente se o usuário está logado ──
  usuarioLogado = false;

  processandoInscricao = false;
  buscandoCep = false;
  erroInscricao: string | null = null;
  inscricaoRealizada = false;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private inscricaoService: InscricaoService,
    private cepService: CepService,
    // ── NOVO: injeta AuthService e PerfilService ──
    private authService: AuthService,
    private perfilService: PerfilService
  ) {
    this.formularioInscricao = this.fb.group({
      nomeCompleto:   ['', [Validators.required, Validators.minLength(3)]],
      email:          ['', [Validators.required, Validators.email]],
      telefone:       ['', [Validators.required]],
      cpf:            ['', [Validators.required]],
      dataNascimento: ['', [Validators.required]],
      endereco: this.fb.group({
        cep:         ['', [Validators.required]],
        logradouro:  ['', [Validators.required]],
        numero:      ['', [Validators.required]],
        complemento: [''],
        bairro:      ['', [Validators.required]],
        cidade:      ['', [Validators.required]],
        estado:      ['', [Validators.required]]
      }),
      observacoes:  [''],
      aceitaTermos: [false, [Validators.requiredTrue]],
      receberEmails:[false],
      
    });
  }

  ngOnInit(): void {
    // 1) Carrega o cursoId da rota
    this.route.paramMap
      .pipe(takeUntil(this.destroy$))
      .subscribe(params => {
        const id = params.get('id');
        if (id) {
          this.cursoId = parseInt(id, 10);
        }
      });

    // 2) ── NOVO: pré-preenche o formulário se o usuário estiver logado ──
    this.preencherComDadosDoUsuario();

    
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  /**
   * Pré-preenche o formulário com os dados do usuário logado.
   *
   * Ordem de prioridade:
   *   1. PerfilService  — dados completos (CPF, endereço, telefone...)
   *   2. AuthService    — fallback mínimo (nome + email do token de sessão)
   *
   * Campos preenchidos via sessão são desabilitados para evitar edição
   * acidental, mas permanecem válidos para o FormGroup (disabled não
   * exclui do value em patchValue, apenas em getRawValue — usaremos
   * getRawValue() no submit).
   */
  private preencherComDadosDoUsuario(): void {
    const usuario = this.authService.usuarioAtual;

    // Usuário não está logado — formulário permanece vazio
    if (!usuario) {
      this.usuarioLogado = false;
      return;
    }

    this.usuarioLogado = true;
    const perfil = this.perfilService.perfilAtual;

    if (perfil?.nomeCompleto) {
      // ── Perfil completo encontrado: preenche tudo ──
      this.formularioInscricao.patchValue({
        nomeCompleto:   perfil.nomeCompleto,
        email:          perfil.email ?? usuario.email,
        telefone:       perfil.telefone,
        cpf:            perfil.cpf,
        dataNascimento: perfil.dataNascimento,
        endereco: {
          cep:         perfil.endereco?.cep         ?? '',
          logradouro:  perfil.endereco?.logradouro  ?? '',
          numero:      perfil.endereco?.numero      ?? '',
          complemento: perfil.endereco?.complemento ?? '',
          bairro:      perfil.endereco?.bairro      ?? '',
          cidade:      perfil.endereco?.cidade      ?? '',
          estado:      perfil.endereco?.estado      ?? ''
        },
        receberEmails: perfil.receberEmails ?? false
      });

      // Desabilita campos já preenchidos pelo perfil salvo
      this.desabilitarCamposPreenchidos([
        'nomeCompleto', 'email', 'telefone', 'cpf', 'dataNascimento'
      ]);

      // Desabilita sub-campos do endereço se estiverem preenchidos
      if (perfil.endereco?.cep) {
        this.desabilitarCamposPreenchidos([
          'endereco.cep', 'endereco.logradouro', 'endereco.numero',
          'endereco.bairro', 'endereco.cidade', 'endereco.estado'
        ]);
      }

    } else {
      // ── Apenas sessão disponível: preenche só nome e email ──
      this.formularioInscricao.patchValue({
        nomeCompleto: usuario.nome,
        email:        usuario.email
      });

      // Desabilita apenas email (dado do token — não deve ser alterado)
      this.desabilitarCamposPreenchidos(['email']);
    }
  }

  /**
   * Desabilita campos por caminho (suporta notação "grupo.campo").
   * Desabilitar não remove o valor do formulário — getRawValue() inclui
   * campos disabled, ao contrário de .value.
   */
  private desabilitarCamposPreenchidos(caminhos: string[]): void {
    caminhos.forEach(caminho => {
      const control = this.formularioInscricao.get(caminho);
      if (control?.value) {
        control.disable();
      }
    });
  }

  // ── Busca de CEP ────────────────────────────────────────────────────────
buscarCep(): void {
  const cepRaw: string = (this.formularioInscricao.get('endereco.cep')?.value ?? '')
    .replace(/\D/g, '');

  if (cepRaw.length !== 8) return;

  this.buscandoCep = true;
  this.formularioInscricao.get('endereco.logradouro')?.disable();
  this.formularioInscricao.get('endereco.bairro')?.disable();
  this.formularioInscricao.get('endereco.cidade')?.disable();
  this.formularioInscricao.get('endereco.estado')?.disable();

  // ← buscarCEP (nome correto do método no CepService)
  this.cepService.buscarCEP(cepRaw)
    .pipe(takeUntil(this.destroy$))
    .subscribe({
      next: (dados: Endereco) => {
        this.formularioInscricao.patchValue({
          endereco: {
            logradouro: dados.logradouro,
            bairro:     dados.bairro,
            cidade:     dados.localidade,
            estado:     dados.uf
          }
        });
        document.getElementById('numero')?.focus();
      },
      error: () => {
        this.formularioInscricao.patchValue({
          endereco: { logradouro: '', bairro: '', cidade: '', estado: '' }
        });
      },
      complete: () => {
        this.buscandoCep = false;
        this.formularioInscricao.get('endereco.logradouro')?.enable();
        this.formularioInscricao.get('endereco.bairro')?.enable();
        this.formularioInscricao.get('endereco.cidade')?.enable();
        this.formularioInscricao.get('endereco.estado')?.enable();
      }
    });
}

  // ── Submit ──────────────────────────────────────────────────────────────
submeterInscricao(): void {
  if (this.formularioInscricao.invalid) {
    this.marcarCamposComoTocados();
    return;
  }

  this.processandoInscricao = true;
  this.erroInscricao = null;

  const formValue = this.formularioInscricao.getRawValue();

  const dados: DadosInscricao = {
    cursoId:        String(this.cursoId), // number → string (tipo do model)
    nomeCompleto:   formValue['nomeCompleto'],
    email:          formValue['email'],
    telefone:       formValue['telefone'],
    cpf:            formValue['cpf'],
    dataNascimento: formValue['dataNascimento'],
    endereco:       formValue['endereco'],
    observacoes:    formValue['observacoes'],
    aceitaTermos:   formValue['aceitaTermos'],
    receberEmails:  formValue['receberEmails'],
    senha: ['']
  };

  // ← assinatura real: inscrever(cursoId, dados)
  this.inscricaoService.inscrever(this.cursoId, dados)
    .pipe(takeUntil(this.destroy$))
    .subscribe({
      next: (resposta) => {
        this.processandoInscricao = false;
        this.inscricaoRealizada = true;

        this.perfilService.prePopularDaInscricao({
          nomeCompleto:   dados.nomeCompleto,
          email:          dados.email,
          telefone:       dados.telefone,
          cpf:            dados.cpf,
          dataNascimento: dados.dataNascimento,
          endereco:       dados.endereco,
          receberEmails:  dados.receberEmails,
          observacoes:    dados.observacoes
        });

        if (resposta.acessoUrl) {
          this.router.navigateByUrl(resposta.acessoUrl);
        } else {
          setTimeout(() => this.router.navigate(['/']), 3000);
        }
      },
      error: (erro: Error) => {
        this.processandoInscricao = false;
        this.erroInscricao = erro.message;
        document.querySelector('.erro-inscricao')?.scrollIntoView({ behavior: 'smooth' });
      }
    });
}

  marcarCamposComoTocados(): void {
    Object.keys(this.formularioInscricao.controls).forEach(key => {
      const control = this.formularioInscricao.get(key);
      if (!control) return;
      control.markAsTouched();
      if (control instanceof FormGroup) {
        Object.keys(control.controls).forEach(subKey =>
          control.get(subKey)?.markAsTouched()
        );
      }
    });
  }

  voltar(): void {
    this.router.navigate(['/curso', this.cursoId]);
  }
}