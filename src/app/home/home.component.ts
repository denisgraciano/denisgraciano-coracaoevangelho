import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Subject, takeUntil, catchError, of } from 'rxjs';
import { CursosService } from '../services/cursos.service';

export interface CursoDestaque {
  id: string;
  titulo: string;
  categoria: string;
  descricao: string;
  dataInicio: string;
  duracao: string;
  vagasDisponiveis: number;
  gratuito: boolean;
  imagem: string;
}

export interface Palestra {
  id?: number;
  titulo: string;
  data: string;
  horario?: string;
  modalidade?: string;
  local?: string;
}

export interface Categoria {
  nome: string;
  descricao: string;
  totalCursos: number;
  icone: string;
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit, OnDestroy {
  emailNewsletter = '';
  private destroy$ = new Subject<void>();

  cursosDestaque: CursoDestaque[] = [];
  carregandoCursos = true;

  categorias: Categoria[] = [
    {
      nome: 'Doutrina Espírita',
      descricao: 'Estude os fundamentos e obras básicas do Espiritismo',
      totalCursos: 8,
      icone: 'assets/images/icon-doutrina.png'
    },
    {
      nome: 'Desafios do Dia a Dia',
      descricao: 'Aplique ensinamentos espíritas em situações cotidianas',
      totalCursos: 6,
      icone: 'assets/images/icon-desafios.png'
    }
  ];

  palestrasExibicao: Palestra[] = [];
  tituloPalestras = 'Próximas Palestras';
  subtituloPalestras = 'Não perca as próximas oportunidades de aprendizado';

  constructor(private http: HttpClient, private cursosService: CursosService) {}

  ngOnInit(): void {
    this.carregarCursos();
    this.carregarPalestras();
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  private carregarCursos(): void {
    this.cursosService.listarCursos()
      .pipe(takeUntil(this.destroy$))
      .subscribe(cursos => {
        this.cursosDestaque = cursos.map(c => ({
          id: c.id,
          titulo: c.titulo,
          categoria: c.categoria ?? '',
          descricao: c.descricao,
          dataInicio: 'Início Imediato',
          duracao: `${c.totalAulas} aula${c.totalAulas !== 1 ? 's' : ''}`,
          vagasDisponiveis: 0,
          gratuito: true,
          imagem: c.imagemUrl,
        }));
        this.carregandoCursos = false;
      });
  }

  private carregarPalestras(): void {
    this.http.get<Palestra[]>('assets/palestras.json')
      .pipe(
        takeUntil(this.destroy$),
        catchError(() => of([]))
      )
      .subscribe((proximas) => {
        if (proximas && proximas.length > 0) {
          this.palestrasExibicao = proximas;
          this.tituloPalestras = 'Próximas Palestras';
          this.subtituloPalestras = 'Não perca as próximas oportunidades de aprendizado';
        } else {
          this.carregarPalestrasRealizadas();
        }
      });
  }

  private carregarPalestrasRealizadas(): void {
    this.http.get<Palestra[]>('assets/palestras-realizadas.json')
      .pipe(
        takeUntil(this.destroy$),
        catchError(() => of([]))
      )
      .subscribe((realizadas) => {
        this.palestrasExibicao = realizadas;
        this.tituloPalestras = 'Palestras Realizadas';
        this.subtituloPalestras = 'Confira os temas que já foram abordados em nossa casa';
      });
  }

  scrollToCursos(): void {
    document.getElementById('cursos')?.scrollIntoView({ behavior: 'smooth' });
  }

  inscreverNewsletter(): void {
    if (this.emailNewsletter) {
      alert('Obrigado por se inscrever! Você receberá nossas novidades em breve.');
      this.emailNewsletter = '';
    }
  }

  extrairDia(data: string): string {
    if (!data) return '--';
    return new Date(data).getDate().toString().padStart(2, '0');
  }

  extrairMes(data: string): string {
    if (!data) return '---';
    const meses = ['JAN', 'FEV', 'MAR', 'ABR', 'MAI', 'JUN', 'JUL', 'AGO', 'SET', 'OUT', 'NOV', 'DEZ'];
    return meses[new Date(data).getMonth()];
  }
}