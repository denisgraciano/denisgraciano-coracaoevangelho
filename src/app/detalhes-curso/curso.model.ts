// src/app/detalhes-curso/curso.model.ts
export interface Curso {
  id: string;              // backend usa string (ex: 'espiritismo-basico')
  titulo: string;
  descricao: string;
  categoria: string;
  imagemUrl: string;       // CursoResponseDto.ImagemUrl → imagemUrl
  instrutor: string;
  totalAulas: number;
  certificadoDisponivel: boolean;
  aulas?: AulaCurso[];     // presente no GET /api/cursos/{id}, ausente no resumo
  // campos legados do modelo antigo — mantidos opcionais para não quebrar o template
  nivel?: string;
  duracao?: string;
  modalidade?: string;
  vagas?: number;
  vagasDisponiveis?: number;
  dataInicio?: string;
  dataFim?: string;
  horario?: string;
  certificacao?: string;
  objetivos?: string[];
  conteudoProgramatico?: string[];
  requisitos?: string[];
  tags?: string[];
  depoimentos?: { nome: string; comentario: string; nota: number }[];
  preco?: number;
  precoPromocional?: number;
}

export interface AulaCurso {
  id: string;
  titulo: string;
  descricao?: string;
  youtubeVideoId: string;
  duracaoMinutos: number;
  ordem: number;
}