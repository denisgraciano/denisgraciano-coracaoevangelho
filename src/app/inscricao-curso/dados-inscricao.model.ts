export interface DadosInscricao {
    cursoId: number;
    nomeCompleto: string;
    email: string;
    telefone: string;
    cpf: string;
    dataNascimento: string;
    endereco: {
        cep: string;
        logradouro: string;
        numero: string;
        complemento?: string;
        bairro: string;
        cidade: string;
        estado: string;
    };
    formaPagamento: string;
    observacoes?: string;
    aceitaTermos: boolean;
    receberEmails: boolean;
}