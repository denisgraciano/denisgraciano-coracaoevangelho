// src/app/area-aluno/services/auth.service.ts
//
// Correções desta versão:
//   1. Remove a interface Usuario local — usa a de area-aluno.models.ts,
//      evitando o TS2322 no DashboardComponent e PerfilService.
//   2. login() chama a API real (POST /api/auth/login).
//   3. isAdmin lê a role do JWT sem biblioteca extra.
//   4. Mantém logout() compatível com todos os consumers existentes.
//
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable, tap, catchError, throwError } from 'rxjs';
import { environment } from '../../../environments/environment';

// Importa a interface canônica do projeto — evita o TS2322 por interfaces duplicadas
import { Usuario } from '../models/area-aluno.models';

// ── Contrato da resposta de autenticação da API ───────────────
interface AuthApiResponse {
  success: boolean;
  data: {
    accessToken: string;
    expira: string;
    refreshToken: string;
    // A API retorna { id, nome, email, avatarUrl? } — compatível com Usuario
    usuario: Usuario;
  };
}

// ── Chaves no localStorage ────────────────────────────────────
const KEY_USUARIO       = 'ce_usuario_logado';
const KEY_ACCESS_TOKEN  = 'ce_access_token';
const KEY_REFRESH_TOKEN = 'ce_refresh_token';

@Injectable({ providedIn: 'root' })
export class AuthService {

  private usuarioSubject = new BehaviorSubject<Usuario | null>(
    this.recuperarUsuarioStorage(),
  );

  readonly usuario$: Observable<Usuario | null> = this.usuarioSubject.asObservable();

  constructor(
    private http: HttpClient,
    private router: Router,
  ) {}

  // ── Getters ────────────────────────────────────────────────
  get usuarioAtual(): Usuario | null {
    return this.usuarioSubject.getValue();
  }

  get estaLogado(): boolean {
    return this.usuarioAtual !== null && !!this.accessToken;
  }

  get accessToken(): string | null {
    return localStorage.getItem(KEY_ACCESS_TOKEN);
  }

  get refreshToken(): string | null {
    return localStorage.getItem(KEY_REFRESH_TOKEN);
  }

  /**
   * Verifica se o usuário logado tem role "admin".
   * Decodifica o payload JWT sem biblioteca — o ASP.NET Core serializa
   * ClaimTypes.Role com o namespace completo da Microsoft.
   */
  get isAdmin(): boolean {
    return this.roleAtual === 'admin';
  }

  get roleAtual(): string {
    const token = this.accessToken;
    if (!token) return '';
    try {
      const parts = token.split('.');
      if (parts.length !== 3) return '';
      // base64url → base64 → JSON
      const payload = JSON.parse(
        atob(parts[1].replace(/-/g, '+').replace(/_/g, '/'))
      );
      // ASP.NET Core usa esse namespace para ClaimTypes.Role
      return (
        payload['http://schemas.microsoft.com/ws/2008/06/identity/claims/role']
        ?? payload['role']
        ?? ''
      );
    } catch {
      return '';
    }
  }

  // ── Login via API ──────────────────────────────────────────
  login(email: string, senha: string): Observable<AuthApiResponse> {
    return this.http
      .post<AuthApiResponse>(`${environment.apiUrl}/api/auth/login`, { email, senha })
      .pipe(
        tap(response => this.persistirSessao(response)),
        catchError(err => throwError(() => err)),
      );
  }

  // ── Refresh token ──────────────────────────────────────────
  refresh(): Observable<AuthApiResponse> {
    return this.http
      .post<AuthApiResponse>(`${environment.apiUrl}/api/auth/refresh`, {
        refreshToken: this.refreshToken,
      })
      .pipe(
        tap(response => this.persistirSessao(response)),
        catchError(err => {
          this.logout(); // Refresh inválido → força logout
          return throwError(() => err);
        }),
      );
  }

  // ── Logout ─────────────────────────────────────────────────
  logout(): void {
    localStorage.removeItem(KEY_USUARIO);
    localStorage.removeItem(KEY_ACCESS_TOKEN);
    localStorage.removeItem(KEY_REFRESH_TOKEN);
    this.usuarioSubject.next(null);
    this.router.navigate(['/login']);
  }

  // ── Helpers privados ───────────────────────────────────────
  private persistirSessao(response: AuthApiResponse): void {
    const { accessToken, refreshToken, usuario } = response.data;
    localStorage.setItem(KEY_ACCESS_TOKEN,  accessToken);
    localStorage.setItem(KEY_REFRESH_TOKEN, refreshToken);
    localStorage.setItem(KEY_USUARIO,       JSON.stringify(usuario));
    this.usuarioSubject.next(usuario);
  }

  private recuperarUsuarioStorage(): Usuario | null {
    try {
      const raw = localStorage.getItem(KEY_USUARIO);
      return raw ? (JSON.parse(raw) as Usuario) : null;
    } catch {
      return null;
    }
  }
}