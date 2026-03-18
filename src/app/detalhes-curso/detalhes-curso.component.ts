import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Curso } from './curso.model';

@Component({
  selector: 'app-detalhes-curso',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './detalhes-curso.component.html',
  styleUrl: './detalhes-curso.component.scss'
})
export class DetalhesCursoComponent {
  curso: Curso = {
    id: 1,
    titulo: 'Fundamentos da Doutrina Espírita',
    categoria: 'Doutrina Espírita',
    instrutor: 'Prof. João Silva',
    duracao: '8 semanas',
    descricao: 'Um curso completo sobre os fundamentos da Doutrina Espírita, abordando os principais conceitos e ensinamentos de Allan Kardec. Ideal para iniciantes que desejam compreender os princípios básicos do Espiritismo.',
    objetivos: [
      'Compreender os princípios fundamentais da Doutrina Espírita',
      'Conhecer a obra de Allan Kardec e sua importância',
      'Desenvolver uma visão clara sobre a vida após a morte',
      'Entender o processo de reencarnação e evolução espiritual',
      'Aplicar os ensinamentos espíritas no dia a dia'
    ],
    conteudoProgramatico: [
      'Introdução ao Espiritismo e Allan Kardec',
      'O Livro dos Espíritos - Conceitos Fundamentais',
      'A Natureza dos Espíritos e a Comunicação Mediúnica',
      'Lei de Reencarnação e Evolução Espiritual',
      'Lei de Causa e Efeito (Carma)',
      'A Prática da Caridade e do Amor ao Próximo',
      'Oração e Evangelização no Lar',
      'Aplicação Prática dos Ensinamentos Espíritas'
    ],
    requisitos: [
      'Interesse genuíno em aprender sobre Espiritismo',
      'Mente aberta para novos conceitos',
      'Disponibilidade para participar das aulas semanais',
      'Não é necessário conhecimento prévio'
    ],
    certificacao: 'Certificado de Conclusão',
    modalidade: 'Presencial',
    dataInicio: '2025-02-01',
    dataFim: '2025-03-29',
    horario: 'Sábados, 14h às 16h',
    vagas: 30,
    vagasDisponiveis: 12,
    imagem: 'assets/images/curso-fundamentos.jpg',
    nivel: 'Iniciante',
    tags: ['Espiritismo', 'Allan Kardec', 'Reencarnação', 'Mediunidade'],
    depoimentos: [
      {
        nome: 'Maria Santos',
        comentario: 'Curso excelente! Me ajudou muito a compreender os fundamentos do Espiritismo de forma clara e objetiva.',
        nota: 5
      },
      {
        nome: 'Carlos Oliveira',
        comentario: 'Professor muito didático e conteúdo bem estruturado. Recomendo para quem está começando.',
        nota: 5
      }
    ]
  };

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    // Aqui você carregaria o curso baseado no ID da rota
    const cursoId = this.route.snapshot.paramMap.get('id');
    if (cursoId) {
      // Carregar curso específico baseado no ID
      this.carregarCurso(parseInt(cursoId));
    }
  }

  carregarCurso(id: number) {
    // Aqui você faria a chamada para carregar o curso específico
    // Por enquanto, usando dados de exemplo
    console.log('Carregando curso com ID:', id);
  }

  voltar() {
    this.router.navigate(['/']);
  }

  abrirInscricao() {
    // Navegar para formulário de inscrição ou abrir modal
    this.router.navigate(['/inscricao', this.curso.id]);
  }


  formatarData(data: string): string {
    const date = new Date(data);
    return date.toLocaleDateString('pt-BR');
  }

  getEstrelas(nota: number): number[] {
    return Array(nota).fill(0);
  }
}
