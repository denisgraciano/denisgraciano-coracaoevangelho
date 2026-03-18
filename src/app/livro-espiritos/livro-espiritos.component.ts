import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { SearchByNumberComponent } from './search-by-number/search-by-number.component';
import { ShareButtonsComponent } from '../shared/components/share-buttons/share-buttons.component'

@Component({
  selector: 'app-livro-espiritos',
  standalone: true,
  imports: [CommonModule, FormsModule, SearchByNumberComponent, ShareButtonsComponent],
  templateUrl: './livro-espiritos.component.html',
  styleUrl: './livro-espiritos.component.scss'
})
export class LivroEspiritosComponent {
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

      const seed = diaDoAno + ano * 1000;



      // Usar o seed para determinar o índice da pergunta do dia
      const indice = ((seed % this.perguntas.length) + this.perguntas.length) % this.perguntas.length;

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
