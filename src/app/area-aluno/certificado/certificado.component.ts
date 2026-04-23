// src/app/area-aluno/certificado/certificado.component.ts
import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { Subject } from 'rxjs';
import { switchMap, takeUntil } from 'rxjs/operators';

import { ProgressoService } from '../services/progresso.service';
import { AuthService } from '../services/auth.service';
import { CursoService } from '../services/curso.service';           // ← novo
import { CursoAluno, Certificado } from '../models/area-aluno.models';
// ✅ CURSOS_MOCK removido

@Component({
  selector: 'app-certificado',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './certificado.component.html',
  styleUrls: ['./certificado.component.scss'],
})
export class CertificadoComponent implements OnInit, OnDestroy {
  private destroy$ = new Subject<void>();

  curso: CursoAluno | null = null;
  certificado: Certificado | null = null;
  nomeAluno = '';
  podEmitir = false;
  carregando = true;
  erro: string | null = null;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private progressoService: ProgressoService,
    private authService: AuthService,
    private cursoService: CursoService,           // ← injetado
  ) {}

  ngOnInit(): void {
    this.authService.usuario$
      .pipe(takeUntil(this.destroy$))
      .subscribe(u => (this.nomeAluno = u?.nome ?? 'Aluno'));

    this.route.params
      .pipe(
        switchMap(params => this.cursoService.obterPorId(params['cursoId'])),
        takeUntil(this.destroy$)
      )
      .subscribe({
        next: curso => {
          this.curso = curso;
          this.carregando = false;

          const todos = this.progressoService.listarCertificados();
          this.certificado = todos.find(c => c.cursoId === curso.id) ?? null;

          const progresso = this.progressoService.obterProgressoSnapshot(curso.id);
          this.podEmitir = progresso.percentualConcluido === 100 && !this.certificado;
        },
        error: () => {
          this.erro = 'Curso não encontrado.';
          this.carregando = false;
          this.router.navigate(['/area-aluno']);
        },
      });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  emitirCertificado(): void {
    if (!this.curso) return;
    this.certificado = this.progressoService.emitirCertificado(this.curso);
    this.podEmitir = false;
  }

  imprimir(): void {
    window.print();
  }
}