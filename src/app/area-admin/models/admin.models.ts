// src/app/area-admin/models/admin.models.ts

// ── Wrappers da API ───────────────────────────────────────────
export interface ApiResponse<T> {
  success: boolean;
  data: T;
  message: string;
  errors: string[];
}

export interface PagedResult<T> {
  items: T[];
  totalItens: number;
  pagina: number;
  tamanhoPagina: number;
  totalPaginas: number;
  temProxima: boolean;
  temAnterior: boolean;
}

// ── Categoria ─────────────────────────────────────────────────
export interface Categoria {
  id: string;
  nome: string;
  descricao?: string;
  iconeUrl?: string;
  totalCursos: number;
}

// ── Curso ─────────────────────────────────────────────────────
export interface CursoResumo {
  id: string;
  titulo: string;
  descricao: string;
  categoria?: string;
  categoriaId?: string;
  imagemUrl: string;
  instrutor: string;
  totalAulas: number;
  certificadoDisponivel: boolean;
  vagas: number;
}

export interface AulaAdmin {
  id: string;
  titulo: string;
  descricao?: string;
  youtubeVideoId: string;
  duracaoMinutos: number;
  ordem: number;
}

export interface CursoDetalhe extends CursoResumo {
  aulas: AulaAdmin[];
}

export interface CursoPayload {
  titulo: string;
  descricao: string;
  categoriaId?: string;
  imagemUrl: string;
  instrutor: string;
  certificadoDisponivel: boolean;
  vagas: number;
}

export interface AulaPayload {
  titulo: string;
  descricao?: string;
  youtubeVideoId: string;
  duracaoMinutos: number;
  ordem: number;
}

// ── Matricula (admin view) ─────────────────────────────────────
export interface MatriculaAdmin {
  id: string;
  cursoId: string;
  cursoTitulo: string;
  usuarioId: string;
  usuarioNome: string;
  usuarioEmail: string;
  dataMatricula: string;
  ativa: boolean;
}

// ── Pedido de Vibração (admin view) ───────────────────────────
export interface PedidoVibracaoAdmin {
  id: string;
  nome: string;
  email: string;
  pedido: string;
  cidade?: string;
  estado?: string;
  // Backend serializa como "criadoEm" (camelCase do C# CriadoEm)
  criadoEm: string;
  lido: boolean;
  usuarioId?: string;
  usuarioNome?: string;
}

// ── Usuário (admin view) ───────────────────────────────────────
export interface UsuarioAdmin {
  id: string;
  nome: string;
  email: string;
  avatarUrl?: string;
  role: string;
  dataCadastro: string;
}

/** Payload para edição de usuário pelo admin */
export interface EditarUsuarioPayload {
  nome: string;
  email: string;
  avatarUrl: string | null;
  role: 'aluno' | 'admin';
}

// ── Dashboard stats ────────────────────────────────────────────
export interface DashboardStats {
  totalCursos: number;
  totalAlunos: number;
  totalMatriculas: number;
  totalPedidos: number;
}