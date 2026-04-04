// src/app/core/interceptors/auth.interceptor.ts
//
// Injeta automaticamente o Authorization: Bearer <token> em toda requisição
// que vá para a API. Também trata 401 tentando refresh automático.
//
import { HttpInterceptorFn, HttpRequest, HttpHandlerFn, HttpErrorResponse } from '@angular/common/http';
import { inject } from '@angular/core';
import { catchError, switchMap, throwError } from 'rxjs';
import { AuthService } from '../../area-aluno/services/auth.service';
import { environment } from '../../../environments/environment';

export const authInterceptor: HttpInterceptorFn = (
  req: HttpRequest<unknown>,
  next: HttpHandlerFn,
) => {
  const authService = inject(AuthService);

  // Só injeta token em chamadas para a nossa API
  if (!req.url.startsWith(environment.apiUrl)) {
    return next(req);
  }

  const token = authService.accessToken;
  const reqAutenticada = token
    ? req.clone({ setHeaders: { Authorization: `Bearer ${token}` } })
    : req;

  return next(reqAutenticada).pipe(
    catchError((erro: HttpErrorResponse) => {
      // 401 → tenta refresh uma vez, desde que a própria requisição
      // que falhou não seja o endpoint de refresh (evita loop infinito)
      const isRefreshEndpoint = req.url.includes('/api/auth/refresh');
      if (erro.status === 401 && !isRefreshEndpoint && authService.refreshToken) {
        return authService.refresh().pipe(
          switchMap(() => {
            const novoToken = authService.accessToken;
            const reqRenovada = req.clone({
              setHeaders: { Authorization: `Bearer ${novoToken}` },
            });
            return next(reqRenovada);
          }),
          catchError(erroRefresh => throwError(() => erroRefresh)),
        );
      }
      return throwError(() => erro);
    }),
  );
};