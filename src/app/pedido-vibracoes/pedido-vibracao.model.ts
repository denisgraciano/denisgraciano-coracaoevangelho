export interface PedidoVibracao {
    nome: string;
    endereco: {
        cep: string;
        logradouro: string;
        numero: string;
        complemento?: string;
        bairro: string;
        cidade: string;
        estado: string;
    };
    pedido: string;
    dataEnvio: Date;
}