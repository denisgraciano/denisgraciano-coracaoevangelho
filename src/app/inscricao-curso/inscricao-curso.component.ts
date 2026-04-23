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

import { InscricaoService } from './inscricao.service';
import { CepService, Endereco } from '../services/cep.service';
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
    this.route.paramMap
      .pipe(takeUntil(this.destroy$))
      .subscribe(params => {
        const id = params.get('id');
        if (id) {
          this.cursoId = parseInt(id, 10);
        }
      });

    this.preencherComDadosDoUsuario();
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  private preencherComDadosDoUsuario(): void {
    const usuario = this.authService.usuarioAtual;

    if (!usuario) {
      this.usuarioLogado = false;
      return;
    }

    this.usuarioLogado = true;
    const perfil = this.perfilService.perfilAtual;

    if (perfil?.nomeCompleto) {
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

      this.desabilitarCamposPreenchidos([
        'nomeCompleto', 'email', 'telefone', 'cpf', 'dataNascimento'
      ]);

      if (perfil.endereco?.cep) {
        this.desabilitarCamposPreenchidos([
          'endereco.cep', 'endereco.logradouro', 'endereco.numero',
          'endereco.bairro', 'endereco.cidade', 'endereco.estado'
        ]);
      }
    } else {
      this.formularioInscricao.patchValue({
        nomeCompleto: usuario.nome,
        email:        usuario.email
      });
      this.desabilitarCamposPreenchidos(['email']);
    }
  }

  private desabilitarCamposPreenchidos(caminhos: string[]): void {
    caminhos.forEach(caminho => {
      const control = this.formularioInscricao.get(caminho);
      if (control?.value) {
        control.disable();
      }
    });
  }

  buscarCep(): void {
    const cepRaw: string = (this.formularioInscricao.get('endereco.cep')?.value ?? '')
      .replace(/\D/g, '');

    if (cepRaw.length !== 8) return;

    this.buscandoCep = true;
    this.formularioInscricao.get('endereco.logradouro')?.disable();
    this.formularioInscricao.get('endereco.bairro')?.disable();
    this.formularioInscricao.get('endereco.cidade')?.disable();
    this.formularioInscricao.get('endereco.estado')?.disable();

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

  submeterInscricao(): void {
    if (this.formularioInscricao.invalid) {
      this.marcarCamposComoTocados();
      return;
    }

    this.processandoInscricao = true;
    this.erroInscricao = null;

    this.inscricaoService.inscrever(this.cursoId)
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: () => {
          this.processandoInscricao = false;
          this.inscricaoRealizada = true;
          setTimeout(() => this.router.navigate(['/area-aluno']), 2000);
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
