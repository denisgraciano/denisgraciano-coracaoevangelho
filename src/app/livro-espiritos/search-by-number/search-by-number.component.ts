import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-search-by-number',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './search-by-number.component.html',
  styleUrl: './search-by-number.component.scss'
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
