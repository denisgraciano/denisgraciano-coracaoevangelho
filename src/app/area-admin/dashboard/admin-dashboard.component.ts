// src/app/area-admin/dashboard/admin-dashboard.component.ts
import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Subject, forkJoin, of } from 'rxjs';
import { takeUntil, catchError } from 'rxjs/operators';
import { AdminService } from '../services/admin.service';
import { DashboardStats } from '../models/admin.models';

@Component({
  selector: 'app-admin-dashboard',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.scss'],
})
export class AdminDashboardComponent implements OnInit, OnDestroy {
  private destroy$ = new Subject<void>();

  carregando = true;

  // Controle granular: cada card tem seu próprio estado de erro.
  // Assim o dashboard nunca fica em branco por conta de um endpoint ausente.
  erros: Record<string, boolean> = {};

  stats: DashboardStats = {
    totalCursos: 0,
    totalAlunos: 0,
    totalMatriculas: 0,
    totalPedidos: 0,
  };

  constructor(private adminService: AdminService) {}

  ngOnInit(): void {
    // catchError POR STREAM: se um endpoint falhar (404, 500 ou ainda não
    // implementado no backend), os demais continuam normalmente e o forkJoin
    // completa. Isso evita o cancelamento em cascata que causava o
    // "The operation was canceled." no .NET middleware de exceções.
    forkJoin({
      cursos: this.adminService.getCursos().pipe(
        catchError(() => { this.erros['cursos'] = true; return of([]); })
      ),
      usuarios: this.adminService.getUsuarios(1, 1).pipe(
        catchError(() => { this.erros['usuarios'] = true; return of(null); })
      ),
      matriculas: this.adminService.getMatriculas(1, 1).pipe(
        catchError(() => { this.erros['matriculas'] = true; return of(null); })
      ),
      // Conta apenas pedidos NÃO lidos — requer ?lido=false no backend
      pedidosNaoLidos: this.adminService.getPedidosNaoLidos().pipe(
        catchError(() => { this.erros['pedidos'] = true; return of(null); })
      ),
    })
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: ({ cursos, usuarios, matriculas, pedidosNaoLidos }) => {
          this.stats = {
            totalCursos:     Array.isArray(cursos) ? cursos.length : 0,
            totalAlunos:     usuarios?.totalItens   ?? 0,
            totalMatriculas: matriculas?.totalItens ?? 0,
            totalPedidos:    pedidosNaoLidos        ?? 0,
          };
          this.carregando = false;
        },
        error: () => { this.carregando = false; },
      });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}