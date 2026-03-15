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
import { CepService } from '../services/cep.service'; // serviço já existente no projeto

@Component({
  selector: 'app-inscricao-curso',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './inscricao-curso.component.html',
  styleUrls: ['./inscricao-curso.component.scss']
})
export class InscricaoCursoComponent implements OnInit, OnDestroy {

  // ── Gerenciamento de assinaturas RxJS (padrão obrigatório do projeto) ──
  private destroy$ = new Subject<void>();

  formularioInscricao: FormGroup;
  cursoId: number = 0;
  cursoTitulo: string = 'Fundamentos da Doutrina Espírita';

  // Estados de UI
  processandoInscricao = false;
  buscandoCep = false;
  erroInscricao: string | null = null;
  inscricaoRealizada = false;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private inscricaoService: InscricaoService,
    private cepService: CepService
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
      receberEmails:[false]
    });
  }

  ngOnInit(): void {
    this.route.paramMap
      .pipe(takeUntil(this.destroy$))
      .subscribe(params => {
        const id = params.get('id');
        if (id) {
          this.cursoId = parseInt(id, 10);
          // TODO: this.cursoService.getCurso(this.cursoId)... quando CursoService existir
        }
      });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  // ── Busca de CEP via CepService (já existente no projeto) ──────────────
  buscarCep(): void {
    // Remove máscara antes de enviar (ex.: "01310-100" → "01310100")
    const cepRaw: string = (this.formularioInscricao.get('endereco.cep')?.value ?? '')
      .replace(/\D/g, '');

    if (cepRaw.length !== 8) return;

    this.buscandoCep = true;
    // Desabilita os campos enquanto carrega para evitar edição simultânea
    this.formularioInscricao.get('endereco.logradouro')?.disable();
    this.formularioInscricao.get('endereco.bairro')?.disable();
    this.formularioInscricao.get('endereco.cidade')?.disable();
    this.formularioInscricao.get('endereco.estado')?.disable();

    this.cepService.buscarCEP(cepRaw)
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (endereco) => {
          this.formularioInscricao.patchValue({
            endereco: {
              // ViaCEP usa "localidade" para cidade e "uf" para estado
              logradouro: endereco.logradouro,
              bairro:     endereco.bairro,
              cidade:     endereco.localidade,
              estado:     endereco.uf
            }
          });
          // Foca no campo número após preenchimento automático
          document.getElementById('numero')?.focus();
        },
        error: () => {
          // CEP não encontrado — libera campos para preenchimento manual, sem bloquear o usuário
          this.formularioInscricao.patchValue({
            endereco: { logradouro: '', bairro: '', cidade: '', estado: '' }
          });
        },
        complete: () => {
          this.buscandoCep = false;
          // Reabilita os campos após a consulta (com ou sem sucesso)
          this.formularioInscricao.get('endereco.logradouro')?.enable();
          this.formularioInscricao.get('endereco.bairro')?.enable();
          this.formularioInscricao.get('endereco.cidade')?.enable();
          this.formularioInscricao.get('endereco.estado')?.enable();
        }
      });
  }

  // ── Submissão do formulário ─────────────────────────────────────────────
  submeterInscricao(): void {
    if (this.formularioInscricao.invalid) {
      this.marcarCamposComoTocados();
      return;
    }

    this.processandoInscricao = true;
    this.erroInscricao = null;

    const dadosInscricao: DadosInscricao = {
      cursoId: this.cursoId,
      ...this.formularioInscricao.value
    };

    this.inscricaoService.inscrever(dadosInscricao)
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (resposta) => {
          this.processandoInscricao = false;
          this.inscricaoRealizada = true;

          // Se o back-end retornar URL de acesso direto, redireciona para ela;
          // caso contrário, volta para a home após breve delay para o usuário ler a mensagem.
          if (resposta.acessoUrl) {
            this.router.navigateByUrl(resposta.acessoUrl);
          } else {
            setTimeout(() => this.router.navigate(['/']), 3000);
          }
        },
        error: (erro: Error) => {
          this.processandoInscricao = false;
          // Mensagem já tratada e traduzida pelo InscricaoService
          this.erroInscricao = erro.message;
          // Rola a página até a mensagem de erro para não deixar o usuário perdido
          document.querySelector('.erro-inscricao')?.scrollIntoView({ behavior: 'smooth' });
        }
      });
  }

  // ── Utilitário: marca todos os campos como touched para exibir erros ───
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