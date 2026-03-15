// src/app/area-aluno/dashboard/dashboard.component.ts
import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { AuthService } from '../services/auth.service';
import { ProgressoService } from '../services/progresso.service';
import { CursoAluno, ProgressoCurso, Usuario, Certificado } from '../models/area-aluno.models';

// Mock de dados — substituir por CursoService.listarCursosAluno() quando o backend existir
import { CURSOS_MOCK } from '../mocks/cursos.mock';

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

  constructor(
    private authService: AuthService,
    private progressoService: ProgressoService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.authService.usuario$
      .pipe(takeUntil(this.destroy$))
      .subscribe(u => (this.usuario = u));

    // Mock: todos os cursos são "matriculados". Substituir por API.
    this.cursosMatriculados = CURSOS_MOCK;

    // Carrega progressos reativos para cada curso
    this.cursosMatriculados.forEach(curso => {
      this.progressoService
        .obterProgresso(curso.id)
        .pipe(takeUntil(this.destroy$))
        .subscribe(p => this.progressos.set(curso.id, p));
    });

    // Sugestões: cursos ainda não iniciados (percentual = 0)
    // Lógica simples — pode ser substituída por recomendação de API
    this.sugestoes = CURSOS_MOCK.filter(c => {
      const p = this.progressoService.obterProgressoSnapshot(c.id);
      return p.percentualConcluido === 0;
    }).slice(0, 3);

    this.certificados = this.progressoService.listarCertificados();
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  obterProgresso(cursoId: string): ProgressoCurso {
    return this.progressos.get(cursoId) ?? {
      cursoId,
      aulasProgresso: [],
      percentualConcluido: 0,
      certificadoEmitido: false,
    };
  }

  irParaCurso(cursoId: string, primeiraAulaId: string): void {
    this.router.navigate(['/area-aluno/player', cursoId, primeiraAulaId]);
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

  // Retorna a primeira aula não concluída, ou a primeira do curso
  proximaAula(curso: CursoAluno): string {
    const progresso = this.obterProgresso(curso.id);
    const idsConcluidosSet = new Set(
      progresso.aulasProgresso.filter(a => a.concluida).map(a => a.aulaId)
    );
    const proxima = curso.aulas
      .sort((a, b) => a.ordem - b.ordem)
      .find(a => !idsConcluidosSet.has(a.id));
    return proxima?.id ?? curso.aulas[0]?.id;
  }
}