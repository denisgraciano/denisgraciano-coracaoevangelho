// src/app/detalhes-curso/detalhes-curso.component.ts
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

// Injeta AuthService e InscricaoService já existentes
import { AuthService } from '../area-aluno/services/auth.service';
import { InscricaoService } from '../inscricao-curso/inscricao.service';

@Component({
  selector: 'app-detalhes-curso',
  templateUrl: './detalhes-curso.component.html',
  styleUrls: ['./detalhes-curso.component.scss']
})
export class DetalhesCursoComponent implements OnInit, OnDestroy {

  private destroy$ = new Subject<void>();

  // Estados de UI para o botão
  inscrevendo = false;
  erroInscricao: string | null = null;

  // ... (resto das propriedades existentes: curso, etc.)

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private authService: AuthService,       // ← NOVO
    private inscricaoService: InscricaoService  // ← NOVO
  ) { }

  ngOnInit(): void {
    const cursoId = this.route.snapshot.paramMap.get('id');
    if (cursoId) {
      this.carregarCurso(parseInt(cursoId));
    }
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  /**
   * Fluxo de inscrição simplificado:
   *
   * NÃO logado → redireciona para /login com returnUrl para voltar ao curso
   * Logado      → chama o service direto → redireciona para o dashboard
   *
   * Sem formulário, sem revisão de dados — o JWT já identifica o usuário no backend.
   */
  abrirInscricao(): void {
    // ── Não logado: vai para login e volta ao curso após autenticar ──
    if (!this.authService.estaLogado) {
      this.router.navigate(['/login'], {
        queryParams: { returnUrl: `/curso/${this.curso.id}` }
      });
      return;
    }

    // ── Logado: inscreve direto, sem formulário ──
    this.inscrevendo = true;
    this.erroInscricao = null;

    this.inscricaoService.inscrever(this.curso.id)
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: () => {
          // Inscrição OK → vai direto para o dashboard do aluno
          this.router.navigate(['/area-aluno']);
        },
        error: (erro: Error) => {
          this.inscrevendo = false;
          this.erroInscricao = erro.message;
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

  carregarCurso(id: number): void {
    console.log('Carregando curso com ID:', id);
    // TODO: chamar CursoService quando disponível
  }
}