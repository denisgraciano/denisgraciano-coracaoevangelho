import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { SearchByNumberComponent } from './search-by-number.component';
import { ShareButtonsComponent } from './shared/components/share-buttons/share-buttons.component'

interface PerguntaResposta {
  id: number;
  pergunta: string;
  resposta: string;
}

@Component({
  selector: 'app-livro',
  standalone: true,
  imports: [CommonModule, FormsModule, SearchByNumberComponent, ShareButtonsComponent],
  template: `
    <div class="home-container">
      <main class="app-content">
        <!-- Exibição de carregamento e erro -->
        <div *ngIf="carregando" class="loading-container">
          <div class="loading-spinner"></div>
          <p>Carregando perguntas...</p>
        </div>

        <div *ngIf="erro" class="error-container">
          <p>Ocorreu um erro ao carregar as perguntas. Por favor, tente novamente mais tarde.</p>
        </div>

        <!-- Conteúdo principal quando carregado -->
        <div *ngIf="!carregando && !erro" class="content-container">
          <!-- Componente de busca por número -->
          <app-search-by-number 
            [minPergunta]="1" 
            [maxPergunta]="1020" 
            (perguntaSelecionada)="buscarPerguntaPorNumero($event)">
          </app-search-by-number>

          <!-- Seção da Pergunta do Dia -->
          <section class="pergunta-do-dia-section">
            <div class="card">
              <h2>Pergunta do Dia</h2>
              <div *ngIf="perguntaDoDia" class="qa-container">
                <div class="pergunta-container">
                  <p class="pergunta-texto">
                    <span class="pergunta-numero">{{ perguntaDoDia.id }}.</span> {{ perguntaDoDia.pergunta }}
                  </p>
                </div>
                <div class="resposta-container">
                  <p class="resposta-texto">{{ perguntaDoDia.resposta }}</p>
                </div>
                <app-share-buttons 
                  [perguntaId]="perguntaDoDia.id" 
                  [perguntaTexto]="perguntaDoDia.pergunta" 
                  [respostaTexto]="perguntaDoDia.resposta">
                </app-share-buttons>
              </div>
              <p class="data-atual">Data: {{ dataAtual }}</p>
            </div>
          </section>

          <!-- Seção de Sorteio de Perguntas -->
          <section class="sorteio-section">
            <div class="card">
              <h2>Sorteio de Perguntas</h2>
              <div *ngIf="perguntaSorteada" class="qa-container">
                <div class="pergunta-container">
                  <p class="pergunta-texto">
                    <span class="pergunta-numero">{{ perguntaSorteada.id }}.</span> {{ perguntaSorteada.pergunta }}
                  </p>
                </div>
                <div class="resposta-container">
                  <p class="resposta-texto">{{ perguntaSorteada.resposta }}</p>
                </div>
                <app-share-buttons 
                  [perguntaId]="perguntaSorteada.id" 
                  [perguntaTexto]="perguntaSorteada.pergunta" 
                  [respostaTexto]="perguntaSorteada.resposta">
                </app-share-buttons>
              </div>
              <button class="btn-primary" (click)="novaPergunta()">Nova Pergunta</button>
            </div>
          </section>
        </div>
      </main>
    </div>
  `,
  styles: [`
    .home-container {
      width: 100%;
    }
    
    .app-content {
      flex: 1;
      padding: 1.5rem;
      max-width: 1200px;
      margin: 0 auto;
      width: 100%;
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
    
    .content-container {
      display: flex;
      flex-direction: column;
      gap: 2rem;
    }
    
    .pergunta-do-dia-section, .sorteio-section {
      width: 100%;
    }
    
    .card {
      background-color: var(--card-background);
      border-radius: 8px;
      box-shadow: 0 4px 8px var(--shadow-color);
      padding: 1.5rem;
      transition: transform 0.3s ease, box-shadow 0.3s ease;
    }
    
    .card:hover {
      transform: translateY(-5px);
      box-shadow: 0 6px 12px var(--shadow-color);
    }
    
    .qa-container {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      margin: 1.5rem 0;
    }
    
    .pergunta-container {
      padding: 1rem;
      background-color: var(--accent-color);
      border-radius: 6px 6px 0 0;
      border-left: 4px solid var(--primary-color);
    }
    
    .resposta-container {
      padding: 1rem;
      background-color: var(--white-color);
      border-radius: 0 0 6px 6px;
      border-left: 4px solid var(--primary-light);
      box-shadow: 0 2px 4px var(--shadow-color);
    }
    
    .pergunta-texto {
      font-size: 1.2rem;
      line-height: 1.6;
      font-weight: 500;
    }
    
    .resposta-texto {
      font-size: 1.1rem;
      line-height: 1.6;
      font-style: italic;
    }
    
    .pergunta-numero {
      font-weight: bold;
      color: var(--primary-color);
    }
    
    .data-atual {
      text-align: right;
      font-style: italic;
      color: var(--primary-light);
      margin-top: 1rem;
    }
    
    .btn-primary {
      background-color: var(--primary-color);
      color: var(--white-color);
      border: none;
      padding: 0.75rem 1.5rem;
      border-radius: 4px;
      cursor: pointer;
      font-size: 1rem;
      transition: background-color 0.3s ease, transform 0.2s ease;
      display: block;
      margin: 1.5rem auto 0;
    }
    
    .btn-primary:hover {
      background-color: var(--primary-dark);
      transform: scale(1.05);
    }
    
    .btn-primary:active {
      transform: scale(0.98);
    }
    
    /* Responsividade */
    @media (min-width: 768px) {
      .content-container {
        flex-direction: row;
      }
      
      .pergunta-do-dia-section, .sorteio-section {
        width: 50%;
      }
    }
    
    @media (max-width: 767px) {
      .app-content {
        padding: 1rem;
      }
      
      .pergunta-texto, .resposta-texto {
        font-size: 1rem;
      }
      
      .card {
        padding: 1rem;
      }
      
      .qa-container {
        margin: 1rem 0;
      }
    }
  `]
})
export class LivroDosEspiritosComponent {
  perguntas: PerguntaResposta[] = [];
  perguntaSorteada: PerguntaResposta | null = null;
  perguntaDoDia: PerguntaResposta | null = null;
  carregando = true;
  erro = false;
  dataAtual = '';

