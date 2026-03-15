// src/app/area-aluno/guards/auth.guard.ts
import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

export const authGuard: CanActivateFn = () => {
  const auth = inject(AuthService);
  const router = inject(Router);

  if (auth.estaLogado) return true;

  // Redireciona para login preservando a URL tentada
  return router.createUrlTree(['/login']);
};