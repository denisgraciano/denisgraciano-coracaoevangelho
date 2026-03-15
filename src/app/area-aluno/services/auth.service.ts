// src/app/area-aluno/services/auth.service.ts
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { Usuario } from '../models/area-aluno.models';

const STORAGE_KEY = 'ce_usuario_logado';

@Injectable({ providedIn: 'root' })
export class AuthService {
  // BehaviorSubject expõe o estado reativo do usuário logado
  private usuarioSubject = new BehaviorSubject<Usuario | null>(
    this.recuperarUsuarioStorage()
  );

  readonly usuario$: Observable<Usuario | null> = this.usuarioSubject.asObservable();

  constructor(private router: Router) {}

  get usuarioAtual(): Usuario | null {
    return this.usuarioSubject.getValue();
  }

  get estaLogado(): boolean {
    return this.usuarioAtual !== null;
  }

  /**
   * Simula login — substituir por chamada HTTP ao backend real.
   * Nunca armazenar senha em localStorage em produção.
   */
  login(email: string, senha: string): boolean {
    // Mock: aceita qualquer email com senha "123456"
    if (email && senha === '123456') {
      const usuario: Usuario = {
        id: btoa(email),
        nome: email.split('@')[0],
        email,
      };
      localStorage.setItem(STORAGE_KEY, JSON.stringify(usuario));
      this.usuarioSubject.next(usuario);
      return true;
    }
    return false;
  }

  logout(): void {
    localStorage.removeItem(STORAGE_KEY);
    this.usuarioSubject.next(null);
    this.router.navigate(['/']);
  }

  private recuperarUsuarioStorage(): Usuario | null {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      return raw ? (JSON.parse(raw) as Usuario) : null;
    } catch {
      return null;
    }
  }
}