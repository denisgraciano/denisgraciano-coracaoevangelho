// src/app/area-aluno/perfil-aluno/perfil-aluno.component.ts
import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { PerfilService } from '../services/perfil.service';
import { AuthService } from '../services/auth.service';
import { PerfilAluno } from '../models/area-aluno.models';
import { CepService } from '../../services/cep.service'; // reutiliza o service existente

const ESTADOS = [
  'AC','AL','AP','AM','BA','CE','DF','ES','GO',
  'MA','MT','MS','MG','PA','PB','PR','PE','PI',
  'RJ','RN','RS','RO','RR','SC','SP','SE','TO',
];

@Component({
  selector: 'app-perfil-aluno',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  templateUrl: './perfil-aluno.component.html',
  styleUrls: ['./perfil-aluno.component.scss'],
})
export class PerfilAlunoComponent implements OnInit, OnDestroy {
  private destroy$ = new Subject<void>();

  readonly estados = ESTADOS;

  formulario!: FormGroup;
  nomeUsuario   = '';
  avatarPreview = '';           // data URL para preview imediato
  salvando      = false;
  salvoComSucesso = false;
  erroCep       = false;
  buscandoCep   = false;

  // Limites do avatar
  private readonly MAX_AVATAR_BYTES = 2 * 1024 * 1024; // 2 MB
  erroAvatar = '';

  constructor(
    private fb: FormBuilder,
    private perfilService: PerfilService,
    private authService: AuthService,
    private cepService: CepService,
  ) {}

  ngOnInit(): void {
    this.criarFormulario();

    // Carrega dados existentes do perfil
    this.perfilService.perfil$
      .pipe(takeUntil(this.destroy$))
      .subscribe(perfil => {
        if (perfil) {
          this.preencherFormulario(perfil);
          this.avatarPreview = perfil.avatarBase64 ?? '';
        }
      });

    this.authService.usuario$
      .pipe(takeUntil(this.destroy$))
      .subscribe(u => (this.nomeUsuario = u?.nome ?? ''));
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  // ── Avatar ────────────────────────────────────────────────────

  onArquivoSelecionado(evento: Event): void {
    this.erroAvatar = '';
    const input  = evento.target as HTMLInputElement;
    const arquivo = input.files?.[0];
    if (!arquivo) return;

    // Valida tipo
    if (!arquivo.type.startsWith('image/')) {
      this.erroAvatar = 'Selecione um arquivo de imagem (JPG, PNG, WEBP).';
      return;
    }

    // Valida tamanho
    if (arquivo.size > this.MAX_AVATAR_BYTES) {
      this.erroAvatar = 'A imagem deve ter no máximo 2 MB.';
      return;
    }

    const reader = new FileReader();
    reader.onload = (e) => {
      const base64 = e.target?.result as string;
      this.avatarPreview = base64;
      this.perfilService.salvarAvatar(base64);
    };
    reader.readAsDataURL(arquivo);
  }

  removerAvatar(): void {
    this.avatarPreview = '';
    this.perfilService.salvarAvatar('');
  }

  // ── CEP ───────────────────────────────────────────────────────

  buscarCep(): void {
    const cep = this.formulario.get('endereco.cep')?.value?.replace(/\D/g, '');
    if (!cep || cep.length !== 8) return;

    this.buscandoCep = true;
    this.erroCep     = false;

    this.cepService.buscarCEP(cep)
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (data) => {
          this.buscandoCep = false;
          if ('erro' in data) {
            this.erroCep = true;
            return;
          }
          this.formulario.patchValue({
            endereco: {
              logradouro: data.logradouro,
              bairro:     data.bairro,
              cidade:     data.localidade,
              estado:     data.uf,
            },
          });
        },
        error: () => {
          this.buscandoCep = false;
          this.erroCep = true;
        },
      });
  }

  // ── Submit ────────────────────────────────────────────────────

  salvar(): void {
    if (this.formulario.invalid) {
      this.formulario.markAllAsTouched();
      return;
    }

    this.salvando = true;

    const valores = this.formulario.value;
    const perfil: Partial<PerfilAluno> = {
      nomeCompleto:    valores.nomeCompleto,
      email:           valores.email,
      telefone:        valores.telefone,
      cpf:             valores.cpf,
      dataNascimento:  valores.dataNascimento,
      endereco:        valores.endereco,
      receberEmails:   valores.receberEmails,
      observacoes:     valores.observacoes,
    };

    // Simula latência de rede (remover ao integrar backend)
    setTimeout(() => {
      this.perfilService.salvar(perfil);
      this.salvando      = false;
      this.salvoComSucesso = true;

      // Esconde o feedback após 3s
      setTimeout(() => (this.salvoComSucesso = false), 3000);
    }, 600);
  }

  // ── Helpers de validação no template ─────────────────────────

  campo(path: string) {
    return this.formulario.get(path);
  }

  invalido(path: string): boolean {
    const c = this.campo(path);
    return !!(c?.invalid && c.touched);
  }

  // ── Privados ──────────────────────────────────────────────────

  private criarFormulario(): void {
    this.formulario = this.fb.group({
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
        estado:      ['', [Validators.required]],
      }),
      receberEmails: [false],
      observacoes:   [''],
    });
  }

  private preencherFormulario(perfil: PerfilAluno): void {
    this.formulario.patchValue({
      nomeCompleto:   perfil.nomeCompleto,
      email:          perfil.email,
      telefone:       perfil.telefone,
      cpf:            perfil.cpf,
      dataNascimento: perfil.dataNascimento,
      endereco:       perfil.endereco,
      receberEmails:  perfil.receberEmails,
      observacoes:    perfil.observacoes ?? '',
    });
  }
}