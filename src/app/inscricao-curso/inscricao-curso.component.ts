// src/app/inscricao-curso/inscricao-curso.component.ts
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import {
  FormsModule,
  ReactiveFormsModule,
  FormBuilder,
  FormGroup,
  Validators,
  AbstractControl,
  ValidationErrors
} from '@angular/forms';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { DadosInscricao } from './dados-inscricao.model';
import { InscricaoService } from './inscricao.service';
import { AuthService } from '../area-aluno/services/auth.service';
import { PerfilService } from '../area-aluno/services/perfil.service';
import { CepService } from '../services/cep.service';

function senhasIguaisValidator(group: AbstractControl): ValidationErrors | null {
  const senha    = group.get('senha')?.value;
  const confirma = group.get('confirmarSenha')?.value;
  return senha && confirma && senha !== confirma ? { senhasDivergentes: true } : null;
}

@Component({
  selector: 'app-inscricao-curso',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './inscricao-curso.component.html',
  styleUrls: ['./inscricao-curso.component.scss']
})
export class InscricaoCursoComponent implements OnInit, OnDestroy {

  private destroy$ = new Subject<void>();

  formularioInscricao: FormGroup;
  cursoId: string = '';
  cursoTitulo: string = 'Fundamentos da Doutrina Espírita';

  processandoInscricao = false;
  buscandoCep = false;
  erroInscricao: string | null = null;
  inscricaoRealizada = false;
  mostrarSenha = false;
  mostrarConfirmarSenha = false;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private inscricaoService: InscricaoService,
    private authService: AuthService,
    private perfilService: PerfilService,
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
      observacoes:    [''],
      acesso: this.fb.group({
        senha:          ['', [Validators.required, Validators.minLength(6)]],
        confirmarSenha: ['', [Validators.required]]
      }, { validators: senhasIguaisValidator }),
      aceitaTermos:   [false, [Validators.requiredTrue]],
      receberEmails:  [false]
    });
  }

  ngOnInit(): void {
    this.route.paramMap
      .pipe(takeUntil(this.destroy$))
      .subscribe(params => {
        const id = params.get('id');
        if (id) this.cursoId = id;
      });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
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
        next: (endereco) => {
          this.formularioInscricao.patchValue({
            endereco: {
              logradouro: endereco.logradouro,
              bairro:     endereco.bairro,
              cidade:     endereco.localidade,
              estado:     endereco.uf
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

    const { acesso, ...resto } = this.formularioInscricao.value;
    const dadosInscricao: DadosInscricao = {
      cursoId: this.cursoId,
      ...resto,
      senha: acesso.senha
    };

    this.inscricaoService.inscrever(this.cursoId, dadosInscricao)
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (resposta) => {
          this.processandoInscricao = false;
          this.inscricaoRealizada = true;

          if (resposta.auth) {
            this.authService.iniciarSessao(resposta.auth);
            // Pré-popula o perfil com os dados já informados no formulário
            const v = this.formularioInscricao.value;
            this.perfilService.prePopularDaInscricao({
              nomeCompleto:   v.nomeCompleto,
              email:          v.email,
              telefone:       v.telefone,
              cpf:            v.cpf,
              dataNascimento: v.dataNascimento,
              endereco:       v.endereco,
              receberEmails:  v.receberEmails,
              observacoes:    v.observacoes,
            });
            setTimeout(() => this.router.navigate(['/area-aluno']), 1500);
          } else {
            // E-mail já tinha conta — redireciona para login
            setTimeout(() => this.router.navigate(['/login']), 2000);
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
