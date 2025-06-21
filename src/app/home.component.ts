import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

interface Curso {
  id: number;
  titulo: string;
  categoria: 'doutrina' | 'desafios';
  descricao: string;
  imagemUrl: string;
  dataInicio: string;
  duracao: string;
  instrutor: string;
  vagas: number;
  destaque: boolean;
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <div class="home-container">
      <section class="hero-section">
        <div class="hero-content">
          <h1>Centro Espírita Luz e Caridade</h1>
          <p class="hero-subtitle">Conhecimento, Amor e Caridade</p>
          <div class="hero-buttons">
            <a routerLink="/cursos" class="btn-primary">Ver Todos os Cursos</a>
            <a routerLink="/sobre" class="btn-secondary">Conheça Nossa História</a>
          </div>
        </div>
      </section>

      <!-- Seção de Destaques -->
      <section class="featured-section">
        <div class="section-header">
          <h2>Cursos em Destaque</h2>
          <p>Conheça nossos cursos mais procurados</p>
        </div>

        <div class="featured-courses">
          <div *ngFor="let curso of  [cursoDestaque]" class="featured-card">
            <div class="featured-image">
              <img [src]="curso.imagemUrl" [alt]="curso.titulo">
              <div class="featured-badge">Destaque</div>
            </div>
            <div class="featured-content">
              <h3>{{ curso.titulo }}</h3>
              <p class="featured-description">{{ curso.descricao }}</p>
              <div class="featured-details">
                <p><strong>Início:</strong> {{ curso.dataInicio }}</p>
                <p><strong>Duração:</strong> {{ curso.duracao }}</p>
                <p><strong>Instrutor:</strong> {{ curso.instrutor }}</p>
              </div>
              <a [routerLink]="['/curso', curso.id]" class="btn-featured">Saiba Mais</a>
            </div>
          </div>
        </div>
      </section>

      <!-- Seção de Categorias de Cursos -->
      <section class="categories-section">
        <div class="section-header">
          <h2>Nossos Cursos</h2>
          <p>Conhecimento para evolução espiritual e prática</p>
        </div>

        <div class="categories-container">
          <div class="category-card doutrina">
            <div class="category-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
                <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
              </svg>
            </div>
            <h3>Doutrina Espírita</h3>
            <p>Aprofunde seus conhecimentos nos princípios e fundamentos da doutrina espírita.</p>
            <ul class="category-list">
              <li>Estudo do Livro dos Espíritos</li>
              <li>Mediunidade na Prática</li>
              <li>O Evangelho Segundo o Espiritismo</li>
              <li>Introdução à Doutrina Espírita</li>
            </ul>
            <a routerLink="/cursos/doutrina" class="btn-category">Ver Cursos</a>
          </div>

          <div class="category-card desafios">
            <div class="category-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
                <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
              </svg>
            </div>
            <h3>Desafios do Dia a Dia</h3>
            <p>Ferramentas práticas para enfrentar os desafios cotidianos com equilíbrio e serenidade.</p>
            <ul class="category-list">
              <li>Meditação e Equilíbrio Emocional</li>
              <li>Relacionamentos Saudáveis</li>
              <li>Superando a Ansiedade</li>
              <li>Perdão e Autoconhecimento</li>
            </ul>
            <a routerLink="/cursos/desafios" class="btn-category">Ver Cursos</a>
          </div>
        </div>
      </section>

      <!-- Seção de Próximos Cursos -->
      <section class="upcoming-section">
        <div class="section-header">
          <h2>Próximos Cursos</h2>
          <p>Inscrições abertas para as próximas turmas</p>
        </div>

        <div class="upcoming-courses">
          <div *ngFor="let curso of proximosCursos" class="course-card">
            <div class="course-image">
              <img [src]="curso.imagemUrl" [alt]="curso.titulo">
              <div class="course-category" [ngClass]="curso.categoria">
                {{ curso.categoria === 'doutrina' ? 'Doutrina Espírita' : 'Desafios do Dia a Dia' }}
              </div>
            </div>
            <div class="course-content">
              <h3>{{ curso.titulo }}</h3>
              <p class="course-description">{{ curso.descricao }}</p>
              <div class="course-details">
                <div class="detail-item">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                    <line x1="16" y1="2" x2="16" y2="6"></line>
                    <line x1="8" y1="2" x2="8" y2="6"></line>
                    <line x1="3" y1="10" x2="21" y2="10"></line>
                  </svg>
                  <span>{{ curso.dataInicio }}</span>
                </div>
                <div class="detail-item">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <circle cx="12" cy="12" r="10"></circle>
                    <polyline points="12 6 12 12 16 14"></polyline>
                  </svg>
                  <span>{{ curso.duracao }}</span>
                </div>
                <div class="detail-item">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                    <circle cx="12" cy="7" r="4"></circle>
                  </svg>
                  <span>{{ curso.instrutor }}</span>
                </div>
                <div class="detail-item">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                    <circle cx="9" cy="7" r="4"></circle>
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                  </svg>
                  <span>{{ curso.vagas }} vagas</span>
                </div>
              </div>
              <a [routerLink]="['/curso', curso.id]" class="btn-course">Inscrever-se</a>
            </div>
          </div>
        </div>

