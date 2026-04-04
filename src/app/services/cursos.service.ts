// src/app/services/cursos.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { ApiResponse, CursoResumo, CursoDetalhe } from '../area-admin/models/admin.models';
import { CursoAluno, Aula } from '../area-aluno/models/area-aluno.models';

const BASE = environment.apiUrl;

@Injectable({ providedIn: 'root' })
export class CursosService {

  constructor(private http: HttpClient) {}

  /** Lista todos os cursos disponíveis — GET /api/cursos */
  listarCursos(): Observable<CursoResumo[]> {
    return this.http
      .get<ApiResponse<CursoResumo[]>>(`${BASE}/api/cursos`)
      .pipe(
        map(r => r.data),
        catchError(() => of([]))
      );
  }

  /** Retorna um curso com suas aulas — GET /api/cursos/:id */
  obterCurso(id: string): Observable<CursoDetalhe | null> {
    return this.http
      .get<ApiResponse<CursoDetalhe>>(`${BASE}/api/cursos/${id}`)
      .pipe(
        map(r => r.data),
        catchError(() => of(null))
      );
  }

  /**
   * Lista os cursos em que o aluno logado está matriculado.
   * GET /api/matriculas/meus-cursos — retorna CursoDetalhe[] (com aulas).
   */
  listarMeusCursos(): Observable<CursoAluno[]> {
    return this.http
      .get<ApiResponse<CursoDetalhe[]>>(`${BASE}/api/matriculas/meus-cursos`)
      .pipe(
        map(r => r.data.map(c => this.detalheParaCursoAluno(c))),
        catchError(() => of([]))
      );
  }

  /** Converte CursoDetalhe (modelo admin/API) para CursoAluno (modelo área do aluno). */
  detalheParaCursoAluno(curso: CursoDetalhe): CursoAluno {
    return {
      id: curso.id,
      titulo: curso.titulo,
      descricao: curso.descricao,
      categoria: curso.categoria ?? '',
      imagemUrl: curso.imagemUrl,
      instrutor: curso.instrutor,
      totalAulas: curso.totalAulas,
      certificadoDisponivel: curso.certificadoDisponivel,
      aulas: curso.aulas.map((a): Aula => ({
        id: a.id,
        titulo: a.titulo,
        descricao: a.descricao ?? '',
        youtubeVideoId: a.youtubeVideoId,
        duracaoMinutos: a.duracaoMinutos,
        ordem: a.ordem,
      })),
    };
  }
}
