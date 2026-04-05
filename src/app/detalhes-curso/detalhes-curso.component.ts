import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Curso } from './curso.model';
import { InscricaoService } from '../inscricao-curso/inscricao.service';
import { ApiResponse } from '../area-admin/models/admin.models';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-detalhes-curso',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './detalhes-curso.component.html',
  styleUrl: './detalhes-curso.component.scss'
})
export class DetalhesCursoComponent implements OnInit, OnDestroy {

  private destroy$ = new Subject<void>();

  curso: Curso | null = null;
  carregando = true;
  erro: string | null = null;

  jaMatriculado = false;
  private cursoId = '';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private http: HttpClient,
    private inscricaoService: InscricaoService
  ) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.cursoId = id;
      this.carregarCurso(id);
      this.inscricaoService.verificarMatricula(id)
        .pipe(takeUntil(this.destroy$))
        .subscribe(matriculado => {
          this.jaMatriculado = matriculado;
        });
    }
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  carregarCurso(id: string) {
    this.carregando = true;
    this.erro = null;
    this.http.get<ApiResponse<Curso>>(`${environment.apiUrl}/api/cursos/${id}`)
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: resposta => {
          this.curso = resposta.data;
          this.carregando = false;
        },
        error: () => {
          this.erro = 'Não foi possível carregar o curso. Tente novamente.';
          this.carregando = false;
        }
      });
  }

  voltar() {
    this.router.navigate(['/']);
  }

  abrirInscricao() {
    this.router.navigate(['/inscricao', this.cursoId]);
  }

  formatarData(data?: string): string {
    if (!data) return '—';
    const date = new Date(data);
    return date.toLocaleDateString('pt-BR');
  }

  getEstrelas(nota: number): number[] {
    return Array(nota).fill(0);
  }
}
