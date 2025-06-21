import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

export interface Curso {
  id: number;
  titulo: string;
  categoria: string;
  instrutor: string;
  duracao: string;
  preco: number;
  precoPromocional?: number;
  descricao: string;
  objetivos: string[];
  conteudoProgramatico: string[];
  requisitos: string[];
  certificacao: string;
  modalidade: string;
  dataInicio: string;
  dataFim: string;
  horario: string;
  vagas: number;
  vagasDisponiveis: number;
  imagem: string;
  nivel: string;
  tags: string[];
  depoimentos: {
    nome: string;
    comentario: string;
    nota: number;
  }[];
}

@Component({
  selector: 'app-detalhes-curso',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="detalhes-curso-container">
      <div class="curso-header">
        <button class="btn-voltar" (click)="voltar()">
          ← Voltar
        </button>
        
        <div class="curso-hero">
          <div class="curso-imagem">
            <img [src]="curso.imagem" [alt]="curso.titulo" />
            <div class="curso-categoria">{{ curso.categoria }}</div>
          </div>
          
          <div class="curso-info-principal">
            <h1>{{ curso.titulo }}</h1>
            <div class="instrutor-info">
              <span class="instrutor">Por {{ curso.instrutor }}</span>
              <div class="nivel-badge">{{ curso.nivel }}</div>
            </div>
            
            <div class="curso-meta">
              <div class="meta-item">
                <span class="meta-label">Duração:</span>
                <span class="meta-value">{{ curso.duracao }}</span>
              </div>
              <div class="meta-item">
                <span class="meta-label">Modalidade:</span>
                <span class="meta-value">{{ curso.modalidade }}</span>
              </div>
              <div class="meta-item">
                <span class="meta-label">Vagas:</span>
                <span class="meta-value">{{ curso.vagasDisponiveis }}/{{ curso.vagas }}</span>
              </div>
            </div>
            
            <div class="preco-container">
              <div class="preco-atual" *ngIf="curso.precoPromocional">
                R$ {{ curso.precoPromocional | number:'1.2-2' }}
              </div>
              <div class="preco-original" [class.riscado]="curso.precoPromocional">
                R$ {{ curso.preco | number:'1.2-2' }}
              </div>
              <div class="desconto" *ngIf="curso.precoPromocional">
                {{ calcularDesconto() }}% OFF
              </div>
            </div>
            
            <button class="btn-inscrever" (click)="abrirInscricao()" 
                    [disabled]="curso.vagasDisponiveis === 0">
              {{ curso.vagasDisponiveis > 0 ? 'Inscrever-se Agora' : 'Esgotado' }}
            </button>
          </div>
        </div>
      </div>
      
      <div class="curso-conteudo">
        <div class="conteudo-principal">
          <section class="secao">
            <h2>Sobre o Curso</h2>
            <p>{{ curso.descricao }}</p>
          </section>
          
          <section class="secao">
            <h2>Objetivos</h2>
            <ul class="lista-objetivos">
              <li *ngFor="let objetivo of curso.objetivos">{{ objetivo }}</li>
            </ul>
          </section>
          
          <section class="secao">
            <h2>Conteúdo Programático</h2>
            <div class="programatico">
              <div class="modulo" *ngFor="let modulo of curso.conteudoProgramatico; let i = index">
                <div class="modulo-numero">{{ i + 1 }}</div>
                <div class="modulo-titulo">{{ modulo }}</div>
              </div>
            </div>
          </section>
          
          <section class="secao">
            <h2>Requisitos</h2>
            <ul class="lista-requisitos">
              <li *ngFor="let requisito of curso.requisitos">{{ requisito }}</li>
            </ul>
          </section>
          
          <section class="secao" *ngIf="curso.depoimentos.length > 0">
            <h2>Depoimentos</h2>
            <div class="depoimentos">
              <div class="depoimento" *ngFor="let depoimento of curso.depoimentos">
                <div class="depoimento-header">
                  <span class="depoimento-nome">{{ depoimento.nome }}</span>
                  <div class="estrelas">
                    <span *ngFor="let star of getEstrelas(depoimento.nota)" class="estrela">★</span>
                  </div>
                </div>
                <p class="depoimento-texto">{{ depoimento.comentario }}</p>
              </div>
            </div>
          </section>
        </div>
        
        <div class="sidebar">
          <div class="card-inscricao">
            <h3>Informações do Curso</h3>
            
            <div class="info-item">
              <strong>Data de Início:</strong>
              <span>{{ formatarData(curso.dataInicio) }}</span>
            </div>
            
            <div class="info-item">
              <strong>Data de Término:</strong>
              <span>{{ formatarData(curso.dataFim) }}</span>
            </div>
            
            <div class="info-item">
              <strong>Horário:</strong>
              <span>{{ curso.horario }}</span>
            </div>
            
            <div class="info-item">
              <strong>Certificação:</strong>
              <span>{{ curso.certificacao }}</span>
            </div>
            
            <div class="tags">
              <span class="tag" *ngFor="let tag of curso.tags">{{ tag }}</span>
            </div>
            
            <button class="btn-inscrever-sidebar" (click)="abrirInscricao()"
                    [disabled]="curso.vagasDisponiveis === 0">
              {{ curso.vagasDisponiveis > 0 ? 'Inscrever-se' : 'Esgotado' }}
            </button>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .detalhes-curso-container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 20px;
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    }
    
    .btn-voltar {
      background: #2c5aa0;
      color: white;
      border: none;
      padding: 10px 20px;
      border-radius: 5px;
      cursor: pointer;
      margin-bottom: 20px;
      font-size: 14px;
      transition: background-color 0.3s;
    }
    
    .btn-voltar:hover {
      background: #1e3d6f;
    }
    
    .curso-hero {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 40px;
      margin-bottom: 40px;
      background: white;
      padding: 30px;
      border-radius: 10px;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    }
    
    .curso-imagem {
      position: relative;
    }
    
    .curso-imagem img {
      width: 100%;
      height: 300px;
      object-fit: cover;
      border-radius: 10px;
    }
    
    .curso-categoria {
      position: absolute;
      top: 15px;
      left: 15px;
      background: #2c5aa0;
      color: white;
      padding: 5px 15px;
      border-radius: 20px;
      font-size: 12px;
      font-weight: bold;
    }
    
    .curso-info-principal h1 {
      color: #2c5aa0;
      margin: 0 0 15px 0;
      font-size: 2.2em;
      line-height: 1.2;
    }
    
    .instrutor-info {
      display: flex;
      align-items: center;
      gap: 15px;
      margin-bottom: 20px;
    }
    
    .instrutor {
      color: #666;
      font-size: 16px;
    }
    
    .nivel-badge {
      background: #e8f4fd;
      color: #2c5aa0;
      padding: 4px 12px;
      border-radius: 15px;
      font-size: 12px;
      font-weight: bold;
    }
    
    .curso-meta {
      display: flex;
      flex-direction: column;
      gap: 10px;
      margin-bottom: 25px;
    }
    
    .meta-item {
      display: flex;
      justify-content: space-between;
    }
    
    .meta-label {
      color: #666;
      font-weight: 500;
    }
    
    .meta-value {
      color: #333;
      font-weight: bold;
    }
    
    .preco-container {
      display: flex;
      align-items: center;
      gap: 15px;
      margin-bottom: 25px;
    }
    
    .preco-atual {
      font-size: 2em;
      font-weight: bold;
      color: #2c5aa0;
    }
    
    .preco-original {
      font-size: 1.2em;
      color: #666;
    }
    
    .preco-original.riscado {
      text-decoration: line-through;
      color: #999;
    }
    
    .desconto {
      background: #ff4757;
      color: white;
      padding: 4px 8px;
      border-radius: 4px;
      font-size: 12px;
      font-weight: bold;
    }
    
    .btn-inscrever {
      background: #2c5aa0;
      color: white;
      border: none;
      padding: 15px 30px;
      border-radius: 8px;
      font-size: 16px;
      font-weight: bold;
      cursor: pointer;
      width: 100%;
      transition: background-color 0.3s;
    }
    
    .btn-inscrever:hover:not(:disabled) {
      background: #1e3d6f;
    }
    
    .btn-inscrever:disabled {
      background: #ccc;
      cursor: not-allowed;
    }
    
    .curso-conteudo {
      display: grid;
      grid-template-columns: 2fr 1fr;
      gap: 40px;
    }
    
    .conteudo-principal {
      background: white;
      padding: 30px;
      border-radius: 10px;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    }
    
    .secao {
      margin-bottom: 40px;
    }
    
    .secao h2 {
      color: #2c5aa0;
      margin-bottom: 20px;
      font-size: 1.5em;
      border-bottom: 2px solid #e8f4fd;
      padding-bottom: 10px;
    }
    
    .lista-objetivos, .lista-requisitos {
      list-style: none;
      padding: 0;
    }
    
    .lista-objetivos li, .lista-requisitos li {
      padding: 10px 0;
      border-bottom: 1px solid #f0f0f0;
      position: relative;
      padding-left: 25px;
    }
    
    .lista-objetivos li:before {
      content: "✓";
      color: #2c5aa0;
      font-weight: bold;
      position: absolute;
      left: 0;
    }
    
    .lista-requisitos li:before {
      content: "•";
      color: #2c5aa0;
      font-weight: bold;
      position: absolute;
      left: 0;
    }
    
    .programatico {
      display: flex;
      flex-direction: column;
      gap: 15px;
    }
    
    .modulo {
      display: flex;
      align-items: center;
      gap: 15px;
      padding: 15px;
      background: #f8f9fa;
      border-radius: 8px;
      border-left: 4px solid #2c5aa0;
    }
    
    .modulo-numero {
      background: #2c5aa0;
      color: white;
      width: 30px;
      height: 30px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: bold;
      font-size: 14px;
    }
    
    .modulo-titulo {
      flex: 1;
      font-weight: 500;
    }
    
    .depoimentos {
      display: flex;
      flex-direction: column;
      gap: 20px;
    }
    
    .depoimento {
      background: #f8f9fa;
      padding: 20px;
      border-radius: 8px;
      border-left: 4px solid #2c5aa0;
    }
    
    .depoimento-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 10px;
    }
    
    .depoimento-nome {
      font-weight: bold;
      color: #2c5aa0;
    }
    
    .estrelas {
      color: #ffd700;
    }
    
    .sidebar {
      display: flex;
      flex-direction: column;
      gap: 20px;
    }
    
    .card-inscricao {
      background: white;
      padding: 25px;
      border-radius: 10px;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
      position: sticky;
      top: 20px;
    }
    
    .card-inscricao h3 {
      color: #2c5aa0;
      margin-bottom: 20px;
      text-align: center;
    }
    
    .info-item {
      display: flex;
      flex-direction: column;
      gap: 5px;
      margin-bottom: 15px;
      padding-bottom: 15px;
      border-bottom: 1px solid #f0f0f0;
    }
    
    .info-item strong {
      color: #2c5aa0;
      font-size: 14px;
    }
    
    .info-item span {
      color: #333;
    }
    
    .tags {
      display: flex;
      flex-wrap: wrap;
      gap: 8px;
      margin-bottom: 20px;
    }
    
    .tag {
      background: #e8f4fd;
      color: #2c5aa0;
      padding: 4px 10px;
      border-radius: 15px;
      font-size: 12px;
      font-weight: 500;
    }
    
    .btn-inscrever-sidebar {
      background: #2c5aa0;
      color: white;
      border: none;
      padding: 12px 20px;
      border-radius: 8px;
      font-weight: bold;
      cursor: pointer;
      width: 100%;
      transition: background-color 0.3s;
    }
    
    .btn-inscrever-sidebar:hover:not(:disabled) {
      background: #1e3d6f;
    }
    
    .btn-inscrever-sidebar:disabled {
      background: #ccc;
      cursor: not-allowed;
    }
    
    @media (max-width: 768px) {
      .detalhes-curso-container {
        padding: 15px;
      }
      
      .curso-hero {
        grid-template-columns: 1fr;
        gap: 20px;
        padding: 20px;
      }
      
      .curso-conteudo {
        grid-template-columns: 1fr;
        gap: 20px;
      }
      
      .curso-info-principal h1 {
        font-size: 1.8em;
      }
      
      .preco-container {
        flex-direction: column;
        align-items: flex-start;
        gap: 10px;
      }
      
      .card-inscricao {
        position: static;
      }
    }
  `]
})
export class DetalhesCursoComponent implements OnInit {
  curso: Curso = {
    id: 1,
    titulo: 'Fundamentos da Doutrina Espírita',
    categoria: 'Doutrina Espírita',
    instrutor: 'Prof. João Silva',
    duracao: '8 semanas',
    preco: 150.00,
    precoPromocional: 99.00,
    descricao: 'Um curso completo sobre os fundamentos da Doutrina Espírita, abordando os principais conceitos e ensinamentos de Allan Kardec. Ideal para iniciantes que desejam compreender os princípios básicos do Espiritismo.',
    objetivos: [
      'Compreender os princípios fundamentais da Doutrina Espírita',
      'Conhecer a obra de Allan Kardec e sua importância',
      'Desenvolver uma visão clara sobre a vida após a morte',
      'Entender o processo de reencarnação e evolução espiritual',
      'Aplicar os ensinamentos espíritas no dia a dia'
    ],
    conteudoProgramatico: [
      'Introdução ao Espiritismo e Allan Kardec',
      'O Livro dos Espíritos - Conceitos Fundamentais',
      'A Natureza dos Espíritos e a Comunicação Mediúnica',
      'Lei de Reencarnação e Evolução Espiritual',
      'Lei de Causa e Efeito (Carma)',
      'A Prática da Caridade e do Amor ao Próximo',
      'Oração e Evangelização no Lar',
      'Aplicação Prática dos Ensinamentos Espíritas'
    ],
    requisitos: [
      'Interesse genuíno em aprender sobre Espiritismo',
      'Mente aberta para novos conceitos',
      'Disponibilidade para participar das aulas semanais',
      'Não é necessário conhecimento prévio'
    ],
    certificacao: 'Certificado de Conclusão',
    modalidade: 'Presencial',
    dataInicio: '2025-02-01',
    dataFim: '2025-03-29',
    horario: 'Sábados, 14h às 16h',
    vagas: 30,
    vagasDisponiveis: 12,
    imagem: 'assets/images/curso-fundamentos.jpg',
    nivel: 'Iniciante',
    tags: ['Espiritismo', 'Allan Kardec', 'Reencarnação', 'Mediunidade'],
    depoimentos: [
      {
        nome: 'Maria Santos',
        comentario: 'Curso excelente! Me ajudou muito a compreender os fundamentos do Espiritismo de forma clara e objetiva.',
        nota: 5
      },
      {
        nome: 'Carlos Oliveira',
        comentario: 'Professor muito didático e conteúdo bem estruturado. Recomendo para quem está começando.',
        nota: 5
      }
    ]
  };

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    // Aqui você carregaria o curso baseado no ID da rota
    const cursoId = this.route.snapshot.paramMap.get('id');
    if (cursoId) {
      // Carregar curso específico baseado no ID
      this.carregarCurso(parseInt(cursoId));
    }
  }

  carregarCurso(id: number) {
    // Aqui você faria a chamada para carregar o curso específico
    // Por enquanto, usando dados de exemplo
    console.log('Carregando curso com ID:', id);
  }

  voltar() {
    this.router.navigate(['/']);
  }

  abrirInscricao() {
    // Navegar para formulário de inscrição ou abrir modal
    this.router.navigate(['/inscricao', this.curso.id]);
  }

  calcularDesconto(): number {
    if (this.curso.precoPromocional) {
      return Math.round(((this.curso.preco - this.curso.precoPromocional) / this.curso.preco) * 100);
    }
    return 0;
  }

  formatarData(data: string): string {
    const date = new Date(data);
    return date.toLocaleDateString('pt-BR');
  }

  getEstrelas(nota: number): number[] {
    return Array(nota).fill(0);
  }
}

