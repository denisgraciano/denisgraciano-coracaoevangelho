// src/app/detalhes-curso/curso.model.ts
// Espelha: CursoResponseDto (GET /api/cursos/{id})
// id: string (GUID) — alinhado com o backend que usa strings
// imagemUrl: consistente com CursoResumo e CursoAluno

export interface Curso {
  id: string;
  titulo: string;
  categoria: string;
  categoriaId?: string;
  instrutor: string;
  duracao?: string;
  descricao: string;
  objetivos: string[];
  conteudoProgramatico: string[];
  requisitos: string[];
  certificacao?: string;
  modalidade?: string;
  dataInicio?: string;
  dataFim?: string;
  horario?: string;
  vagas: number;
  vagasDisponiveis: number;
  imagemUrl: string;
  nivel?: string;
  tags: string[];
  depoimentos: {
    nome: string;
    comentario: string;
    nota: number;
  }[];
  totalAulas: number;
  certificadoDisponivel: boolean;
  aulas: {
    id: string;
    titulo: string;
    descricao?: string;
    youtubeVideoId: string;
    duracaoMinutos: number;
    ordem: number;
  }[];
}
