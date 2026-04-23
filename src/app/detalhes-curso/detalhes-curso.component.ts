// src/app/detalhes-curso/detalhes-curso.component.ts
import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { environment } from '../../environments/environment';
import { Curso } from './curso.model';
import { InscricaoService } from '../inscricao-curso/inscricao.service';

interface ApiResponse<T> {
  success: boolean;
  data: T;
  message?: string;
}

@Component({
  selector: 'app-detalhes-curso',
  standalone: true,
  imports: [CommonModule],      
  templateUrl: './detalhes-curso.component.html',
  styleUrls: ['./detalhes-curso.component.scss']
})
export class DetalhesCursoComponent implements OnInit, OnDestroy {

  private destroy$ = new Subject<void>();
  private readonly cursosUrl = `${environment.apiUrl}/api/cursos`;

  curso!: Curso;
  carregando = true;
  erro: string | null = null;

  jaMatriculado = false;
  carregandoStatusMatricula = true;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private http: HttpClient,
    private inscricaoService: InscricaoService
  ) {}

  ngOnInit(): void {
    const cursoId = this.route.snapshot.paramMap.get('id');
    if (!cursoId) {
      this.erro = 'Curso não encontrado.';
      this.carregando = false;
      return;
    }

    this.carregarCurso(cursoId);
    this.verificarStatusMatricula(cursoId);
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

private carregarCurso(id: string): void {
  console.log('[DetalhesCurso] chamando:', `${this.cursosUrl}/${id}`);

  this.http
    .get<ApiResponse<Curso>>(`${this.cursosUrl}/${id}`)
    .pipe(takeUntil(this.destroy$))
    .subscribe({
      next: (resposta) => {
        console.log('[DetalhesCurso] resposta:', resposta);  // ← veja aqui
        this.curso = resposta.data;
        this.carregando = false;
      },
      error: (err) => {
        console.error('[DetalhesCurso] erro:', err);         // ← ou aqui
        this.erro = 'Não foi possível carregar o curso. Tente novamente.';
        this.carregando = false;
      }
    });
}

  private verificarStatusMatricula(cursoId: string): void {
    this.inscricaoService
      .verificarMatricula(cursoId)
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (estaMatriculado) => {
          this.jaMatriculado = estaMatriculado;
          this.carregandoStatusMatricula = false;
        },
        error: () => {
          this.jaMatriculado = false;
          this.carregandoStatusMatricula = false;
        }
      });
  }

  voltar(): void {
    this.router.navigate(['/']);
  }

  abrirInscricao(): void {
    this.router.navigate(['/inscricao', this.curso.id]);
  }

  formatarData(data: string | undefined): string {
    if (!data) return '';
    return new Date(data).toLocaleDateString('pt-BR');
  }

  getEstrelas(nota: number): number[] {
    return Array(nota).fill(0);
  }

  calcularDesconto(): number {
    if (this.curso?.precoPromocional && this.curso?.preco) {
      return Math.round(
        ((this.curso.preco - this.curso.precoPromocional) / this.curso.preco) * 100
      );
    }
    return 0;
  }
}