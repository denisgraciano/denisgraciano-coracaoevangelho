// src/app/area-aluno/mocks/cursos.mock.ts
import { CursoAluno } from '../models/area-aluno.models';

export const CURSOS_MOCK: CursoAluno[] = [
  {
    id: 'espiritismo-basico',
    titulo: 'Fundamentos do Espiritismo',
    descricao: 'Entenda as bases da doutrina espírita com didática e profundidade.',
    categoria: 'Doutrina',
    imagemUrl: 'assets/images/curso-espiritismo.jpg',
    instrutor: 'Prof. Allan Kardec Jr.',
    totalAulas: 3,
    certificadoDisponivel: true,
    aulas: [
      { id: 'aula-01', titulo: 'O que é o Espiritismo?', descricao: 'Introdução à doutrina.', youtubeVideoId: 'dQw4w9WgXcQ', duracaoMinutos: 25, ordem: 1 },
      { id: 'aula-02', titulo: 'Os Três Aspectos',       descricao: 'Ciência, filosofia e religião.', youtubeVideoId: 'dQw4w9WgXcQ', duracaoMinutos: 30, ordem: 2 },
      { id: 'aula-03', titulo: 'Moral Espírita',         descricao: 'Amor, caridade e evolução.', youtubeVideoId: 'dQw4w9WgXcQ', duracaoMinutos: 28, ordem: 3 },
    ],
  },
  {
    id: 'evangelho-no-lar',
    titulo: 'O Evangelho no Lar',
    descricao: 'A prática do Evangelho como fonte de paz e harmonia familiar.',
    categoria: 'Prática Espírita',
    imagemUrl: 'assets/images/curso-evangelho.jpg',
    instrutor: 'Coord. Maria da Graça',
    totalAulas: 4,
    certificadoDisponivel: true,
    aulas: [
      { id: 'aula-01', titulo: 'A Família no Plano Espiritual', descricao: 'Vínculos além do plano físico.', youtubeVideoId: 'dQw4w9WgXcQ', duracaoMinutos: 22, ordem: 1 },
      { id: 'aula-02', titulo: 'Leitura e Comentário',          descricao: 'Como conduzir uma sessão.', youtubeVideoId: 'dQw4w9WgXcQ', duracaoMinutos: 20, ordem: 2 },
      { id: 'aula-03', titulo: 'Prece e Vibração',              descricao: 'O poder da oração.', youtubeVideoId: 'dQw4w9WgXcQ', duracaoMinutos: 18, ordem: 3 },
      { id: 'aula-04', titulo: 'Desdobramentos Práticos',       descricao: 'Aplicando no cotidiano.', youtubeVideoId: 'dQw4w9WgXcQ', duracaoMinutos: 26, ordem: 4 },
    ],
  },
];