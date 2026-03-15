// src/app/area-aluno/models/area-aluno.models.ts

export interface Aula {
  id: string;
  titulo: string;
  descricao: string;
  youtubeVideoId: string; // apenas o ID, nunca a URL completa
  duracaoMinutos: number;
  ordem: number;
}

export interface CursoAluno {
  id: string;
  titulo: string;
  descricao: string;
  categoria: string;
  imagemUrl: string;
  instrutor: string;
  totalAulas: number;
  aulas: Aula[];
  certificadoDisponivel: boolean;
}

export interface ProgressoAula {
  aulaId: string;
  concluida: boolean;
  dataConlusao?: string; // ISO string
}

export interface ProgressoCurso {
  cursoId: string;
  aulasProgresso: ProgressoAula[];
  percentualConcluido: number; // 0-100
  dataConclusao?: string; // ISO string — preenchido quando 100%
  certificadoEmitido: boolean;
}

export interface Usuario {
  id: string;
  nome: string;
  email: string;
  avatarUrl?: string;
}

export interface Certificado {
  id: string;
  cursoId: string;
  cursoTitulo: string;
  alunoNome: string;
  dataEmissao: string; // ISO string
  cargaHoraria: number;
}