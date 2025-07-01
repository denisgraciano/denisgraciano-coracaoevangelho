export interface Curso {
    id: number;
    titulo: string;
    categoria: string;
    instrutor: string;
    duracao: string;
    preco: number;
    precoPromocional?: number;
    descricao: string;
    objetivos: string[];
    conteudoProgramatico: string[];
    requisitos: string[];
    certificacao: string;
    modalidade: string;
    dataInicio: string;
    dataFim: string;
    horario: string;
    vagas: number;
    vagasDisponiveis: number;
    imagem: string;
    nivel: string;
    tags: string[];
    depoimentos: {
        nome: string;
        comentario: string;
        nota: number;
    }[];
}
