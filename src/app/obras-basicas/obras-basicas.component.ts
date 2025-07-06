import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { ObrasBasicas } from './ObrasBasicas.model'

@Component({
  selector: 'app-obras-basicas',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './obras-basicas.component.html',
  styleUrl: './obras-basicas.component.scss'
})


export class ObrasBasicasComponent implements OnInit {
  obraBasicas: ObrasBasicas[] = [];
  carregando = true;
  erro = false;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.carregarObras();
  }

  carregarObras(): void {
    this.http.get<ObrasBasicas[]>('assets/obras-basicas.json').subscribe({
      next: (data) => {
        this.obraBasicas = data;
        this.carregando = false;
      },
      error: (error) => {
        console.error('Erro ao carregar Obras Básicas:', error);
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