import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-sobre',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sobre.component.html',
  styleUrl: './sobre.component.scss'
})
export class SobreComponent implements OnInit {
  sobreInfo: SobreInfo | null = null;
  carregando = true;
  erro = false;

  constructor(private http: HttpClient) { }

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