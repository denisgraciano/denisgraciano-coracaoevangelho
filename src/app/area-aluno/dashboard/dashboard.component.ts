// src/app/area-aluno/dashboard/dashboard.component.ts
import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { Subject, forkJoin, of } from 'rxjs';
import { takeUntil, catchError } from 'rxjs/operators';

import { AuthService } from '../services/auth.service';
import { ProgressoService } from '../services/progresso.service';
import { CursoService } from '../services/curso.service';
import { CursoAluno, ProgressoCurso, Usuario, Certificado } from '../models/area-aluno.models';
// ✅ CURSOS_MOCK removido

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit, OnDestroy {
  private destroy$ = new Subject<void>();

  usuario: Usuario | null = null;
  cursosMatriculados: CursoAluno[] = [];
  progressos: Map<string, ProgressoCurso> = new Map();
  sugestoes: CursoAluno[] = [];
  certificados: Certificado[] = [];
  abaSelecionada: 'cursos' | 'certificados' | 'sugestoes' = 'cursos';
  carregando = true;
  erro: string | null = null;

  constructor(
    private authService: AuthService,
    private progressoService: ProgressoService,
    private cursoService: CursoService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.authService.usuario$
      .pipe(takeUntil(this.destroy$))
      .subscribe(u => (this.usuario = u));

    forkJoin({
      meus:      this.cursoService.listarMeus().pipe(catchError(() => of([]))),
      sugestoes: this.cursoService.listarSugestoes().pipe(catchError(() => of([]))),
    })
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: ({ meus, sugestoes }) => {
          this.cursosMatriculados = meus;
          this.sugestoes = sugestoes;
          this.carregando = false;

          this.cursosMatriculados.forEach(curso => {
            this.progressoService
              .obterProgresso(curso.id)
              .pipe(takeUntil(this.destroy$))
              .subscribe(p => this.progressos.set(curso.id, p));
          });

          this.certificados = this.progressoService.listarCertificados();
        },
        error: () => {
          this.erro = 'Não foi possível carregar seus cursos. Tente novamente.';
          this.carregando = false;
        },
      });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  // ── Métodos usados pelo template ───────────────────────────────

  obterProgresso(cursoId: string): ProgressoCurso {
    return this.progressos.get(cursoId) ?? {
      cursoId,
      aulasProgresso: [],
      percentualConcluido: 0,
      certificadoEmitido: false,
    };
  }

  /** Retorna a primeira aula não concluída, ou a primeira do curso */
  proximaAula(curso: CursoAluno): string {
    const progresso = this.obterProgresso(curso.id);
    const concluidas = new Set(
      progresso.aulasProgresso.filter(a => a.concluida).map(a => a.aulaId)
    );
    const proxima = [...curso.aulas]
      .sort((a, b) => a.ordem - b.ordem)
      .find(a => !concluidas.has(a.id));
    return proxima?.id ?? curso.aulas[0]?.id ?? '';
  }

  irParaCurso(cursoId: string, aulaId: string): void {
    this.router.navigate(['/area-aluno/player', cursoId, aulaId]);
  }

  irParaCertificado(cursoId: string): void {
    this.router.navigate(['/area-aluno/certificado', cursoId]);
  }

  selecionarAba(aba: 'cursos' | 'certificados' | 'sugestoes'): void {
    this.abaSelecionada = aba;
  }

  logout(): void {
    this.authService.logout();
  }
}