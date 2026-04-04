// src/app/area-aluno/player-aula/player-aula.component.ts
import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { Subject } from 'rxjs';
import { switchMap, takeUntil } from 'rxjs/operators';

import { ProgressoService } from '../services/progresso.service';
import { CursoAluno, Aula, ProgressoCurso } from '../models/area-aluno.models';
import { CursosService } from '../../services/cursos.service';

// Valores padrão usados antes do ngOnInit carregar os dados reais.
// Evitam o uso de `!` (non-null assertion) e tornam `?.` desnecessário no template.
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

  // Propriedades inicializadas com valores padrão — nunca undefined
  curso: CursoAluno           = CURSO_VAZIO;
  aulaAtual: Aula             = AULA_VAZIA;
  aulasOrdenadas: Aula[]      = [];
  progresso: ProgressoCurso   = PROGRESSO_VAZIO;
  embedUrl: SafeResourceUrl   = '';
  carregando                  = true;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private sanitizer: DomSanitizer,
    private progressoService: ProgressoService,
    private cursosService: CursosService,
  ) {}

  ngOnInit(): void {
    this.route.params
      .pipe(
        takeUntil(this.destroy$),
        switchMap(params => {
          this.carregando = true;
          const cursoId: string = params['cursoId'];
          const aulaId: string  = params['aulaId'];
          return this.cursosService.obterCurso(cursoId).pipe(
            switchMap(detalhe => {
              if (!detalhe) {
                this.router.navigate(['/area-aluno']);
                return [];
              }
              this.curso          = this.cursosService.detalheParaCursoAluno(detalhe);
              this.aulasOrdenadas = [...this.curso.aulas].sort((a, b) => a.ordem - b.ordem);

              const aula = this.curso.aulas.find(a => a.id === aulaId) ?? this.aulasOrdenadas[0];
              this.definirAula(aula ?? AULA_VAZIA);

              return this.progressoService.obterProgresso(this.curso.id);
            }),
          );
        }),
      )
      .subscribe(p => {
        if (p) this.progresso = p;
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
    // Marca a aula atual como concluída ao avançar
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

  /** ID da aula atual garantido como string — elimina `?.id` no template */
  get aulaAtualId(): string {
    return this.aulaAtual.id;
  }

  aulaConcluida(aulaId: string): boolean {
    return this.progresso.aulasProgresso
      .some(a => a.aulaId === aulaId && a.concluida);
  }

  // ── Privados ──────────────────────────────────────────────────

  private definirAula(aula: Aula): void {
    this.aulaAtual  = aula;
    this.carregando = true;

    const baseUrl   = 'https://www.youtube.com/embed/';
    this.embedUrl   = this.sanitizer.bypassSecurityTrustResourceUrl(
      `${baseUrl}${aula.youtubeVideoId}?rel=0&modestbranding=1`,
    );

    setTimeout(() => (this.carregando = false), 400);
  }
}