  constructor(private http: HttpClient) {
    // Formatar a data atual no formato brasileiro
    const hoje = new Date();
    const dia = hoje.getDate().toString().padStart(2, '0');
    const mes = (hoje.getMonth() + 1).toString().padStart(2, '0');
    const ano = hoje.getFullYear();
    this.dataAtual = `${dia}/${mes}/${ano}`;
  }

  ngOnInit() {
    this.carregarPerguntas();
  }

  carregarPerguntas() {
    this.http.get<PerguntaResposta[]>('assets/perguntas_respostas.json').subscribe({
      next: (data) => {
        this.perguntas = data;
        this.carregando = false;
        this.sortearPergunta();
        this.definirPerguntaDoDia();
      },
      error: (error) => {
        console.error('Erro ao carregar perguntas:', error);
        this.carregando = false;
        this.erro = true;
      }
    });
  }

  sortearPergunta() {
    if (this.perguntas.length > 0) {
      const indiceAleatorio = Math.floor(Math.random() * this.perguntas.length);
      this.perguntaSorteada = this.perguntas[indiceAleatorio];
    }
  }

  definirPerguntaDoDia() {
    if (this.perguntas.length > 0) {
      // Algoritmo determinístico baseado na data atual
      const hoje = new Date();
      const diaDoAno = this.getDiaDoAno(hoje);
      const ano = hoje.getFullYear();

      // Usar uma combinação de dia do ano e ano para garantir variação anual
      const seed = diaDoAno + (ano * 1100);

      // Usar o seed para determinar o índice da pergunta do dia
      const indice = seed % this.perguntas.length;

      this.perguntaDoDia = this.perguntas[indice];
    }
  }

  // Função auxiliar para calcular o dia do ano (1-366)
  getDiaDoAno(data: Date): number {
    const inicioAno = new Date(data.getFullYear(), 0, 0);
    const diff = data.getTime() - inicioAno.getTime();
    const umDiaEmMs = 1000 * 60 * 60 * 24;
    return Math.floor(diff / umDiaEmMs);
  }

  novaPergunta() {
    this.sortearPergunta();
  }

  buscarPerguntaPorNumero(numero: number): void {
    const perguntaEncontrada = this.perguntas.find(p => p.id === numero);
    if (perguntaEncontrada) {
      this.perguntaSorteada = perguntaEncontrada;
    }
  }
}
