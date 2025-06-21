import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  template: `
    <div class="home-container">
      <!-- Hero Section -->
      <section class="hero-section">
        <div class="hero-content">
          <div class="hero-text">
            <h1>Transforme sua vida através do conhecimento espiritual</h1>
            <p>Descubra os ensinamentos da Doutrina Espírita e encontre respostas para os desafios do dia a dia</p>
            <div class="hero-buttons">
              <button class="btn-primary" (click)="scrollToCursos()">Ver Cursos</button>
              <a routerLink="/livro-dos-espiritos" class="btn-secondary">Livro dos Espíritos</a>
            </div>
          </div>
          <div class="hero-image">
            <img src="./assets/images/hero-bg.jpg" alt="Centro Espírita" />
          </div>
        </div>
      </section>

      <!-- Cursos em Destaque -->
      <section class="cursos-destaque" id="cursos">
        <div class="section-header">
          <h2>Cursos em Destaque</h2>
          <p>Aprenda com nossos especialistas e transforme sua jornada espiritual</p>
        </div>
        
        <div class="cursos-grid">
          <div class="curso-card" *ngFor="let curso of cursosDestaque">
            <div class="curso-imagem">
              <img [src]="curso.imagem" [alt]="curso.titulo" />
              <div class="curso-categoria">{{ curso.categoria }}</div>
            </div>
            
            <div class="curso-info">
              <h3>{{ curso.titulo }}</h3>
              <p class="curso-descricao">{{ curso.descricao }}</p>
              
              <div class="curso-meta">
                <span class="meta-item">📅 {{ curso.dataInicio }}</span>
                <span class="meta-item">⏰ {{ curso.duracao }}</span>
                <span class="meta-item">👥 {{ curso.vagasDisponiveis }} vagas</span>
              </div>
              
              <div class="curso-preco">
                <span class="preco-promocional" *ngIf="curso.precoPromocional">
                  R$ {{ curso.precoPromocional | number:'1.2-2' }}
                </span>
                <span class="preco-original" [class.riscado]="curso.precoPromocional">
                  R$ {{ curso.preco | number:'1.2-2' }}
                </span>
              </div>
              
              <a [routerLink]="['/curso', curso.id]" class="btn-curso">Ver Detalhes</a>
            </div>
          </div>
        </div>
      </section>

      <!-- Categorias de Cursos -->
      <section class="categorias-section">
        <div class="section-header">
          <h2>Categorias de Cursos</h2>
          <p>Escolha a área que mais desperta seu interesse</p>
        </div>
        
        <div class="categorias-grid">
          <div class="categoria-card" *ngFor="let categoria of categorias">
            <div class="categoria-icon">
              <img [src]="categoria.icone" [alt]="categoria.nome" />
            </div>
            <h3>{{ categoria.nome }}</h3>
            <p>{{ categoria.descricao }}</p>
            <span class="categoria-count">{{ categoria.totalCursos }} cursos disponíveis</span>
          </div>
        </div>
      </section>

      <!-- Próximos Cursos -->
      <section class="proximos-cursos">
        <div class="section-header">
          <h2>Próximos Cursos</h2>
          <p>Não perca as próximas oportunidades de aprendizado</p>
        </div>
        
        <div class="timeline">
          <div class="timeline-item" *ngFor="let curso of proximosCursos">
            <div class="timeline-date">
              <span class="dia">{{ extrairDia(curso.dataInicio) }}</span>
              <span class="mes">{{ extrairMes(curso.dataInicio) }}</span>
            </div>
            <div class="timeline-content">
              <h4>{{ curso.titulo }}</h4>
              <p>{{ curso.horario }} - {{ curso.modalidade }}</p>
              <a [routerLink]="['/curso', curso.id]" class="timeline-link">Saiba mais →</a>
            </div>
          </div>
        </div>
      </section>

      <!-- Depoimentos -->
      <section class="depoimentos-section">
        <div class="section-header">
          <h2>O que nossos alunos dizem</h2>
          <p>Experiências reais de transformação e aprendizado</p>
        </div>
        
        <div class="depoimentos-grid">
          <div class="depoimento-card" *ngFor="let depoimento of depoimentos">
            <div class="depoimento-content">
              <div class="aspas">"</div>
              <p>{{ depoimento.texto }}</p>
            </div>
            <div class="depoimento-autor">
              <img [src]="depoimento.avatar" [alt]="depoimento.nome" />
              <div class="autor-info">
                <h4>{{ depoimento.nome }}</h4>
                <span>{{ depoimento.curso }}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Newsletter -->
      <section class="newsletter-section">
        <div class="newsletter-content">
          <h2>Mantenha-se atualizado</h2>
          <p>Receba novidades sobre cursos, palestras e eventos em seu e-mail</p>
          
          <form class="newsletter-form" (ngSubmit)="inscreverNewsletter()">
            <input 
              type="email" 
              placeholder="Seu melhor e-mail"
              [(ngModel)]="emailNewsletter"
              name="email"
              required>
            <button type="submit" class="btn-newsletter">Inscrever-se</button>
          </form>
        </div>
      </section>
    </div>
  `,
  styles: [`
    .home-container {
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    }
    
    /* Hero Section */
    .hero-section {
      background: linear-gradient(135deg, #2c5aa0 0%, #1e3d6f 100%);
      color: white;
      padding: 80px 20px;
    }
    
    .hero-content {
      max-width: 1200px;
      margin: 0 auto;
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 60px;
      align-items: center;
    }
    
    .hero-text h1 {
      font-size: 3em;
      margin-bottom: 20px;
      line-height: 1.2;
    }
    
    .hero-text p {
      font-size: 1.2em;
      margin-bottom: 30px;
      opacity: 0.9;
    }
    
    .hero-buttons {
      display: flex;
      gap: 20px;
    }
    
    .btn-primary, .btn-secondary {
      padding: 15px 30px;
      border-radius: 8px;
      font-weight: bold;
      text-decoration: none;
      transition: all 0.3s;
      cursor: pointer;
      border: none;
      font-size: 16px;
    }
    
    .btn-primary {
      background: white;
      color: #2c5aa0;
    }
    
    .btn-primary:hover {
      transform: translateY(-2px);
      box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
    }
    
    .btn-secondary {
      background: transparent;
      color: white;
      border: 2px solid white;
      display: inline-block;
    }
    
    .btn-secondary:hover {
      background: white;
      color: #2c5aa0;
    }
    
    .hero-image img {
      width: 100%;
      border-radius: 15px;
      box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
    }
    
    /* Sections */
    section {
      padding: 80px 20px;
    }
    
    .section-header {
      text-align: center;
      margin-bottom: 60px;
      max-width: 600px;
      margin-left: auto;
      margin-right: auto;
    }
    
    .section-header h2 {
      font-size: 2.5em;
      color: #2c5aa0;
      margin-bottom: 15px;
    }
    
    .section-header p {
      font-size: 1.1em;
      color: #666;
    }
    
    /* Cursos em Destaque */
    .cursos-destaque {
      background: #f8f9fa;
    }
    
    .cursos-grid {
      max-width: 1200px;
      margin: 0 auto;
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
      gap: 30px;
    }
    
    .curso-card {
      background: white;
      border-radius: 15px;
      overflow: hidden;
      box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
      transition: transform 0.3s;
    }
    
    .curso-card:hover {
      transform: translateY(-5px);
    }
    
    .curso-imagem {
      position: relative;
      height: 200px;
      overflow: hidden;
    }
    
    .curso-imagem img {
      width: 100%;
      height: 100%;
      object-fit: cover;
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
    
    .curso-info {
      padding: 25px;
    }
    
    .curso-info h3 {
      color: #2c5aa0;
      margin-bottom: 10px;
      font-size: 1.3em;
    }
    
    .curso-descricao {
      color: #666;
      margin-bottom: 20px;
      line-height: 1.5;
    }
    
    .curso-meta {
      display: flex;
      flex-wrap: wrap;
      gap: 15px;
      margin-bottom: 20px;
    }
    
    .meta-item {
      font-size: 14px;
      color: #666;
    }
    
    .curso-preco {
      display: flex;
      align-items: center;
      gap: 10px;
      margin-bottom: 20px;
    }
    
    .preco-promocional {
      font-size: 1.5em;
      font-weight: bold;
      color: #2c5aa0;
    }
    
    .preco-original {
      color: #666;
    }
    
    .preco-original.riscado {
      text-decoration: line-through;
      color: #999;
    }
    
    .btn-curso {
      background: #2c5aa0;
      color: white;
      padding: 12px 25px;
      border-radius: 8px;
      text-decoration: none;
      font-weight: bold;
      display: inline-block;
      transition: background 0.3s;
    }
    
    .btn-curso:hover {
      background: #1e3d6f;
    }
    
    /* Categorias */
    .categorias-grid {
      max-width: 1000px;
      margin: 0 auto;
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 30px;
    }
    
    .categoria-card {
      text-align: center;
      padding: 40px 20px;
      background: white;
      border-radius: 15px;
      box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
      transition: transform 0.3s;
    }
    
    .categoria-card:hover {
      transform: translateY(-5px);
    }
    
    .categoria-icon {
      width: 80px;
      height: 80px;
      margin: 0 auto 20px;
      background: #e8f4fd;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    
    .categoria-icon img {
      width: 40px;
      height: 40px;
    }
    
    .categoria-card h3 {
      color: #2c5aa0;
      margin-bottom: 15px;
    }
    
    .categoria-card p {
      color: #666;
      margin-bottom: 15px;
    }
    
    .categoria-count {
      color: #2c5aa0;
      font-weight: bold;
      font-size: 14px;
    }
    
    /* Timeline */
    .proximos-cursos {
      background: #f8f9fa;
    }
    
    .timeline {
      max-width: 800px;
      margin: 0 auto;
    }
    
    .timeline-item {
      display: flex;
      gap: 30px;
      margin-bottom: 30px;
      padding: 25px;
      background: white;
      border-radius: 15px;
      box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1);
    }
    
    .timeline-date {
      text-align: center;
      min-width: 80px;
    }
    
    .timeline-date .dia {
      display: block;
      font-size: 2em;
      font-weight: bold;
      color: #2c5aa0;
    }
    
    .timeline-date .mes {
      display: block;
      font-size: 14px;
      color: #666;
      text-transform: uppercase;
    }
    
    .timeline-content h4 {
      color: #2c5aa0;
      margin-bottom: 10px;
    }
    
    .timeline-content p {
      color: #666;
      margin-bottom: 10px;
    }
    
    .timeline-link {
      color: #2c5aa0;
      text-decoration: none;
      font-weight: bold;
    }
    
    .timeline-link:hover {
      text-decoration: underline;
    }
    
    /* Depoimentos */
    .depoimentos-grid {
      max-width: 1000px;
      margin: 0 auto;
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 30px;
    }
    
    .depoimento-card {
      background: white;
      padding: 30px;
      border-radius: 15px;
      box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
    }
    
    .depoimento-content {
      margin-bottom: 20px;
      position: relative;
    }
    
    .aspas {
      font-size: 4em;
      color: #e8f4fd;
      position: absolute;
      top: -20px;
      left: -10px;
      line-height: 1;
    }
    
    .depoimento-content p {
      color: #666;
      font-style: italic;
      line-height: 1.6;
      position: relative;
      z-index: 1;
    }
    
    .depoimento-autor {
      display: flex;
      align-items: center;
      gap: 15px;
    }
    
    .depoimento-autor img {
      width: 50px;
      height: 50px;
      border-radius: 50%;
      object-fit: cover;
    }
    
    .autor-info h4 {
      color: #2c5aa0;
      margin-bottom: 5px;
    }
    
    .autor-info span {
      color: #666;
      font-size: 14px;
    }
    
    /* Newsletter */
    .newsletter-section {
      background: linear-gradient(135deg, #2c5aa0 0%, #1e3d6f 100%);
      color: white;
      text-align: center;
    }
    
    .newsletter-content h2 {
      margin-bottom: 15px;
    }
    
    .newsletter-content p {
      margin-bottom: 30px;
      opacity: 0.9;
    }
    
    .newsletter-form {
      display: flex;
      max-width: 400px;
      margin: 0 auto;
      gap: 10px;
    }
    
    .newsletter-form input {
      flex: 1;
      padding: 15px;
      border: none;
      border-radius: 8px;
      font-size: 16px;
    }
    
    .btn-newsletter {
      background: white;
      color: #2c5aa0;
      border: none;
      padding: 15px 25px;
      border-radius: 8px;
      font-weight: bold;
      cursor: pointer;
      transition: transform 0.3s;
    }
    
    .btn-newsletter:hover {
      transform: translateY(-2px);
    }
    
    /* Responsive */
    @media (max-width: 768px) {
      .hero-content {
        grid-template-columns: 1fr;
        gap: 40px;
        text-align: center;
      }
      
      .hero-text h1 {
        font-size: 2.2em;
      }
      
      .hero-buttons {
        justify-content: center;
        flex-wrap: wrap;
      }
      
      .cursos-grid {
        grid-template-columns: 1fr;
      }
      
      .timeline-item {
        flex-direction: column;
        text-align: center;
      }
      
      .newsletter-form {
        flex-direction: column;
      }
      
      section {
        padding: 60px 20px;
      }
      
      .section-header h2 {
        font-size: 2em;
      }
    }
  `]
})
export class HomeComponent {
  emailNewsletter = '';