        <div class="view-all-container">
          <a routerLink="/cursos" class="btn-view-all">Ver Todos os Cursos</a>
        </div>
      </section>

      <!-- Seção de Depoimentos -->
      <section class="testimonials-section">
        <div class="section-header">
          <h2>Depoimentos</h2>
          <p>O que nossos alunos dizem sobre os cursos</p>
        </div>

        <div class="testimonials-container">
          <div class="testimonial-card">
            <div class="testimonial-quote">"O curso de Mediunidade na Prática transformou minha compreensão sobre o tema. Os instrutores são extremamente preparados e atenciosos."</div>
            <div class="testimonial-author">
              <div class="author-avatar">
                <img src="/assets/images/avatar1.jpg" alt="Maria Silva" onerror="this.src='/assets/images/avatar-placeholder.jpg'">
              </div>
              <div class="author-info">
                <h4>Maria Silva</h4>
                <p>Curso de Mediunidade na Prática</p>
              </div>
            </div>
          </div>

          <div class="testimonial-card">
            <div class="testimonial-quote">"Participar do curso de Meditação e Equilíbrio Emocional me ajudou a enfrentar momentos difíceis com mais serenidade. Recomendo a todos!"</div>
            <div class="testimonial-author">
              <div class="author-avatar">
                <img src="/assets/images/avatar2.jpg" alt="João Santos" onerror="this.src='/assets/images/avatar-placeholder.jpg'">
              </div>
              <div class="author-info">
                <h4>João Santos</h4>
                <p>Curso de Meditação e Equilíbrio Emocional</p>
              </div>
            </div>
          </div>

          <div class="testimonial-card">
            <div class="testimonial-quote">"O estudo do Livro dos Espíritos me proporcionou um conhecimento profundo da doutrina. O método de ensino é excelente!"</div>
            <div class="testimonial-author">
              <div class="author-avatar">
                <img src="/assets/images/avatar3.jpg" alt="Ana Oliveira" onerror="this.src='/assets/images/avatar-placeholder.jpg'">
              </div>
              <div class="author-info">
                <h4>Ana Oliveira</h4>
                <p>Estudo do Livro dos Espíritos</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Seção de Inscrição Newsletter -->
      <section class="newsletter-section">
        <div class="newsletter-content">
          <h2>Fique por dentro das novidades</h2>
          <p>Receba informações sobre novos cursos, palestras e eventos diretamente no seu e-mail.</p>
          <form class="newsletter-form">
            <input type="email" placeholder="Seu melhor e-mail" required>
            <button type="submit" class="btn-subscribe">Inscrever-se</button>
          </form>
        </div>
      </section>
    </div>
  `,
  styles: [`
    .home-container {
      width: 100%;
    }
    
    /* Hero Section */
    .hero-section {
      background: linear-gradient(rgba(0, 71, 171, 0.8), rgba(0, 71, 171, 0.9)), url('/assets/images/hero-bg.jpg');
      background-size: cover;
      background-position: center;
      color: var(--white-color);
      padding: 5rem 1.5rem;
      text-align: center;
      margin-bottom: 3rem;
    }
    
    .hero-content {
      max-width: 800px;
      margin: 0 auto;
    }
    
    .hero-content h1 {
      font-size: 2.5rem;
      margin-bottom: 1rem;
      color: var(--white-color);
    }
    
    .hero-subtitle {
      font-size: 1.2rem;
      margin-bottom: 2rem;
      opacity: 0.9;
    }
    
    .hero-buttons {
      display: flex;
      justify-content: center;
      gap: 1rem;
      flex-wrap: wrap;
    }
    
    .btn-primary {
      background-color: var(--white-color);
      color: var(--primary-color);
      padding: 0.75rem 1.5rem;
      border-radius: 4px;
      text-decoration: none;
      font-weight: 500;
      transition: all 0.3s ease;
    }
    
    .btn-primary:hover {
      background-color: var(--accent-color);
      transform: translateY(-3px);
    }
    
