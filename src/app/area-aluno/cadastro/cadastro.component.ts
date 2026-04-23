import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators, AbstractControl, ValidationErrors } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { AuthService } from '../services/auth.service';

function senhasIguaisValidator(control: AbstractControl): ValidationErrors | null {
  const senha = control.get('senha');
  const confirmar = control.get('confirmarSenha');
  if (!senha || !confirmar) return null;
  return senha.value !== confirmar.value ? { senhasDiferentes: true } : null;
}

@Component({
  selector: 'app-cadastro',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss'],
})
export class CadastroComponent implements OnInit, OnDestroy {
  private destroy$ = new Subject<void>();

  formulario: FormGroup;
  erro: string | null = null;
  carregando = false;
  senhaVisivel = false;
  confirmarSenhaVisivel = false;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router,
  ) {
    this.formulario = this.fb.group(
      {
        nome: ['', [Validators.required, Validators.minLength(3)]],
        email: ['', [Validators.required, Validators.email]],
        senha: ['', [Validators.required, Validators.minLength(6)]],
        confirmarSenha: ['', Validators.required],
      },
      { validators: senhasIguaisValidator }
    );
  }

  ngOnInit(): void {
    if (this.authService.estaLogado) {
      this.router.navigate(['/area-aluno']);
    }
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  get nomeCtrl()           { return this.formulario.get('nome'); }
  get emailCtrl()          { return this.formulario.get('email'); }
  get senhaCtrl()          { return this.formulario.get('senha'); }
  get confirmarSenhaCtrl() { return this.formulario.get('confirmarSenha'); }

  alternarSenha(): void     { this.senhaVisivel = !this.senhaVisivel; }
  alternarConfirmar(): void { this.confirmarSenhaVisivel = !this.confirmarSenhaVisivel; }

  cadastrar(): void {
    if (this.formulario.invalid) {
      this.formulario.markAllAsTouched();
      return;
    }

    this.carregando = true;
    this.erro = null;

    const { nome, email, senha } = this.formulario.value;

    this.authService
      .register(nome, email, senha)
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: () => {
          this.carregando = false;
          this.router.navigate(['/area-aluno']);
        },
        error: (err) => {
          this.carregando = false;
          if (err?.status === 409) {
            this.erro = 'Este e-mail já está cadastrado. Tente fazer login.';
          } else if (err?.status === 400) {
            this.erro = 'Verifique os dados informados e tente novamente.';
          } else {
            this.erro = 'Não foi possível criar sua conta. Tente novamente.';
          }
        },
      });
  }
}
