// src/app/area-admin/guards/admin.guard.ts
import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../../area-aluno/services/auth.service';

export const adminGuard: CanActivateFn = () => {
  const auth = inject(AuthService);
  const router = inject(Router);

  if (!auth.estaLogado) {
    return router.createUrlTree(['/login']);
  }

  if (!auth.isAdmin) {
    // Usuário logado mas sem role admin → redireciona para área do aluno
    return router.createUrlTree(['/area-aluno']);
  }

  return true;
};