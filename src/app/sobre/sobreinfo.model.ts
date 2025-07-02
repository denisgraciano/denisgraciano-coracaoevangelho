interface SobreInfo {
    titulo: string;
    descricao: string;
    missao: string;
    visao: string;
    valores: string[];
    historia: string;
    contato: {
        email: string;
        telefone: string;
        endereco: string;
        redesSociais: {
            nome: string;
            url: string;
        }[];
    };
}