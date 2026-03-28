// src/app/pedido-vibracoes/pedido-vibracao.service.ts

import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { PedidoVibracao, PedidoVibracaoResposta } from '../../app/pedido-vibracoes/pedido-vibracao.model';

// Contrato exato que o back-end espera no POST /api/pedidos-vibracao
// O formulário tem campos a mais (numero, complemento, bairro, dataEnvio)
// que a API não conhece — por isso o mapeamento abaixo é necessário.
interface PedidoVibracaoPayload {
  nome: string;
  email?: string;
  pedido: string;
  endereco: {
    cep: string;
    logradouro: string;
    cidade: string;
    estado: string;
  };
}

@Injectable({
  providedIn: 'root',
})
export class PedidoVibracaoService {
  private readonly endpoint = `${environment.apiUrl}/api/pedidos-vibracao`;

  constructor(private http: HttpClient) {}

  /**
   * Envia pedido de vibração ao back-end.
   * POST /api/pedidos-vibracao
   *
   * Mapeia a model do formulário (PedidoVibracao) para o contrato
   * da API (PedidoVibracaoPayload), descartando campos que o back-end
   * não espera (numero, complemento, bairro, dataEnvio).
   */
  enviarPedido(pedido: PedidoVibracao): Observable<PedidoVibracaoResposta> {
    const payload: PedidoVibracaoPayload = {
      nome: pedido.nome,
      email: pedido.email,
      pedido: pedido.pedido,
      endereco: {
        cep: pedido.endereco.cep,
        logradouro: pedido.endereco.logradouro,
        cidade: pedido.endereco.cidade,
        estado: pedido.endereco.estado,
      },
    };
  
    return this.http
      .post<PedidoVibracaoResposta>(this.endpoint, payload)
      .pipe(
        catchError((erro: HttpErrorResponse) => this.tratarErro(erro))
      );
  }

  // ─── Tratamento de erros centralizado ────────────────────────────────────

  private tratarErro(erro: HttpErrorResponse): Observable<never> {
    let mensagem = 'Ocorreu um erro inesperado. Tente novamente.';

    if (erro.status === 0) {
      mensagem = 'Não foi possível conectar ao servidor. Verifique sua conexão.';
    } else if (erro.status === 400) {
      mensagem = erro.error?.mensagem ?? 'Dados inválidos. Verifique as informações e tente novamente.';
    } else if (erro.status >= 500) {
      mensagem = 'Erro no servidor. Tente novamente mais tarde.';
    }

    return throwError(() => new Error(mensagem));
  }
}