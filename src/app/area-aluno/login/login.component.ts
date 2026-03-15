// src/app/area-aluno/login/login.component.ts
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

  formulario: FormGroup;
  erro: string | null = null;
  carregando = false;
  senhaVisivel = false;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    this.formulario = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      senha: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  ngOnInit(): void {
    // Se já está logado, redireciona direto para a área do aluno
    this.authService.usuario$
      .pipe(takeUntil(this.destroy$))
      .subscribe(usuario => {
        if (usuario) {
          this.router.navigate(['/area-aluno']);
        }
      });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  get emailCtrl() { return this.formulario.get('email'); }
  get senhaCtrl() { return this.formulario.get('senha'); }

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

    // Pequeno delay para simular chamada de rede (remover quando integrar ao backend)
    setTimeout(() => {
      const sucesso = this.authService.login(email, senha);
      this.carregando = false;

      if (!sucesso) {
        // Nunca informe qual campo está errado — boa prática de segurança
        this.erro = 'E-mail ou senha inválidos. Verifique seus dados e tente novamente.';
      }
      // Se sucesso, o subscribe do ngOnInit já redireciona automaticamente
    }, 600);
  }
}