// src/app/area-aluno/player-aula/player-aula.component.ts
import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { Subject } from 'rxjs';
import { switchMap, takeUntil } from 'rxjs/operators';

import { ProgressoService } from '../services/progresso.service';
import { CursoService } from '../services/curso.service';
import { CursoAluno, Aula, ProgressoCurso } from '../models/area-aluno.models';
// ✅ CURSOS_MOCK removido

const CURSO_VAZIO: CursoAluno = {
  id: '', titulo: '', descricao: '', categoria: '',
  imagemUrl: '', instrutor: '', totalAulas: 0,
  aulas: [], certificadoDisponivel: false,
};
const AULA_VAZIA: Aula = {
  id: '', titulo: '', descricao: '',
  youtubeVideoId: '', duracaoMinutos: 0, ordem: 0,
};
const PROGRESSO_VAZIO: ProgressoCurso = {
  cursoId: '', aulasProgresso: [],
  percentualConcluido: 0, certificadoEmitido: false,
};

@Component({
  selector: 'app-player-aula',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './player-aula.component.html',
  styleUrls: ['./player-aula.component.scss'],
})
export class PlayerAulaComponent implements OnInit, OnDestroy {
  private destroy$ = new Subject<void>();

  curso: CursoAluno         = CURSO_VAZIO;
  aulaAtual: Aula           = AULA_VAZIA;
  aulasOrdenadas: Aula[]    = [];
  progresso: ProgressoCurso = PROGRESSO_VAZIO;
  embedUrl: SafeResourceUrl = '';
  carregando = true;
  erro: string | null = null;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private sanitizer: DomSanitizer,
    private progressoService: ProgressoService,
    private cursoService: CursoService,
  ) {}

  ngOnInit(): void {
    this.route.params
      .pipe(
        switchMap(params => {
          this.carregando = true;
          this.erro = null;
          // Guarda o aulaId do snapshot para uso após o curso carregar
          return this.cursoService.obterPorId(params['cursoId']).pipe(
            takeUntil(this.destroy$)
          );
        }),
        takeUntil(this.destroy$)
      )
      .subscribe({
        next: curso => {
          this.curso = curso;
          this.aulasOrdenadas = [...curso.aulas].sort((a, b) => a.ordem - b.ordem);

          const aulaId = this.route.snapshot.params['aulaId'];
          const aula = curso.aulas.find(a => a.id === aulaId) ?? this.aulasOrdenadas[0];
          this.definirAula(aula ?? AULA_VAZIA);

          // Assina progresso reativo após o curso estar definido
          this.progressoService
            .obterProgresso(curso.id)
            .pipe(takeUntil(this.destroy$))
            .subscribe(p => (this.progresso = p));
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

  // ── Navegação entre aulas ──────────────────────────────────────

  irParaAula(aula: Aula): void {
    this.router.navigate(['/area-aluno/player', this.curso.id, aula.id]);
  }

  irParaProximaAula(): void {
    this.progressoService.marcarAulaConcluida(this.curso, this.aulaAtual.id);
    const proxima = this.aulasOrdenadas[this.indiceAtual + 1];
    if (proxima) {
      this.irParaAula(proxima);
    } else {
      this.router.navigate(['/area-aluno/certificado', this.curso.id]);
    }
  }

  irParaAnterior(): void {
    const anterior = this.aulasOrdenadas[this.indiceAtual - 1];
    if (anterior) this.irParaAula(anterior);
  }

  marcarConcluida(): void {
    this.progressoService.marcarAulaConcluida(this.curso, this.aulaAtual.id);
  }

  // ── Getters tipados (usados no template sem `?.`) ──────────────

  get indiceAtual(): number {
    return this.aulasOrdenadas.findIndex(a => a.id === this.aulaAtual.id);
  }

  get temProxima(): boolean {
    return this.indiceAtual < this.aulasOrdenadas.length - 1;
  }

  get temAnterior(): boolean {
    return this.indiceAtual > 0;
  }

  /** ID da aula atual como string garantida — elimina `?.id` no template */
  get aulaAtualId(): string {
    return this.aulaAtual.id;
  }

  aulaConcluida(aulaId: string): boolean {
    return this.progresso.aulasProgresso.some(a => a.aulaId === aulaId && a.concluida);
  }

  // ── Privados ──────────────────────────────────────────────────

  private definirAula(aula: Aula): void {
    this.aulaAtual  = aula;
    this.carregando = true;
    this.embedUrl   = this.sanitizer.bypassSecurityTrustResourceUrl(
      `https://www.youtube.com/embed/${aula.youtubeVideoId}?rel=0&modestbranding=1`
    );
    setTimeout(() => (this.carregando = false), 400);
  }
}