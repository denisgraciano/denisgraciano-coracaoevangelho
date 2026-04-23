// src/app/inscricao-curso/inscricao.service.ts
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { environment } from '../../environments/environment';

export interface RespostaInscricao {
  id: string;
  mensagem: string;
  acessoUrl?: string;
}

interface ApiResponse<T> {
  success: boolean;
  data: T;
  message?: string;
}

interface MatriculaCheckResponseDto {
  estaMatriculado: boolean;
}

@Injectable({ providedIn: 'root' })
export class InscricaoService {

  private readonly endpoint = `${environment.apiUrl}/api/matriculas`;

  constructor(private http: HttpClient) {}

  inscrever(cursoId: number | string): Observable<RespostaInscricao> {
    return this.http
      .post<RespostaInscricao>(`${this.endpoint}/${cursoId}`, {})
      .pipe(catchError(this.tratarErro));
  }

  verificarMatricula(cursoId: string): Observable<boolean> {
    return this.http
      .get<ApiResponse<MatriculaCheckResponseDto>>(`${this.endpoint}/${cursoId}/check`)
      .pipe(
        map(resposta => resposta.data?.estaMatriculado ?? false),
        catchError(() => of(false))
      );
  }

  private tratarErro(erro: HttpErrorResponse): Observable<never> {
    let mensagem = 'Ocorreu um erro inesperado. Por favor, tente novamente.';
    if (erro.status === 0) {
      mensagem = 'Não foi possível conectar ao servidor. Verifique sua conexão.';
    } else if (erro.status === 409) {
      mensagem = 'Você já possui uma inscrição ativa neste curso.';
    } else if (erro.status >= 400 && erro.status < 500) {
      mensagem = erro.error?.mensagem ?? 'Dados inválidos. Tente novamente.';
    } else if (erro.status >= 500) {
      mensagem = 'O servidor encontrou um problema. Por favor, tente mais tarde.';
    }
    return throwError(() => new Error(mensagem));
  }
}
