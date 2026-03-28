// src/app/area-aluno/login/login.component.ts
//
// IMPORTANTE: Este arquivo mantém EXATAMENTE a mesma interface pública
// que o HTML existente espera:
//   - formulario: FormGroup  (não "form")
//   - emailCtrl / senhaCtrl  (getters)
//   - senhaVisivel: boolean
//   - alternarSenha()
//   - entrar()
//   - erro: string | null
//   - carregando: boolean
//
// ÚNICA mudança de comportamento: entrar() agora chama a API real via
// AuthService.login() e redireciona para /admin se role === 'admin',
// ou /area-aluno para role === 'aluno'.
//
import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit, OnDestroy {
  private destroy$ = new Subject<void>();

  // Nome "formulario" mantido para compatibilidade com o HTML existente
  formulario: FormGroup;
  erro: string | null = null;
  carregando = false;
  senhaVisivel = false;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router,
  ) {
    this.formulario = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      senha: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  ngOnInit(): void {
    // Se já está logado, redireciona imediatamente para o destino correto
    if (this.authService.estaLogado) {
      this.redirecionar();
    }
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  // Getters usados pelo HTML existente
  get emailCtrl() { return this.formulario.get('email'); }
  get senhaCtrl()  { return this.formulario.get('senha'); }

  alternarSenha(): void {
    this.senhaVisivel = !this.senhaVisivel;
  }

  entrar(): void {
    if (this.formulario.invalid) {
      this.formulario.markAllAsTouched();
      return;
    }

    this.carregando = true;
    this.erro = null;

    const { email, senha } = this.formulario.value;

    this.authService
      .login(email, senha)
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: () => {
          this.carregando = false;
          this.redirecionar();
        },
        error: () => {
          // Mensagem genérica — nunca revela qual campo está errado (segurança)
          this.erro = 'E-mail ou senha inválidos. Verifique seus dados e tente novamente.';
          this.carregando = false;
        },
      });
  }

  private redirecionar(): void {
    // Lê a role diretamente do JWT decodificado no AuthService
    const destino = this.authService.isAdmin ? '/admin' : '/area-aluno';
    this.router.navigate([destino]);
  }
}