    .btn-secondary {
      background-color: transparent;
      color: var(--white-color);
      padding: 0.75rem 1.5rem;
      border-radius: 4px;
      text-decoration: none;
      font-weight: 500;
      border: 2px solid var(--white-color);
      transition: all 0.3s ease;
    }
    
    .btn-secondary:hover {
      background-color: rgba(255, 255, 255, 0.1);
      transform: translateY(-3px);
    }
    
    /* Section Headers */
    .section-header {
      text-align: center;
      margin-bottom: 2.5rem;
    }
    
    .section-header h2 {
      color: var(--primary-color);
      font-size: 2rem;
      margin-bottom: 0.5rem;
    }
    
    .section-header p {
      color: var(--text-color);
      opacity: 0.8;
      max-width: 600px;
      margin: 0 auto;
    }
    
    /* Featured Section */
    .featured-section {
      padding: 3rem 1.5rem;
      max-width: 1200px;
      margin: 0 auto;
    }
    
    .featured-courses {
      display: grid;
      grid-template-columns: 1fr;
      gap: 2rem;
    }
    
    .featured-card {
      display: flex;
      flex-direction: column;
      background-color: var(--white-color);
      border-radius: 8px;
      overflow: hidden;
      box-shadow: 0 4px 12px rgba(0, 71, 171, 0.1);
      transition: transform 0.3s ease, box-shadow 0.3s ease;
    }
    
    .featured-card:hover {
      transform: translateY(-5px);
      box-shadow: 0 8px 24px rgba(0, 71, 171, 0.15);
    }
    
    .featured-image {
      position: relative;
      height: 250px;
    }
    
    .featured-image img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
    
    .featured-badge {
      position: absolute;
      top: 1rem;
      right: 1rem;
      background-color: var(--primary-color);
      color: var(--white-color);
      padding: 0.5rem 1rem;
      border-radius: 50px;
      font-size: 0.9rem;
      font-weight: 500;
    }
    
    .featured-content {
      padding: 1.5rem;
      display: flex;
      flex-direction: column;
      flex-grow: 1;
    }
    
    .featured-content h3 {
      color: var(--primary-color);
      margin-bottom: 1rem;
      font-size: 1.5rem;
    }
    
    .featured-description {
      margin-bottom: 1.5rem;
      color: var(--text-color);
      line-height: 1.6;
      flex-grow: 1;
    }
    
    .featured-details {
      margin-bottom: 1.5rem;
    }
    
    .featured-details p {
      margin: 0.5rem 0;
      font-size: 0.95rem;
    }
    
    .btn-featured {
      background-color: var(--primary-color);
      color: var(--white-color);
      padding: 0.75rem 1.5rem;
      border-radius: 4px;
      text-decoration: none;
      font-weight: 500;
      text-align: center;
      transition: all 0.3s ease;
      align-self: flex-start;
    }
    
    .btn-featured:hover {
      background-color: var(--primary-dark);
      transform: translateY(-2px);
    }
    
    /* Categories Section */
    .categories-section {
      padding: 3rem 1.5rem;
      background-color: var(--accent-color);
    }
    
    .categories-container {
      max-width: 1200px;
      margin: 0 auto;
      display: grid;
      grid-template-columns: 1fr;
      gap: 2rem;
    }
    
    .category-card {
      background-color: var(--white-color);
      border-radius: 8px;
      padding: 2rem;
      box-shadow: 0 4px 12px rgba(0, 71, 171, 0.1);
      transition: transform 0.3s ease, box-shadow 0.3s ease;
      text-align: center;
    }
    
    .category-card:hover {
      transform: translateY(-5px);
      box-shadow: 0 8px 24px rgba(0, 71, 171, 0.15);
    }
    
    .category-icon {
      width: 80px;
      height: 80px;
      background-color: var(--accent-color);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 0 auto 1.5rem;
      color: var(--primary-color);
    }
    
    .category-card h3 {
      color: var(--primary-color);
      margin-bottom: 1rem;
      font-size: 1.5rem;
    }
    
    .category-card p {
      margin-bottom: 1.5rem;
      color: var(--text-color);
    }
    
    .category-list {
      list-style: none;
      padding: 0;
      margin-bottom: 1.5rem;
      text-align: left;
    }
    
    .category-list li {
      padding: 0.5rem 0;
      border-bottom: 1px solid var(--accent-color);
      position: relative;
      padding-left: 1.5rem;
    }
    
    .category-list li::before {
      content: "•";
      color: var(--primary-color);
      position: absolute;
      left: 0;
      font-size: 1.2rem;
    }
    
