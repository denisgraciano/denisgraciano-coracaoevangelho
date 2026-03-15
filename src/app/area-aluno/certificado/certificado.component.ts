// src/app/area-aluno/certificado/certificado.component.ts
import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { ProgressoService } from '../services/progresso.service';
import { AuthService } from '../services/auth.service';
import { CursoAluno, Certificado } from '../models/area-aluno.models';
import { CURSOS_MOCK } from '../mocks/cursos.mock';

@Component({
  selector: 'app-certificado',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './certificado.component.html',
  styleUrls: ['./certificado.component.scss'],
})
export class CertificadoComponent implements OnInit, OnDestroy {
  private destroy$ = new Subject<void>();

  curso!: CursoAluno;
  certificado: Certificado | null = null;
  nomeAluno = '';
  podEmitir = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private progressoService: ProgressoService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.authService.usuario$.pipe(takeUntil(this.destroy$)).subscribe(u => {
      this.nomeAluno = u?.nome ?? 'Aluno';
    });

    this.route.params.pipe(takeUntil(this.destroy$)).subscribe(params => {
      const cursoId: string = params['cursoId'];
      const curso = CURSOS_MOCK.find(c => c.id === cursoId);
      if (!curso) { this.router.navigate(['/area-aluno']); return; }

      this.curso = curso;

      // Verifica se o certificado já foi emitido
      const todos = this.progressoService.listarCertificados();
      this.certificado = todos.find(c => c.cursoId === cursoId) ?? null;

      // Verifica se o curso está concluído mas o certificado ainda não foi emitido
      const progresso = this.progressoService.obterProgressoSnapshot(cursoId);
      this.podEmitir = progresso.percentualConcluido === 100 && !this.certificado;
    });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  emitirCertificado(): void {
    this.certificado = this.progressoService.emitirCertificado(this.curso);
    this.podEmitir = false;
  }

  imprimir(): void {
    window.print();
  }
}