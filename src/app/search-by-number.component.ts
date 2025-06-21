import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-search-by-number',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="search-container">
      <h3 class="search-title">Buscar pergunta específica</h3>
      
      <div class="search-form">
        <div class="input-wrapper">
          <label for="perguntaNumero" class="input-label">Número da pergunta ({{ minPergunta }}-{{ maxPergunta }}):</label>
          <div class="input-button-group">
            <input 
              type="number" 
              id="perguntaNumero" 
              [(ngModel)]="perguntaNumero" 
              min="{{ minPergunta }}" 
              max="{{ maxPergunta }}" 
              class="number-input"
              placeholder="Digite o número..."
            >
            <button 
              class="btn-search" 
              (click)="buscarPergunta()" 
              [disabled]="!isPerguntaValida()"
            >
              Buscar
            </button>
          </div>
        </div>
      </div>
      
      <div *ngIf="mensagemErro" class="error-message">
        {{ mensagemErro }}
      </div>
    </div>
  `,
  styles: [`
    .search-container {
      background-color: var(--card-background);
      border-radius: 8px;
      box-shadow: 0 4px 8px var(--shadow-color);
      padding: 1.5rem;
      margin: 2rem 0;
      transition: transform 0.3s ease, box-shadow 0.3s ease;
    }
    
    .search-title {
      color: var(--primary-color);
      margin-top: 0;
      margin-bottom: 1rem;
      text-align: center;
      font-size: 1.3rem;
    }
    
    .search-form {
      display: flex;
      flex-direction: column;
      width: 100%;
    }
    
    .input-wrapper {
      display: flex;
      flex-direction: column;
      width: 100%;
    }
    
    .input-label {
      font-weight: 500;
      color: var(--primary-dark);
      margin-bottom: 0.5rem;
      display: block;
    }
    
    .input-button-group {
      display: flex;
      gap: 10px;
      width: 100%;
    }
    
    .number-input {
      padding: 0.75rem;
      border: 2px solid var(--primary-light);
      border-radius: 4px;
      font-size: 1rem;
      transition: border-color 0.3s;
      flex: 1;
      min-width: 0; /* Importante para evitar que o input ultrapasse o container */
    }
    
    .number-input:focus {
      outline: none;
      border-color: var(--primary-color);
      box-shadow: 0 0 0 2px rgba(0, 71, 171, 0.2);
    }
    
    .btn-search {
      background-color: var(--primary-color);
      color: var(--white-color);
      border: none;
      padding: 0.75rem 1.5rem;
      border-radius: 4px;
      cursor: pointer;
      font-size: 1rem;
      transition: background-color 0.3s ease, transform 0.2s ease;
      white-space: nowrap;
      min-width: 100px;
    }
    
    .btn-search:hover:not(:disabled) {
      background-color: var(--primary-dark);
      transform: translateY(-2px);
    }
    
    .btn-search:active:not(:disabled) {
      transform: translateY(0);
    }
    
    .btn-search:disabled {
      background-color: #cccccc;
      cursor: not-allowed;
      opacity: 0.7;
    }
    
    .error-message {
      color: #d32f2f;
      margin-top: 1rem;
      text-align: center;
      font-size: 0.9rem;
    }
    
    /* Ajustes para telas menores */
    @media (max-width: 480px) {
      .input-button-group {
        flex-direction: column;
      }
      
      .btn-search {
        width: 100%;
      }
    }
  `]
})
export class SearchByNumberComponent implements OnInit {
  @Input() minPergunta: number = 1;
  @Input() maxPergunta: number = 1020;
  @Output() perguntaSelecionada = new EventEmitter<number>();

  perguntaNumero: number | null = null;
  mensagemErro: string = '';

  ngOnInit(): void {
    // Inicialização do componente
  }

  buscarPergunta(): void {
    if (this.isPerguntaValida()) {
      this.mensagemErro = '';
      this.perguntaSelecionada.emit(this.perguntaNumero!);
    } else {
      this.mensagemErro = `Por favor, digite um número entre ${this.minPergunta} e ${this.maxPergunta}.`;
    }
  }

  isPerguntaValida(): boolean {
    return this.perguntaNumero !== null &&
      this.perguntaNumero >= this.minPergunta &&
      this.perguntaNumero <= this.maxPergunta;
  }
}
