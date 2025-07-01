export interface PalestraRealizada {
    id: number;
    titulo: string;
    data: string;
    palestrante: string;
    descricao: string;
    imagemUrl: string;
    downloadUrl: string;
    tags?: string[];
}
