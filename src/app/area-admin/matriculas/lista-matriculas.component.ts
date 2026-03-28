// src/app/area-admin/matriculas/lista-matriculas.component.ts
import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { AdminService } from '../services/admin.service';
import { MatriculaAdmin, PagedResult } from '../models/admin.models';

@Component({
  selector: 'app-lista-matriculas',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './lista-matriculas.component.html',
  styleUrls: ['./lista-matriculas.component.scss'],
})
export class ListaMatriculasComponent implements OnInit, OnDestroy {
  private destroy$ = new Subject<void>();

  resultado: PagedResult<MatriculaAdmin> | null = null;
  carregando = true;
  erro = '';
  paginaAtual = 1;
  readonly tamanhoPagina = 20;

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
      .getMatriculas(this.paginaAtual, this.tamanhoPagina)
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: result => {
          this.resultado = result;
          this.carregando = false;
        },
        error: () => {
          this.erro = 'Erro ao carregar matrículas.';
          this.carregando = false;
        },
      });
  }

  irPagina(pagina: number): void {
    if (pagina < 1 || (this.resultado && pagina > this.resultado.totalPaginas)) return;
    this.paginaAtual = pagina;
    this.carregar();
  }

  get paginas(): number[] {
    if (!this.resultado) return [];
    return Array.from({ length: this.resultado.totalPaginas }, (_, i) => i + 1);
  }
}