    .btn-category {
      background-color: var(--primary-color);
      color: var(--white-color);
      padding: 0.75rem 1.5rem;
      border-radius: 4px;
      text-decoration: none;
      font-weight: 500;
      display: inline-block;
      transition: all 0.3s ease;
    }
    
    .btn-category:hover {
      background-color: var(--primary-dark);
      transform: translateY(-2px);
    }
    
    /* Upcoming Courses Section */
    .upcoming-section {
      padding: 3rem 1.5rem;
      max-width: 1200px;
      margin: 0 auto;
    }
    
    .upcoming-courses {
      display: grid;
      grid-template-columns: 1fr;
      gap: 2rem;
    }
    
    .course-card {
      display: flex;
      flex-direction: column;
      background-color: var(--white-color);
      border-radius: 8px;
      overflow: hidden;
      box-shadow: 0 4px 12px rgba(0, 71, 171, 0.1);
      transition: transform 0.3s ease, box-shadow 0.3s ease;
    }
    
    .course-card:hover {
      transform: translateY(-5px);
      box-shadow: 0 8px 24px rgba(0, 71, 171, 0.15);
    }
    
    .course-image {
      position: relative;
      height: 200px;
    }
    
    .course-image img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
    
    .course-category {
      position: absolute;
      top: 1rem;
      left: 1rem;
      padding: 0.5rem 1rem;
      border-radius: 50px;
      font-size: 0.8rem;
      font-weight: 500;
    }
    
    .course-category.doutrina {
      background-color: var(--primary-color);
      color: var(--white-color);
    }
    
    .course-category.desafios {
      background-color: #4CAF50;
      color: var(--white-color);
    }
    
    .course-content {
      padding: 1.5rem;
      display: flex;
      flex-direction: column;
      flex-grow: 1;
    }
    
    .course-content h3 {
      color: var(--primary-color);
      margin-bottom: 1rem;
      font-size: 1.3rem;
    }
    
    .course-description {
      margin-bottom: 1.5rem;
      color: var(--text-color);
      line-height: 1.6;
      flex-grow: 1;
    }
    
    .course-details {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 1rem;
      margin-bottom: 1.5rem;
    }
    
    .detail-item {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      font-size: 0.9rem;
    }
    
    .detail-item svg {
      color: var(--primary-color);
    }
    
    .btn-course {
      background-color: var(--primary-color);
      color: var(--white-color);
      padding: 0.75rem 1.5rem;
      border-radius: 4px;
      text-decoration: none;
      font-weight: 500;
      text-align: center;
      transition: all 0.3s ease;
      align-self: flex-start;
    }
    
    .btn-course:hover {
      background-color: var(--primary-dark);
      transform: translateY(-2px);
    }
    
    .view-all-container {
      text-align: center;
      margin-top: 2.5rem;
    }
    
    .btn-view-all {
      background-color: transparent;
      color: var(--primary-color);
      padding: 0.75rem 1.5rem;
      border-radius: 4px;
      text-decoration: none;
      font-weight: 500;
      border: 2px solid var(--primary-color);
      transition: all 0.3s ease;
    }
    
    .btn-view-all:hover {
      background-color: var(--primary-color);
      color: var(--white-color);
      transform: translateY(-2px);
    }
    
    /* Testimonials Section */
    .testimonials-section {
      padding: 3rem 1.5rem;
      background-color: var(--accent-color);
    }
    
    .testimonials-container {
      max-width: 1200px;
      margin: 0 auto;
      display: grid;
      grid-template-columns: 1fr;
      gap: 2rem;
    }
    
    .testimonial-card {
      background-color: var(--white-color);
      border-radius: 8px;
      padding: 2rem;
      box-shadow: 0 4px 12px rgba(0, 71, 171, 0.1);
      transition: transform 0.3s ease, box-shadow 0.3s ease;
    }
    
    .testimonial-card:hover {
      transform: translateY(-5px);
      box-shadow: 0 8px 24px rgba(0, 71, 171, 0.15);
    }
    
    .testimonial-quote {
      font-style: italic;
      margin-bottom: 1.5rem;
      position: relative;
      padding: 0 1rem;
    }
    
    .testimonial-quote::before,
    .testimonial-quote::after {
      content: '"';
      font-size: 2rem;
      color: var(--primary-color);
      opacity: 0.3;
      position: absolute;
    }
    
    .testimonial-quote::before {
      left: -1rem;
      top: -0.5rem;
    }
    
    .testimonial-quote::after {
      right: -1rem;
      bottom: -1rem;
    }
    
    .testimonial-author {
      display: flex;
      align-items: center;
      gap: 1rem;
    }
    
