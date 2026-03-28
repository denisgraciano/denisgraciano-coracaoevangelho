// src/app/area-admin/usuarios/lista-usuarios.component.ts
import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { AdminService } from '../services/admin.service';
import { UsuarioAdmin, PagedResult } from '../models/admin.models';

@Component({
  selector: 'app-lista-usuarios',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './lista-usuarios.component.html',
  styleUrls: ['./lista-usuarios.component.scss'],
})
export class ListaUsuariosComponent implements OnInit, OnDestroy {
  private destroy$ = new Subject<void>();

  resultado: PagedResult<UsuarioAdmin> | null = null;
  carregando = true;
  erro = '';
  sucesso = '';
  paginaAtual = 1;
  readonly tamanhoPagina = 20;

  // ── Estado do modal de edição ────────────────────────────────
  usuarioEmEdicao: UsuarioAdmin | null = null;
  salvando = false;
  form!: FormGroup;

  constructor(
    private adminService: AdminService,
    private fb: FormBuilder,
  ) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      nome: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      avatarUrl: [null as string | null],
      role: ['aluno', Validators.required],
    });
    this.carregar();
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  private carregar(): void {
    this.carregando = true;
    this.erro = '';
    this.adminService
      .getUsuarios(this.paginaAtual, this.tamanhoPagina)
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: result => {
          this.resultado = result;
          this.carregando = false;
        },
        error: () => {
          this.erro = 'Erro ao carregar usuários.';
          this.carregando = false;
        },
      });
  }

  // ── Modal ────────────────────────────────────────────────────
  abrirEdicao(usuario: UsuarioAdmin): void {
    this.usuarioEmEdicao = usuario;
    this.erro = '';
    this.sucesso = '';
    this.form.setValue({
      nome: usuario.nome,
      email: usuario.email,
      avatarUrl: usuario.avatarUrl ?? null,
      role: usuario.role,
    });
  }

  fecharModal(): void {
    this.usuarioEmEdicao = null;
    this.form.reset();
  }

  salvar(): void {
    if (this.form.invalid || !this.usuarioEmEdicao) {
      this.form.markAllAsTouched();
      return;
    }

    this.salvando = true;
    this.erro = '';

    const { nome, email, avatarUrl, role } = this.form.value;
    const payload = {
      nome,
      email,
      avatarUrl: avatarUrl?.trim() || null,
      role,
    };

    this.adminService
      .editarUsuario(this.usuarioEmEdicao.id, payload)
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: usuarioAtualizado => {
          // Atualiza o item na lista sem recarregar tudo
          if (this.resultado) {
            this.resultado = {
              ...this.resultado,
              items: this.resultado.items.map(u =>
                u.id === usuarioAtualizado.id ? usuarioAtualizado : u
              ),
            };
          }
          this.salvando = false;
          this.usuarioEmEdicao = null;
          this.sucesso = `Usuário "${usuarioAtualizado.nome}" atualizado com sucesso.`;
          setTimeout(() => (this.sucesso = ''), 4000);
        },
        error: () => {
          this.erro = 'Erro ao salvar. Verifique os dados e tente novamente.';
          this.salvando = false;
        },
      });
  }

  // ── Paginação ────────────────────────────────────────────────
  irPagina(pagina: number): void {
    if (pagina < 1 || (this.resultado && pagina > this.resultado.totalPaginas)) return;
    this.paginaAtual = pagina;
    this.carregar();
  }

  get paginas(): number[] {
    if (!this.resultado) return [];
    return Array.from({ length: this.resultado.totalPaginas }, (_, i) => i + 1);
  }

  inicial(nome: string): string {
    return nome?.charAt(0)?.toUpperCase() ?? '?';
  }

  get f() { return this.form.controls; }
}