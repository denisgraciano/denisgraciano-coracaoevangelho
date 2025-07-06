import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ArtigoBlog } from './blog.model';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.scss'
})
export class BlogComponent implements OnInit {
  artigos: ArtigoBlog[] = [];
  artigosFiltrados: ArtigoBlog[] = [];
  carregando = true;
  erro = false;
  emailNewsletter = '';
  categoriaAtiva = 'todas';
  artigoExpandido: number | null = null;


  constructor(private http: HttpClient) { }


  ngOnInit() {
    this.carregarArtigos();
  }

  carregarArtigos(): void {
    this.http.get<ArtigoBlog[]>('assets/blog.json').subscribe({
      next: (data) => {
        this.artigos = data;
        this.carregando = false;
      },
      error: (error) => {
        console.error('Erro ao carregar Obras Básicas:', error);
        this.carregando = false;
        this.erro = true;
      }
    });
  }

  filtrarPorCategoria(categoria: string) {
    this.categoriaAtiva = categoria;
    this.artigoExpandido = null; // Recolher artigo expandido ao filtrar

    if (categoria === 'todas') {
      this.artigosFiltrados = this.artigos;
    } else {
      this.artigosFiltrados = this.artigos.filter(artigo => artigo.categoria === categoria);
    }
  }

  expandirArtigo(id: number) {
    this.artigoExpandido = id;
    // Scroll suave para o artigo expandido
    setTimeout(() => {
      const elemento = document.querySelector('.artigo-card.expandido');
      if (elemento) {
        elemento.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 100);
  }

  recolherArtigo() {
    this.artigoExpandido = null;
  }

  inscreverNewsletter() {
    if (this.emailNewsletter && this.emailNewsletter.includes('@')) {
      alert('Obrigado por se inscrever em nossa newsletter! Em breve você receberá nossos artigos.');
      this.emailNewsletter = '';
    } else {
      alert('Por favor, insira um e-mail válido.');
    }
  }
}