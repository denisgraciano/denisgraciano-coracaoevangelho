// src/app/area-aluno/services/curso.service.ts
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { environment } from '../../../environments/environment';
import { CursoAluno } from '../models/area-aluno.models';

// Formato do envelope padrão da API: { success, data }
interface ApiResponse<T> {
  success: boolean;
  data: T;
}

@Injectable({ providedIn: 'root' })
export class CursoService {
  private readonly base = `${environment.apiUrl}/cursos`;

  constructor(private http: HttpClient) {}

  /** Lista todos os cursos ativos — HomeComponent, catálogo público */
  listarTodos(): Observable<CursoAluno[]> {
    return this.http
      .get<ApiResponse<CursoAluno[]>>(this.base)
      .pipe(map(r => r.data), catchError(this.tratarErro));
  }

  /** Cursos em que o aluno está matriculado — DashboardComponent */
  listarMeus(): Observable<CursoAluno[]> {
    return this.http
      .get<ApiResponse<CursoAluno[]>>(`${this.base}/meus`)
      .pipe(map(r => r.data), catchError(this.tratarErro));
  }

  /** Sugestões de cursos ainda não iniciados — DashboardComponent */
  listarSugestoes(): Observable<CursoAluno[]> {
    return this.http
      .get<ApiResponse<CursoAluno[]>>(`${this.base}/sugestoes`)
      .pipe(map(r => r.data), catchError(this.tratarErro));
  }

  /** Detalhe completo com array de aulas — PlayerAula, Certificado */
  obterPorId(id: string): Observable<CursoAluno> {
    return this.http
      .get<ApiResponse<CursoAluno>>(`${this.base}/${id}`)
      .pipe(map(r => r.data), catchError(this.tratarErro));
  }

  private tratarErro(erro: HttpErrorResponse): Observable<never> {
    if (erro.status === 0) {
      return throwError(() => new Error('Sem conexão com o servidor.'));
    }
    if (erro.status === 404) {
      return throwError(() => new Error('Curso não encontrado.'));
    }
    if (erro.status === 401) {
      return throwError(() => new Error('Sessão expirada. Faça login novamente.'));
    }
    return throwError(() => new Error(erro.error?.message ?? 'Erro inesperado.'));
  }
}