import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';

interface SobreInfo {
  titulo: string;
  descricao: string;
  missao: string;
  visao: string;
  valores: string[];
  historia: string;
  contato: {
    email: string;
    telefone: string;
    endereco: string;
    redesSociais: {
      nome: string;
      url: string;
    }[];
  };
}

@Component({
  selector: 'app-sobre',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="sobre-container">
      <h1 class="page-title">Sobre Nós</h1>
      
      <div *ngIf="carregando" class="loading-container">
        <div class="loading-spinner"></div>
        <p>Carregando informações...</p>
      </div>
      
      <div *ngIf="erro" class="error-container">
        <p>Ocorreu um erro ao carregar as informações. Por favor, tente novamente mais tarde.</p>
      </div>
      
      <div *ngIf="!carregando && !erro && sobreInfo" class="sobre-content">
        <!-- Seção Principal -->
        <section class="card main-section">
          <h2>{{ sobreInfo.titulo }}</h2>
          <p class="descricao">{{ sobreInfo.descricao }}</p>
        </section>
        
        <!-- Missão, Visão e Valores -->
        <div class="mvv-container">
          <section class="card mvv-card">
            <h3>Nossa Missão</h3>
            <p>{{ sobreInfo.missao }}</p>
          </section>
          
          <section class="card mvv-card">
            <h3>Nossa Visão</h3>
            <p>{{ sobreInfo.visao }}</p>
          </section>
          
          <section class="card mvv-card">
            <h3>Nossos Valores</h3>
            <ul class="valores-list">
              <li *ngFor="let valor of sobreInfo.valores">{{ valor }}</li>
            </ul>
          </section>
        </div>
        
        <!-- História -->
        <section class="card historia-section">
          <h3>Nossa História</h3>
          <p>{{ sobreInfo.historia }}</p>
        </section>
        
        <!-- Contato -->
        <section class="card contato-section">
          <h3>Contato</h3>
          <div class="contato-info">
            <p><strong>E-mail:</strong> {{ sobreInfo.contato.email }}</p>
            <p><strong>Telefone:</strong> {{ sobreInfo.contato.telefone }}</p>
            <p><strong>Endereço:</strong> {{ sobreInfo.contato.endereco }}</p>
          </div>
          
          <div class="redes-sociais">
            <h4>Redes Sociais</h4>
            <div class="redes-links">
              <a *ngFor="let rede of sobreInfo.contato.redesSociais" 
                 [href]="rede.url" 
                 target="_blank" 
                 class="rede-social-link">
                {{ rede.nome }}
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  `,
  styles: [`
    .sobre-container {
      padding: 1.5rem;
      max-width: 1200px;
      margin: 0 auto;
      width: 100%;
    }
    
    .page-title {
      color: var(--primary-color);
      text-align: center;
      margin-bottom: 2rem;
    }
    
    .loading-container, .error-container {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      min-height: 300px;
    }
    
    .loading-spinner {
      border: 4px solid var(--accent-color);
      border-top: 4px solid var(--primary-color);
      border-radius: 50%;
      width: 40px;
      height: 40px;
      animation: spin 1s linear infinite;
      margin-bottom: 1rem;
    }
    
    @keyframes spin {
      0% { transform: rotate(0deg); }
      100% { transform: rotate(360deg); }
    }
    
    .error-container {
      color: #d32f2f;
    }
    
    .card {
      background-color: var(--card-background);
      border-radius: 8px;
      box-shadow: 0 4px 8px var(--shadow-color);
      padding: 1.5rem;
      margin-bottom: 2rem;
      transition: transform 0.3s ease, box-shadow 0.3s ease;
    }
    
    .card:hover {
      transform: translateY(-5px);
      box-shadow: 0 6px 12px var(--shadow-color);
    }
    
    .main-section h2 {
      color: var(--primary-color);
      text-align: center;
      margin-bottom: 1rem;
    }
    
    .descricao {
      font-size: 1.1rem;
      line-height: 1.6;
      text-align: center;
      max-width: 800px;
      margin: 0 auto;
    }
    
    .mvv-container {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 1.5rem;
      margin-bottom: 2rem;
    }
    
    .mvv-card {
      height: 100%;
      display: flex;
      flex-direction: column;
    }
    
    .mvv-card h3 {
      color: var(--primary-color);
      margin-bottom: 1rem;
      text-align: center;
    }
    
    .valores-list {
      padding-left: 1.5rem;
    }
    
    .valores-list li {
      margin-bottom: 0.5rem;
    }
    
    .historia-section h3, .contato-section h3 {
      color: var(--primary-color);
      margin-bottom: 1rem;
    }
    
    .contato-info {
      margin-bottom: 1.5rem;
    }
    
    .contato-info p {
      margin-bottom: 0.5rem;
    }
    
    .redes-sociais h4 {
      color: var(--primary-color);
      margin-bottom: 1rem;
    }
    
    .redes-links {
      display: flex;
      flex-wrap: wrap;
      gap: 1rem;
    }
    
    .rede-social-link {
      display: inline-block;
      padding: 0.5rem 1rem;
      background-color: var(--primary-color);
      color: var(--white-color);
      border-radius: 4px;
      text-decoration: none;
      transition: background-color 0.3s, transform 0.2s;
    }
    
    .rede-social-link:hover {
      background-color: var(--primary-dark);
      transform: translateY(-2px);
    }
    
    @media (max-width: 767px) {
      .sobre-container {
        padding: 1rem;
      }
      
      .card {
        padding: 1rem;
      }
      
      .mvv-container {
        grid-template-columns: 1fr;
      }
    }
  `]
})
export class SobreComponent implements OnInit {
  sobreInfo: SobreInfo | null = null;
  carregando = true;
  erro = false;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.carregarInformacoes();
  }

  carregarInformacoes(): void {
    this.http.get<SobreInfo>('assets/sobre.json').subscribe({
      next: (data) => {
        this.sobreInfo = data;
        this.carregando = false;
      },
      error: (error) => {
        console.error('Erro ao carregar informações:', error);
        this.carregando = false;
        this.erro = true;
      }
    });
  }
}
