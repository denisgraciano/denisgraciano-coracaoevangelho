import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';

interface PalestraRealizada {
  id: number;
  titulo: string;
  data: string;
  palestrante: string;
  descricao: string;
  imagemUrl: string;
  downloadUrl: string;
  tags?: string[];
}

@Component({
  selector: 'app-palestras-realizadas',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="palestras-realizadas-container">
      <h1 class="page-title">Palestras Realizadas</h1>
      
      <div *ngIf="carregando" class="loading-container">
        <div class="loading-spinner"></div>
        <p>Carregando palestras...</p>
      </div>
      
      <div *ngIf="erro" class="error-container">
        <p>Ocorreu um erro ao carregar as palestras. Por favor, tente novamente mais tarde.</p>
      </div>
      
      <div *ngIf="!carregando && !erro" class="palestras-grid">
        <div *ngFor="let palestra of palestrasRealizadas" class="palestra-card">
          <div class="palestra-imagem-container">
            <img [src]="palestra.imagemUrl" [alt]="palestra.titulo" class="palestra-imagem" 
                 onerror="this.src='assets/images/palestra-placeholder.jpg'">
          </div>
          
          <div class="palestra-conteudo">
            <h3 class="palestra-titulo">{{ palestra.titulo }}</h3>
            
            <div class="palestra-info">
              <p class="palestra-data"><strong>Data:</strong> {{ palestra.data }}</p>
              <p class="palestra-palestrante"><strong>Palestrante:</strong> {{ palestra.palestrante }}</p>
            </div>
            
            <p class="palestra-descricao">{{ palestra.descricao }}</p>
            
            <div class="palestra-tags">
              <span *ngFor="let tag of palestra.tags" class="tag">{{ tag }}</span>
            </div>
            
            <div class="palestra-acoes">
              <a [href]="palestra.downloadUrl" target="_blank" class="btn-download">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                  <polyline points="7 10 12 15 17 10"></polyline>
                  <line x1="12" y1="15" x2="12" y2="3"></line>
                </svg>
                Download
              </a>
              
              <div class="link-container">
                <span class="link-label">Link:</span>
                <a [href]="palestra.downloadUrl" target="_blank" class="link-url">{{ getShortUrl(palestra.downloadUrl) }}</a>
              </div>
            </div>
          </div>
        </div>
        
        <div *ngIf="palestrasRealizadas.length === 0" class="empty-state">
          <p>Não há palestras realizadas disponíveis no momento.</p>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .palestras-realizadas-container {
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
    
    .palestras-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
      gap: 2rem;
    }
    
    .palestra-card {
      background-color: var(--card-background);
      border-radius: 8px;
      box-shadow: 0 4px 8px var(--shadow-color);
      overflow: hidden;
      transition: transform 0.3s ease, box-shadow 0.3s ease;
      display: flex;
      flex-direction: column;
      height: 100%;
    }
    
    .palestra-card:hover {
      transform: translateY(-5px);
      box-shadow: 0 6px 12px var(--shadow-color);
    }
    
    .palestra-imagem-container {
      width: 100%;
      height: 180px;
      overflow: hidden;
    }
    
    .palestra-imagem {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform 0.3s ease;
    }
    
    .palestra-card:hover .palestra-imagem {
      transform: scale(1.05);
    }
    
    .palestra-conteudo {
      padding: 1.5rem;
      display: flex;
      flex-direction: column;
      flex-grow: 1;
    }
    
    .palestra-titulo {
      color: var(--primary-color);
      margin-top: 0;
      margin-bottom: 1rem;
      font-size: 1.2rem;
    }
    
    .palestra-info {
      margin-bottom: 1rem;
    }
    
    .palestra-data, .palestra-palestrante {
      margin: 0.25rem 0;
      font-size: 0.9rem;
    }
    
    .palestra-descricao {
      margin-bottom: 1rem;
      flex-grow: 1;
      font-size: 0.95rem;
      line-height: 1.5;
    }
    
    .palestra-tags {
      display: flex;
      flex-wrap: wrap;
      gap: 0.5rem;
      margin-bottom: 1.5rem;
    }
    
    .tag {
      background-color: var(--accent-color);
      color: var(--primary-color);
      padding: 0.25rem 0.75rem;
      border-radius: 50px;
      font-size: 0.8rem;
      font-weight: 500;
    }
    
    .palestra-acoes {
      display: flex;
      flex-direction: column;
      gap: 1rem;
    }
    
    .btn-download {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 0.5rem;
      background-color: var(--primary-color);
      color: var(--white-color);
      padding: 0.75rem 1rem;
      border-radius: 4px;
      text-decoration: none;
      font-weight: 500;
      transition: background-color 0.3s, transform 0.2s;
    }
    
    .btn-download:hover {
      background-color: var(--primary-dark);
      transform: translateY(-2px);
    }
    
    .btn-download:active {
      transform: translateY(0);
    }
    
    .link-container {
      display: flex;
      align-items: center;
      flex-wrap: wrap;
      gap: 0.5rem;
      font-size: 0.9rem;
    }
    
    .link-label {
      font-weight: 500;
    }
    
    .link-url {
      color: var(--primary-color);
      text-decoration: none;
      word-break: break-all;
      transition: color 0.3s;
    }
    
    .link-url:hover {
      color: var(--primary-dark);
      text-decoration: underline;
    }
    
    .empty-state {
      grid-column: 1 / -1;
      text-align: center;
      padding: 3rem;
      background-color: var(--card-background);
      border-radius: 8px;
      box-shadow: 0 4px 8px var(--shadow-color);
    }
    
    @media (max-width: 767px) {
      .palestras-realizadas-container {
        padding: 1rem;
      }
      
      .palestras-grid {
        grid-template-columns: 1fr;
      }
      
      .palestra-imagem-container {
        height: 160px;
      }
    }
  `]
})
export class PalestrasRealizadasComponent implements OnInit {
  palestrasRealizadas: PalestraRealizada[] = [];
  carregando = true;
  erro = false;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.carregarPalestras();
  }

  carregarPalestras(): void {
    this.http.get<PalestraRealizada[]>('assets/palestras-realizadas.json').subscribe({
      next: (data) => {
        this.palestrasRealizadas = data;
        this.carregando = false;
      },
      error: (error) => {
        console.error('Erro ao carregar palestras realizadas:', error);
        this.carregando = false;
        this.erro = true;
      }
    });
  }
  
  getShortUrl(url: string): string {
    // Simplifica a URL para exibição
    try {
      const urlObj = new URL(url);
      return `${urlObj.hostname}/...`;
    } catch (e) {
      return url.substring(0, 30) + '...';
    }
  }
}
