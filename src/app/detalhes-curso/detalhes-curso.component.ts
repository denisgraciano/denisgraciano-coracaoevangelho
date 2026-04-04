import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Curso } from './curso.model';
import { InscricaoService } from '../inscricao-curso/inscricao.service';
import { CursosService } from '../services/cursos.service';

@Component({
  selector: 'app-detalhes-curso',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './detalhes-curso.component.html',
  styleUrl: './detalhes-curso.component.scss'
})
export class DetalhesCursoComponent implements OnInit, OnDestroy {

  private destroy$ = new Subject<void>();

  curso: Curso = {
    id: 0,
    titulo: '',
    categoria: '',
    instrutor: '',
    duracao: '',
    descricao: '',
    objetivos: [],
    conteudoProgramatico: [],
    requisitos: [],
    certificacao: '',
    modalidade: '',
    dataInicio: '',
    dataFim: '',
    horario: '',
    vagas: 0,
    vagasDisponiveis: 0,
    imagem: '',
    nivel: '',
    tags: [],
    depoimentos: [],
  };
  carregando = true;

  jaMatriculado = false;
  private cursoIdStr = '';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private inscricaoService: InscricaoService,
    private cursosService: CursosService,
  ) { }

  ngOnInit() {
    const cursoId = this.route.snapshot.paramMap.get('id');
    if (cursoId) {
      this.cursoIdStr = cursoId;
      this.carregarCurso(parseInt(cursoId));
      this.inscricaoService.verificarMatricula(cursoId)
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

  carregarCurso(id: number) {
    this.cursosService.obterCurso(String(id))
      .pipe(takeUntil(this.destroy$))
      .subscribe(detalhe => {
        this.carregando = false;
        if (!detalhe) return;
        this.curso = {
          id,
          titulo: detalhe.titulo,
          categoria: detalhe.categoria ?? '',
          instrutor: detalhe.instrutor,
          duracao: `${detalhe.totalAulas} aula${detalhe.totalAulas !== 1 ? 's' : ''}`,
          descricao: detalhe.descricao,
          objetivos: [],
          conteudoProgramatico: detalhe.aulas.map(a => a.titulo),
          requisitos: [],
          certificacao: detalhe.certificadoDisponivel ? 'Certificado de Conclusão' : '',
          modalidade: '',
          dataInicio: '',
          dataFim: '',
          horario: '',
          vagas: 0,
          vagasDisponiveis: 0,
          imagem: detalhe.imagemUrl,
          nivel: '',
          tags: detalhe.categoria ? [detalhe.categoria] : [],
          depoimentos: [],
        };
      });
  }

  voltar() {
    this.router.navigate(['/']);
  }

  abrirInscricao() {
    this.router.navigate(['/inscricao', this.cursoIdStr || this.curso.id]);
  }

  formatarData(data: string): string {
    const date = new Date(data);
    return date.toLocaleDateString('pt-BR');
  }

  getEstrelas(nota: number): number[] {
    return Array(nota).fill(0);
  }
}
