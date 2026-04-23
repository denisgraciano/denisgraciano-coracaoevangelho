// src/app/detalhes-curso/detalhes-curso.component.ts
import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { Curso } from './curso.model';
import { AuthService } from '../area-aluno/services/auth.service';
import { CursoService } from '../area-aluno/services/curso.service';
import { InscricaoService } from '../inscricao-curso/inscricao.service';

@Component({
  selector: 'app-detalhes-curso',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './detalhes-curso.component.html',
  styleUrls: ['./detalhes-curso.component.scss']
})
export class DetalhesCursoComponent implements OnInit, OnDestroy {
  private destroy$ = new Subject<void>();

  curso: Curso | null = null;
  carregando = true;
  erro: string | null = null;

  inscrevendo = false;
  erroInscricao: string | null = null;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private authService: AuthService,
    private cursoService: CursoService,
    private inscricaoService: InscricaoService
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.carregarCurso(id);
    }
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  carregarCurso(id: string): void {
    this.carregando = true;
    this.erro = null;
    this.cursoService.obterPorId(id)
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (dados) => {
          this.curso = dados as unknown as Curso;
          this.carregando = false;
        },
        error: (err: Error) => {
          this.erro = err.message;
          this.carregando = false;
        }
      });
  }

  /**
   * Não logado → redireciona para /login com returnUrl para voltar ao curso após autenticar.
   * Logado     → chama a API direto, sem formulário → redireciona para /area-aluno.
   */
  abrirInscricao(): void {
    if (!this.authService.estaLogado) {
      this.router.navigate(['/login'], {
        queryParams: { returnUrl: `/curso/${this.curso!.id}` }
      });
      return;
    }

    this.inscrevendo = true;
    this.erroInscricao = null;

    this.inscricaoService.inscrever(this.curso!.id)
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: () => {
          this.router.navigate(['/area-aluno']);
        },
        error: (err: Error) => {
          this.inscrevendo = false;
          this.erroInscricao = err.message;
        }
      });
  }

  voltar(): void {
    this.router.navigate(['/']);
  }

  formatarData(data: string): string {
    return new Date(data).toLocaleDateString('pt-BR');
  }

  getEstrelas(nota: number): number[] {
    return Array(nota).fill(0);
  }
}
