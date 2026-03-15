import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Subject, takeUntil, catchError, of } from 'rxjs';

export interface CursoDestaque {
  id: number;
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

  cursosDestaque: CursoDestaque[] = [
    {
      id: 1,
      titulo: 'Fundamentos da Doutrina Espírita',
      categoria: 'Doutrina Espírita',
      descricao: 'Aprenda os conceitos básicos do Espiritismo com Allan Kardec',
      dataInicio: 'Início Imediato',
      duracao: '8 semanas',
      vagasDisponiveis: 12,
      gratuito: true,
      imagem: 'assets/images/curso1.jpg'
    },
    {
      id: 2,
      titulo: 'Mediunidade e Desenvolvimento Espiritual',
      categoria: 'Mediunidade',
      descricao: 'Desenvolva suas faculdades mediúnicas com segurança',
      dataInicio: 'Início Imediato',
      duracao: '12 semanas',
      vagasDisponiveis: 8,
      gratuito: true,
      imagem: 'assets/images/curso2.jpg'
    },
    {
      id: 3,
      titulo: 'Gestão de Conflitos com Base Espírita',
      categoria: 'Desafios do Dia a Dia',
      descricao: 'Resolva conflitos aplicando princípios espíritas',
      dataInicio: 'Início Imediato',
      duracao: '6 semanas',
      vagasDisponiveis: 15,
      gratuito: true,
      imagem: 'assets/images/curso3.jpg'
    }
  ];

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

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.carregarPalestras();
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
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