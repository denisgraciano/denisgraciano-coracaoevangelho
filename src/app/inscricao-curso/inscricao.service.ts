// src/app/inscricao-curso/inscricao.service.ts
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { DadosInscricao } from './dados-inscricao.model';

// Tipagem da resposta da API após inscrição bem-sucedida
export interface RespostaInscricao {
  id: string;           // ID da inscrição gerado pelo back-end
  mensagem: string;     // ex.: "Inscrição realizada com sucesso"
  acessoUrl?: string;   // URL direta para acessar o curso, se o back-end retornar
}

@Injectable({
  providedIn: 'root'
})
export class InscricaoService {

  // URL base vem do environment — nunca hard-coded
  private readonly endpoint = `${environment.apiUrl}/api/inscricoes`;

  constructor(private http: HttpClient) {}

  /**
   * Envia os dados de inscrição para o back-end.
   * Retorna um Observable com a resposta tipada da API.
   */
  inscrever(dados: DadosInscricao): Observable<RespostaInscricao> {
    return this.http.post<RespostaInscricao>(this.endpoint, dados).pipe(
      catchError(this.tratarErro)
    );
  }

  /**
   * Centraliza o tratamento de erros HTTP para que o componente
   * receba apenas uma mensagem clara, sem depender de códigos de status.
   */
  private tratarErro(erro: HttpErrorResponse): Observable<never> {
    let mensagem = 'Ocorreu um erro inesperado. Por favor, tente novamente.';

    if (erro.status === 0) {
      // Sem conexão ou CORS
      mensagem = 'Não foi possível conectar ao servidor. Verifique sua conexão.';
    } else if (erro.status === 409) {
      // Conflito — aluno já inscrito
      mensagem = 'Você já possui uma inscrição ativa neste curso.';
    } else if (erro.status >= 400 && erro.status < 500) {
      // Erro de validação do back-end
      mensagem = erro.error?.mensagem ?? 'Dados inválidos. Verifique o formulário e tente novamente.';
    } else if (erro.status >= 500) {
      mensagem = 'O servidor encontrou um problema. Por favor, tente mais tarde.';
    }

    return throwError(() => new Error(mensagem));
  }
}