// src/app/area-admin/cursos/lista-cursos/lista-cursos.component.ts
import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { AdminService } from '../../services/admin.service';
import { CursoResumo } from '../../models/admin.models';

@Component({
  selector: 'app-lista-cursos',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './lista-cursos.component.html',
  styleUrls: ['./lista-cursos.component.scss'],
})
export class ListaCursosComponent implements OnInit, OnDestroy {
  private destroy$ = new Subject<void>();

  cursos: CursoResumo[] = [];
  carregando = true;
  erro = '';
  confirmarExclusaoId: string | null = null;
  excluindo = false;

  constructor(private adminService: AdminService) {}

  ngOnInit(): void {
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
      .getCursos()
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: cursos => {
          this.cursos = cursos;
          this.carregando = false;
        },
        error: () => {
          this.erro = 'Erro ao carregar cursos.';
          this.carregando = false;
        },
      });
  }

  confirmarExclusao(id: string): void {
    this.confirmarExclusaoId = id;
  }

  cancelarExclusao(): void {
    this.confirmarExclusaoId = null;
  }

  excluir(id: string): void {
    this.excluindo = true;
    this.adminService
      .excluirCurso(id)
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: () => {
          this.cursos = this.cursos.filter(c => c.id !== id);
          this.confirmarExclusaoId = null;
          this.excluindo = false;
        },
        error: () => {
          this.erro = 'Erro ao excluir curso.';
          this.confirmarExclusaoId = null;
          this.excluindo = false;
        },
      });
  }
}