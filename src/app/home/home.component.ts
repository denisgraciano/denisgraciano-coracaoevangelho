import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})

export class HomeComponent {
  emailNewsletter = '';

  cursosDestaque = [
    {
      id: 1,
      titulo: 'Fundamentos da Doutrina Espírita',
      categoria: 'Doutrina Espírita',
      descricao: 'Aprenda os conceitos básicos do Espiritismo com Allan Kardec',
      dataInicio: '01/02/2025',
      duracao: '8 semanas',
      vagasDisponiveis: 12,
      preco: 150.00,
      precoPromocional: 99.00,
      imagem: 'assets/images/curso1.jpg'
    },
    {
      id: 2,
      titulo: 'Mediunidade e Desenvolvimento Espiritual',
      categoria: 'Mediunidade',
      descricao: 'Desenvolva suas faculdades mediúnicas com segurança',
      dataInicio: '15/02/2025',
      duracao: '12 semanas',
      vagasDisponiveis: 8,
      preco: 200.00,
      precoPromocional: 150.00,
      imagem: 'assets/images/curso2.jpg'
    },
    {
      id: 3,
      titulo: 'Gestão de Conflitos com Base Espírita',
      categoria: 'Desafios do Dia a Dia',
      descricao: 'Resolva conflitos aplicando princípios espíritas',
      dataInicio: '01/03/2025',
      duracao: '6 semanas',
      vagasDisponiveis: 15,
      preco: 120.00,
      precoPromocional: null,
      imagem: 'assets/images/curso3.jpg'
    }
  ];

  categorias = [
    {
      nome: 'Doutrina Espírita',
      descricao: 'Estude os fundamentos e obras básicas do Espiritismo',
      totalCursos: 8,
      icone: 'assets/images/icon-doutrina.png'
    },
    {
      nome: 'Desafios do Dia a Dia',
      descricao: 'Aplique ensinamentos espíritas em situações cotidianas',
      totalCursos: 6,
      icone: 'assets/images/icon-desafios.png'
    }
  ];

  proximosCursos = [
    {
      id: 1,
      titulo: 'Fundamentos da Doutrina Espírita',
      dataInicio: '2025-02-01',
      horario: 'Sábados, 14h às 16h',
      modalidade: 'Presencial'
    },
    {
      id: 2,
      titulo: 'Mediunidade e Desenvolvimento Espiritual',
      dataInicio: '2025-02-15',
      horario: 'Domingos, 9h às 11h',
      modalidade: 'Online'
    },
    {
      id: 3,
      titulo: 'Gestão de Conflitos com Base Espírita',
      dataInicio: '2025-03-01',
      horario: 'Quartas, 19h às 21h',
      modalidade: 'Híbrido'
    }
  ];

  depoimentos = [
    {
      nome: 'Maria Santos',
      curso: 'Fundamentos da Doutrina Espírita',
      texto: 'O curso transformou minha compreensão sobre a vida e a espiritualidade. Recomendo para todos que buscam crescimento espiritual.',
      avatar: 'assets/images/avatar-placeholder.jpg'
    },
    {
      nome: 'João Silva',
      curso: 'Mediunidade e Desenvolvimento',
      texto: 'Aprendi a desenvolver minha mediunidade com segurança e responsabilidade. Professores muito preparados.',
      avatar: 'assets/images/avatar-placeholder.jpg'
    },
    {
      nome: 'Ana Costa',
      curso: 'Gestão de Conflitos',
      texto: 'As técnicas aprendidas me ajudaram muito no trabalho e em casa. Curso prático e transformador.',
      avatar: 'assets/images/avatar-placeholder.jpg'
    }
  ];

  scrollToCursos() {
    document.getElementById('cursos')?.scrollIntoView({ behavior: 'smooth' });
  }

  inscreverNewsletter() {
    if (this.emailNewsletter) {
      alert('Obrigado por se inscrever! Você receberá nossas novidades em breve.');
      this.emailNewsletter = '';
    }
  }

  extrairDia(data: string): string {
    return new Date(data).getDate().toString().padStart(2, '0');
  }

  extrairMes(data: string): string {
    const meses = ['JAN', 'FEV', 'MAR', 'ABR', 'MAI', 'JUN',
      'JUL', 'AGO', 'SET', 'OUT', 'NOV', 'DEZ'];
    return meses[new Date(data).getMonth()];
  }
}