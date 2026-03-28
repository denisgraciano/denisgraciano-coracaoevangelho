// src/app/area-admin/cursos/gestao-aulas/gestao-aulas.component.ts
import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RouterLink, ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { AdminService } from '../../services/admin.service';
import { AulaAdmin, CursoDetalhe } from '../../models/admin.models';

@Component({
  selector: 'app-gestao-aulas',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterLink],
  templateUrl: './gestao-aulas.component.html',
  styleUrls: ['./gestao-aulas.component.scss'],
})
export class GestaoAulasComponent implements OnInit, OnDestroy {
  private destroy$ = new Subject<void>();

  cursoId = '';
  curso: CursoDetalhe | null = null;
  carregando = true;
  erro = '';

  // Estado do formulário inline
  modoFormulario: 'oculto' | 'novo' | 'editar' = 'oculto';
  aulaEditandoId = '';
  salvando = false;
  confirmarExclusaoId: string | null = null;
  excluindo = false;

  form!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private adminService: AdminService,
    private route: ActivatedRoute,
  ) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      titulo:          ['', [Validators.required, Validators.minLength(3)]],
      descricao:       [''],
      youtubeVideoId:  ['', Validators.required],
      duracaoMinutos:  [10, [Validators.required, Validators.min(1)]],
      ordem:           [1, [Validators.required, Validators.min(1)]],
    });

    this.cursoId = this.route.snapshot.paramMap.get('id') ?? '';
    this.carregarCurso();
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  get f() { return this.form.controls; }

  get aulasOrdenadas(): AulaAdmin[] {
    return [...(this.curso?.aulas ?? [])].sort((a, b) => a.ordem - b.ordem);
  }

  private carregarCurso(): void {
    this.carregando = true;
    this.adminService
      .getCurso(this.cursoId)
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: curso => {
          this.curso = curso;
          this.carregando = false;
        },
        error: () => {
          this.erro = 'Erro ao carregar curso.';
          this.carregando = false;
        },
      });
  }

  abrirNovaAula(): void {
    this.modoFormulario = 'novo';
    this.aulaEditandoId = '';
    const proximaOrdem = (this.curso?.aulas.length ?? 0) + 1;
    this.form.reset({ titulo: '', descricao: '', youtubeVideoId: '', duracaoMinutos: 10, ordem: proximaOrdem });
  }

  abrirEdicaoAula(aula: AulaAdmin): void {
    this.modoFormulario = 'editar';
    this.aulaEditandoId = aula.id;
    this.form.patchValue({
      titulo:         aula.titulo,
      descricao:      aula.descricao ?? '',
      youtubeVideoId: aula.youtubeVideoId,
      duracaoMinutos: aula.duracaoMinutos,
      ordem:          aula.ordem,
    });
  }

  fecharFormulario(): void {
    this.modoFormulario = 'oculto';
    this.aulaEditandoId = '';
    this.form.reset();
  }

  salvar(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    this.salvando = true;
    this.erro = '';
    const payload = this.form.value;

    const operacao = this.modoFormulario === 'editar'
      ? this.adminService.atualizarAula(this.cursoId, this.aulaEditandoId, payload)
      : this.adminService.criarAula(this.cursoId, payload);

    operacao.pipe(takeUntil(this.destroy$)).subscribe({
      next: () => {
        this.salvando = false;
        this.fecharFormulario();
        this.carregarCurso(); // Recarrega para refletir a nova ordem
      },
      error: () => {
        this.erro = 'Erro ao salvar aula. Verifique os dados.';
        this.salvando = false;
      },
    });
  }

  confirmarExclusao(id: string): void {
    this.confirmarExclusaoId = id;
  }

  cancelarExclusao(): void {
    this.confirmarExclusaoId = null;
  }

  excluir(aulaId: string): void {
    this.excluindo = true;
    this.adminService
      .excluirAula(this.cursoId, aulaId)
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: () => {
          if (this.curso) {
            this.curso = {
              ...this.curso,
              aulas: this.curso.aulas.filter(a => a.id !== aulaId),
            };
          }
          this.confirmarExclusaoId = null;
          this.excluindo = false;
        },
        error: () => {
          this.erro = 'Erro ao excluir aula.';
          this.confirmarExclusaoId = null;
          this.excluindo = false;
        },
      });
  }
}