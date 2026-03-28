// src/app/area-admin/services/admin.service.ts
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { environment } from '../../../environments/environment';
import {
  ApiResponse,
  PagedResult,
  Categoria,
  CursoResumo,
  CursoDetalhe,
  CursoPayload,
  AulaAdmin,
  AulaPayload,
  MatriculaAdmin,
  PedidoVibracaoAdmin,
  UsuarioAdmin,
  EditarUsuarioPayload,
} from '../models/admin.models';

const BASE = environment.apiUrl;

@Injectable({ providedIn: 'root' })
export class AdminService {
  constructor(private http: HttpClient) {}

  // ── Categorias ────────────────────────────────────────────────
  getCategorias(): Observable<Categoria[]> {
    return this.http
      .get<ApiResponse<Categoria[]>>(`${BASE}/api/categorias`)
      .pipe(map(r => r.data));
  }

  // ── Cursos ────────────────────────────────────────────────────
  getCursos(): Observable<CursoResumo[]> {
    return this.http
      .get<ApiResponse<CursoResumo[]>>(`${BASE}/api/cursos`)
      .pipe(map(r => r.data));
  }

  getCurso(id: string): Observable<CursoDetalhe> {
    return this.http
      .get<ApiResponse<CursoDetalhe>>(`${BASE}/api/cursos/${id}`)
      .pipe(map(r => r.data));
  }

  criarCurso(payload: CursoPayload): Observable<CursoDetalhe> {
    return this.http
      .post<ApiResponse<CursoDetalhe>>(`${BASE}/api/admin/cursos`, payload)
      .pipe(map(r => r.data));
  }

  atualizarCurso(id: string, payload: CursoPayload): Observable<CursoDetalhe> {
    return this.http
      .put<ApiResponse<CursoDetalhe>>(`${BASE}/api/admin/cursos/${id}`, payload)
      .pipe(map(r => r.data));
  }

  excluirCurso(id: string): Observable<void> {
    return this.http.delete<void>(`${BASE}/api/admin/cursos/${id}`);
  }

  // ── Aulas ─────────────────────────────────────────────────────
  criarAula(cursoId: string, payload: AulaPayload): Observable<AulaAdmin> {
    return this.http
      .post<ApiResponse<AulaAdmin>>(`${BASE}/api/admin/cursos/${cursoId}/aulas`, payload)
      .pipe(map(r => r.data));
  }

  atualizarAula(cursoId: string, aulaId: string, payload: AulaPayload): Observable<AulaAdmin> {
    return this.http
      .put<ApiResponse<AulaAdmin>>(`${BASE}/api/admin/cursos/${cursoId}/aulas/${aulaId}`, payload)
      .pipe(map(r => r.data));
  }

  excluirAula(cursoId: string, aulaId: string): Observable<void> {
    return this.http.delete<void>(`${BASE}/api/admin/cursos/${cursoId}/aulas/${aulaId}`);
  }

  // ── Matrículas ────────────────────────────────────────────────
  getMatriculas(pagina = 1, tamanho = 20): Observable<PagedResult<MatriculaAdmin>> {
    const params = new HttpParams().set('pagina', pagina).set('tamanho', tamanho);
    return this.http
      .get<ApiResponse<PagedResult<MatriculaAdmin>>>(`${BASE}/api/admin/matriculas`, { params })
      .pipe(map(r => r.data));
  }

  // ── Pedidos de Vibração ───────────────────────────────────────
  // Endpoint real conforme Swagger: /api/admin/pedidos-vibracao
  getPedidosVibracao(pagina = 1, tamanho = 20): Observable<PagedResult<PedidoVibracaoAdmin>> {
    const params = new HttpParams().set('pagina', pagina).set('tamanho', tamanho);
    return this.http
      .get<ApiResponse<PagedResult<PedidoVibracaoAdmin>>>(`${BASE}/api/admin/pedidos-vibracao`, { params })
      .pipe(map(r => r.data));
  }

  /**
   * Conta pedidos NÃO lidos para o card do dashboard.
   *
   * Estratégia: busca uma página grande (tamanho=500) e conta os items com
   * lido=false no cliente — sem depender de filtro no backend.
   * Funciona corretamente enquanto o total de pedidos for razoável.
   * Quando o backend implementar ?lido=false, basta trocar a implementação
   * abaixo para usar o totalItens diretamente.
   */
  getPedidosNaoLidos(): Observable<number> {
    const params = new HttpParams().set('pagina', 1).set('tamanho', 500);
    return this.http
      .get<ApiResponse<PagedResult<PedidoVibracaoAdmin>>>(`${BASE}/api/admin/pedidos-vibracao`, { params })
      .pipe(map(r => r.data?.items.filter(p => !p.lido).length ?? 0));
  }

  /**
   * Marca um pedido como lido.
   * Endpoint: PATCH /api/admin/pedidos-vibracao/{id}/lido
   */
  marcarPedidoLido(id: string): Observable<void> {
    return this.http.patch<void>(`${BASE}/api/admin/pedidos-vibracao/${id}/lido`, {});
  }

  // ── Usuários ──────────────────────────────────────────────────
  getUsuarios(pagina = 1, tamanho = 20): Observable<PagedResult<UsuarioAdmin>> {
    const params = new HttpParams().set('pagina', pagina).set('tamanho', tamanho);
    return this.http
      .get<ApiResponse<PagedResult<UsuarioAdmin>>>(`${BASE}/api/admin/usuarios`, { params })
      .pipe(map(r => r.data));
  }

  /**
   * Edita nome e role de um usuário.
   * Endpoint: PUT /api/admin/usuarios/{id}
   *
   * ⚠️  Este endpoint ainda não existe no backend — ver GitHub Issue abaixo.
   * Ao implementar no .NET:
   *   [HttpPut("{id}")]
   *   [Authorize(Roles = "admin")]
   *   public async Task<IActionResult> EditarUsuario(string id,
   *       [FromBody] EditarUsuarioAdminDto dto, CancellationToken ct)
   *   {
   *       var usuario = await _usuarioRepo.GetTrackedByIdAsync(id, ct)
   *           ?? throw new KeyNotFoundException("Usuário não encontrado.");
   *       usuario.Nome = dto.Nome.Trim();
   *       usuario.Role = dto.Role; // "aluno" ou "admin"
   *       await _usuarioRepo.SaveChangesAsync(ct);
   *       return Ok(ApiResponse<UsuarioResponseDto>.Ok(Map(usuario)));
   *   }
   *
   * DTO necessário no backend:
   *   public record EditarUsuarioAdminDto(string Nome, string Role);
   */
  editarUsuario(id: string, payload: EditarUsuarioPayload): Observable<UsuarioAdmin> {
    return this.http
      .put<ApiResponse<UsuarioAdmin>>(`${BASE}/api/admin/usuarios/${id}`, payload)
      .pipe(map(r => r.data));
  }
}