  cursosDestaque = [
    {
      id: 1,
      titulo: 'Fundamentos da Doutrina Espírita',
      categoria: 'Doutrina Espírita',
      descricao: 'Aprenda os conceitos básicos do Espiritismo com Allan Kardec',
      dataInicio: '01/02/2025',
      duracao: '8 semanas',
      vagasDisponiveis: 12,
      preco: 150.00,
      precoPromocional: 99.00,
      imagem: 'assets/images/curso1.jpg'
    },
    {
      id: 2,
      titulo: 'Mediunidade e Desenvolvimento Espiritual',
      categoria: 'Mediunidade',
      descricao: 'Desenvolva suas faculdades mediúnicas com segurança',
      dataInicio: '15/02/2025',
      duracao: '12 semanas',
      vagasDisponiveis: 8,
      preco: 200.00,
      precoPromocional: 150.00,
      imagem: 'assets/images/curso2.jpg'
    },
    {
      id: 3,
      titulo: 'Gestão de Conflitos com Base Espírita',
      categoria: 'Desafios do Dia a Dia',
      descricao: 'Resolva conflitos aplicando princípios espíritas',
      dataInicio: '01/03/2025',
      duracao: '6 semanas',
      vagasDisponiveis: 15,
      preco: 120.00,
      precoPromocional: null,
      imagem: 'assets/images/curso3.jpg'
    }
  ];

