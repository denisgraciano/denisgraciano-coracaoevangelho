// Removidos: formaPagamento (curso gratuito) — campo não é mais necessário.
// Mantidos todos os dados cadastrais para identificação do aluno.
export interface DadosInscricao {
  cursoId: string;
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
  observacoes?: string;
  aceitaTermos: boolean;
  receberEmails: boolean;
}