    .author-avatar {
      width: 60px;
      height: 60px;
      border-radius: 50%;
      overflow: hidden;
    }
    
    .author-avatar img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
    
    .author-info h4 {
      margin: 0;
      color: var(--primary-color);
    }
    
    .author-info p {
      margin: 0.25rem 0 0;
      font-size: 0.9rem;
      opacity: 0.8;
    }
    
    /* Newsletter Section */
    .newsletter-section {
      padding: 4rem 1.5rem;
      background: linear-gradient(rgba(0, 71, 171, 0.9), rgba(0, 71, 171, 0.9)), url('/assets/images/newsletter-bg.jpg');
      background-size: cover;
      background-position: center;
      color: var(--white-color);
      text-align: center;
    }
    
    .newsletter-content {
      max-width: 600px;
      margin: 0 auto;
    }
    
    .newsletter-content h2 {
      color: var(--white-color);
      margin-bottom: 1rem;
    }
    
    .newsletter-content p {
      margin-bottom: 2rem;
      opacity: 0.9;
    }
    
    .newsletter-form {
      display: flex;
      flex-direction: column;
      gap: 1rem;
    }
    
    .newsletter-form input {
      padding: 0.75rem 1rem;
      border-radius: 4px;
      border: none;
      font-size: 1rem;
    }
    
    .btn-subscribe {
      background-color: var(--accent-color);
      color: var(--primary-color);
      padding: 0.75rem 1.5rem;
      border-radius: 4px;
      border: none;
      font-weight: 500;
      cursor: pointer;
      transition: all 0.3s ease;
    }
    
    .btn-subscribe:hover {
      background-color: var(--white-color);
      transform: translateY(-2px);
    }
    
    /* Responsive Design */
    @media (min-width: 768px) {
      .hero-content h1 {
        font-size: 3rem;
      }
      
      .featured-courses {
        grid-template-columns: 1fr;
      }
      
      .featured-card {
        flex-direction: row;
      }
      
      .featured-image {
        width: 40%;
        height: auto;
      }
      
      .categories-container {
        grid-template-columns: repeat(2, 1fr);
      }
      
      .upcoming-courses {
        grid-template-columns: repeat(2, 1fr);
      }
      
      .testimonials-container {
        grid-template-columns: repeat(3, 1fr);
      }
      
      .newsletter-form {
        flex-direction: row;
      }
      
      .newsletter-form input {
        flex-grow: 1;
      }
    }
    
    @media (min-width: 1024px) {
      .upcoming-courses {
        grid-template-columns: repeat(3, 1fr);
      }
    }
  `]
})
export class HomeComponent implements OnInit {
  cursoDestaque: Curso = {
    id: 1,
    titulo: 'Estudo Aprofundado do Livro dos Espíritos',
    categoria: 'doutrina',
    descricao: 'Um curso completo sobre os fundamentos da doutrina espírita através do estudo sistemático do Livro dos Espíritos de Allan Kardec.',
    imagemUrl: '/assets/images/curso-destaque.jpg',
    dataInicio: '15/07/2025',
    duracao: '12 semanas',
    instrutor: 'Prof. Carlos Silva',
    vagas: 30,
    destaque: true
  };

  proximosCursos: Curso[] = [
    {
      id: 2,
      titulo: 'Mediunidade na Prática',
      categoria: 'doutrina',
      descricao: 'Desenvolvimento prático da mediunidade com base nos princípios da doutrina espírita.',
      imagemUrl: '/assets/images/curso1.jpg',
      dataInicio: '20/07/2025',
      duracao: '8 semanas',
      instrutor: 'Maria Santos',
      vagas: 20,
      destaque: false
    },
    {
      id: 3,
      titulo: 'Meditação e Equilíbrio Emocional',
      categoria: 'desafios',
      descricao: 'Técnicas de meditação e práticas para alcançar o equilíbrio emocional no dia a dia.',
      imagemUrl: '/assets/images/curso2.jpg',
      dataInicio: '25/07/2025',
      duracao: '6 semanas',
      instrutor: 'Ana Oliveira',
      vagas: 25,
      destaque: false
    },
    {
      id: 4,
      titulo: 'O Evangelho Segundo o Espiritismo',
      categoria: 'doutrina',
      descricao: 'Estudo dos ensinamentos morais de Jesus à luz da doutrina espírita.',
      imagemUrl: '/assets/images/curso3.jpg',
      dataInicio: '01/08/2025',
      duracao: '10 semanas',
      instrutor: 'João Pereira',
      vagas: 30,
      destaque: false
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }
}