  categorias = [
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

  proximosCursos = [
    {
      id: 1,
      titulo: 'Fundamentos da Doutrina Espírita',
      dataInicio: '2025-02-01',
      horario: 'Sábados, 14h às 16h',
      modalidade: 'Presencial'
    },
    {
      id: 2,
      titulo: 'Mediunidade e Desenvolvimento Espiritual',
      dataInicio: '2025-02-15',
      horario: 'Domingos, 9h às 11h',
      modalidade: 'Online'
    },
    {
      id: 3,
      titulo: 'Gestão de Conflitos com Base Espírita',
      dataInicio: '2025-03-01',
      horario: 'Quartas, 19h às 21h',
      modalidade: 'Híbrido'
    }
  ];

  depoimentos = [
    {
      nome: 'Maria Santos',
      curso: 'Fundamentos da Doutrina Espírita',
      texto: 'O curso transformou minha compreensão sobre a vida e a espiritualidade. Recomendo para todos que buscam crescimento espiritual.',
      avatar: 'assets/images/avatar-placeholder.jpg'
    },
    {
      nome: 'João Silva',
      curso: 'Mediunidade e Desenvolvimento',
      texto: 'Aprendi a desenvolver minha mediunidade com segurança e responsabilidade. Professores muito preparados.',
      avatar: 'assets/images/avatar-placeholder.jpg'
    },
    {
      nome: 'Ana Costa',
      curso: 'Gestão de Conflitos',
      texto: 'As técnicas aprendidas me ajudaram muito no trabalho e em casa. Curso prático e transformador.',
      avatar: 'assets/images/avatar-placeholder.jpg'
    }
  ];

  scrollToCursos() {
    document.getElementById('cursos')?.scrollIntoView({ behavior: 'smooth' });
  }

  inscreverNewsletter() {
    if (this.emailNewsletter) {
      alert('Obrigado por se inscrever! Você receberá nossas novidades em breve.');
      this.emailNewsletter = '';
    }
  }

  extrairDia(data: string): string {
    return new Date(data).getDate().toString().padStart(2, '0');
  }

  extrairMes(data: string): string {
    const meses = ['JAN', 'FEV', 'MAR', 'ABR', 'MAI', 'JUN',
      'JUL', 'AGO', 'SET', 'OUT', 'NOV', 'DEZ'];
    return meses[new Date(data).getMonth()];
  }
}

