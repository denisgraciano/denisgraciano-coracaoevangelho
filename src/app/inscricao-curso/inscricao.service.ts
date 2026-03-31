// src/app/inscricao-curso/inscricao.service.ts
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { DadosInscricao } from './dados-inscricao.model';

export interface MatriculaResponse {
  id: string;
  cursoId: string;
  cursoTitulo: string;
  dataMatricula: string; // ISO string
  ativa: boolean;
}

interface ApiResponse<T> {
  success: boolean;
  data: T;
  message: string;
}

@Injectable({
  providedIn: 'root'
})
export class InscricaoService {

  private readonly baseUrl = `${environment.apiUrl}/api/matriculas`;

  constructor(private http: HttpClient) {}

  /**
   * Inscreve o aluno no curso via POST /api/matriculas/{cursoId}.
   * O JWT é injetado automaticamente pelo authInterceptor.
   */
  inscrever(cursoId: string, dados: DadosInscricao): Observable<MatriculaResponse> {
    const body = {
      nomeCompleto: dados.nomeCompleto,
      email: dados.email,
      telefone: dados.telefone ?? null,
      endereco: dados.endereco ?? null,
    };

    return this.http
      .post<ApiResponse<MatriculaResponse>>(`${this.baseUrl}/${cursoId}`, body)
      .pipe(
        map(res => res.data),
        catchError(this.tratarErro)
      );
  }

  /**
   * Verifica se o aluno já está matriculado via GET /api/matriculas/{cursoId}/check.
   */
  verificarMatricula(cursoId: string): Observable<boolean> {
    return this.http
      .get<ApiResponse<boolean>>(`${this.baseUrl}/${cursoId}/check`)
      .pipe(
        map(res => res.data),
        catchError(() => [false])
      );
  }

  private tratarErro(erro: HttpErrorResponse): Observable<never> {
    let mensagem = 'Ocorreu um erro inesperado. Por favor, tente novamente.';

    if (erro.status === 0) {
      mensagem = 'Não foi possível conectar ao servidor. Verifique sua conexão.';
    } else if (erro.status === 404) {
      mensagem = 'Curso não encontrado.';
    } else if (erro.status === 409) {
      mensagem = 'Você já possui uma inscrição ativa neste curso.';
    } else if (erro.status >= 400 && erro.status < 500) {
      mensagem = erro.error?.mensagem ?? 'Dados inválidos. Verifique o formulário e tente novamente.';
    } else if (erro.status >= 500) {
      mensagem = 'O servidor encontrou um problema. Por favor, tente mais tarde.';
    }

    return throwError(() => new Error(mensagem));
  }
}
