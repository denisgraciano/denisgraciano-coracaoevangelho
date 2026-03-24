export interface PedidoVibracao {
    nome: string;
    email: string;
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

export interface PedidoVibracaoResposta {
  id: string;
  mensagem: string;
}
 
export interface ApiResponse<T> {
  success: boolean;
  data: T;
  message: string;
  errors: string[];
}