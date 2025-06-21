import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';

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

@Component({
  selector: 'app-inscricao-curso',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  template: `
    <div class="inscricao-container">
      <div class="inscricao-header">
        <button class="btn-voltar" (click)="voltar()">
          ← Voltar ao Curso
        </button>
        
        <div class="curso-info">
          <h1>Inscrição no Curso</h1>
          <div class="curso-resumo">
            <h2>{{ cursoTitulo }}</h2>
            <div class="curso-detalhes">
              <span class="detalhe">📅 {{ dataInicio }}</span>
              <span class="detalhe">⏰ {{ horario }}</span>
              <span class="detalhe">💰 R$ {{ preco | number:'1.2-2' }}</span>
            </div>
          </div>
        </div>
      </div>
      
      <form [formGroup]="formularioInscricao" (ngSubmit)="submeterInscricao()" class="formulario-inscricao">
        <div class="secoes-formulario">
          <!-- Dados Pessoais -->
          <div class="secao-formulario">
            <h3>Dados Pessoais</h3>
            
            <div class="campo-grupo">
              <label for="nomeCompleto">Nome Completo *</label>
              <input 
                type="text" 
                id="nomeCompleto" 
                formControlName="nomeCompleto"
                placeholder="Digite seu nome completo"
                [class.erro]="formularioInscricao.get('nomeCompleto')?.invalid && formularioInscricao.get('nomeCompleto')?.touched">
              <div class="mensagem-erro" *ngIf="formularioInscricao.get('nomeCompleto')?.invalid && formularioInscricao.get('nomeCompleto')?.touched">
                Nome completo é obrigatório
              </div>
            </div>
            
            <div class="campos-linha">
              <div class="campo-grupo">
                <label for="email">E-mail *</label>
                <input 
                  type="email" 
                  id="email" 
                  formControlName="email"
                  placeholder="seu@email.com"
                  [class.erro]="formularioInscricao.get('email')?.invalid && formularioInscricao.get('email')?.touched">
                <div class="mensagem-erro" *ngIf="formularioInscricao.get('email')?.invalid && formularioInscricao.get('email')?.touched">
                  <span *ngIf="formularioInscricao.get('email')?.errors?.['required']">E-mail é obrigatório</span>
                  <span *ngIf="formularioInscricao.get('email')?.errors?.['email']">E-mail inválido</span>
                </div>
              </div>
              
              <div class="campo-grupo">
                <label for="telefone">Telefone *</label>
                <input 
                  type="tel" 
                  id="telefone" 
                  formControlName="telefone"
                  placeholder="(11) 99999-9999"
                  [class.erro]="formularioInscricao.get('telefone')?.invalid && formularioInscricao.get('telefone')?.touched">
                <div class="mensagem-erro" *ngIf="formularioInscricao.get('telefone')?.invalid && formularioInscricao.get('telefone')?.touched">
                  Telefone é obrigatório
                </div>
              </div>
            </div>
            
            <div class="campos-linha">
              <div class="campo-grupo">
                <label for="cpf">CPF *</label>
                <input 
                  type="text" 
                  id="cpf" 
                  formControlName="cpf"
                  placeholder="000.000.000-00"
                  [class.erro]="formularioInscricao.get('cpf')?.invalid && formularioInscricao.get('cpf')?.touched">
                <div class="mensagem-erro" *ngIf="formularioInscricao.get('cpf')?.invalid && formularioInscricao.get('cpf')?.touched">
                  CPF é obrigatório
                </div>
              </div>
              
              <div class="campo-grupo">
                <label for="dataNascimento">Data de Nascimento *</label>
                <input 
                  type="date" 
                  id="dataNascimento" 
                  formControlName="dataNascimento"
                  [class.erro]="formularioInscricao.get('dataNascimento')?.invalid && formularioInscricao.get('dataNascimento')?.touched">
                <div class="mensagem-erro" *ngIf="formularioInscricao.get('dataNascimento')?.invalid && formularioInscricao.get('dataNascimento')?.touched">
                  Data de nascimento é obrigatória
                </div>
              </div>
            </div>
          </div>
          
          <!-- Endereço -->
          <div class="secao-formulario" formGroupName="endereco">
            <h3>Endereço</h3>
            
            <div class="campos-linha">
              <div class="campo-grupo campo-pequeno">
                <label for="cep">CEP *</label>
                <input 
                  type="text" 
                  id="cep" 
                  formControlName="cep"
                  placeholder="00000-000"
                  (blur)="buscarCep()"
                  [class.erro]="formularioInscricao.get('endereco.cep')?.invalid && formularioInscricao.get('endereco.cep')?.touched">
                <div class="mensagem-erro" *ngIf="formularioInscricao.get('endereco.cep')?.invalid && formularioInscricao.get('endereco.cep')?.touched">
                  CEP é obrigatório
                </div>
              </div>
              
              <div class="campo-grupo">
                <label for="logradouro">Logradouro *</label>
                <input 
                  type="text" 
                  id="logradouro" 
                  formControlName="logradouro"
                  placeholder="Rua, Avenida, etc."
                  [class.erro]="formularioInscricao.get('endereco.logradouro')?.invalid && formularioInscricao.get('endereco.logradouro')?.touched">
                <div class="mensagem-erro" *ngIf="formularioInscricao.get('endereco.logradouro')?.invalid && formularioInscricao.get('endereco.logradouro')?.touched">
                  Logradouro é obrigatório
                </div>
              </div>
            </div>
            
            <div class="campos-linha">
              <div class="campo-grupo campo-pequeno">
                <label for="numero">Número *</label>
                <input 
                  type="text" 
                  id="numero" 
                  formControlName="numero"
                  placeholder="123"
                  [class.erro]="formularioInscricao.get('endereco.numero')?.invalid && formularioInscricao.get('endereco.numero')?.touched">
                <div class="mensagem-erro" *ngIf="formularioInscricao.get('endereco.numero')?.invalid && formularioInscricao.get('endereco.numero')?.touched">
                  Número é obrigatório
                </div>
              </div>
              
              <div class="campo-grupo">
                <label for="complemento">Complemento</label>
                <input 
                  type="text" 
                  id="complemento" 
                  formControlName="complemento"
                  placeholder="Apto, Bloco, etc.">
              </div>
            </div>
            
            <div class="campos-linha">
              <div class="campo-grupo">
                <label for="bairro">Bairro *</label>
                <input 
                  type="text" 
                  id="bairro" 
                  formControlName="bairro"
                  placeholder="Nome do bairro"
                  [class.erro]="formularioInscricao.get('endereco.bairro')?.invalid && formularioInscricao.get('endereco.bairro')?.touched">
                <div class="mensagem-erro" *ngIf="formularioInscricao.get('endereco.bairro')?.invalid && formularioInscricao.get('endereco.bairro')?.touched">
                  Bairro é obrigatório
                </div>
              </div>
              
              <div class="campo-grupo">
                <label for="cidade">Cidade *</label>
                <input 
                  type="text" 
                  id="cidade" 
                  formControlName="cidade"
                  placeholder="Nome da cidade"
                  [class.erro]="formularioInscricao.get('endereco.cidade')?.invalid && formularioInscricao.get('endereco.cidade')?.touched">
                <div class="mensagem-erro" *ngIf="formularioInscricao.get('endereco.cidade')?.invalid && formularioInscricao.get('endereco.cidade')?.touched">
                  Cidade é obrigatória
                </div>
              </div>
              
              <div class="campo-grupo campo-pequeno">
                <label for="estado">Estado *</label>
                <select 
                  id="estado" 
                  formControlName="estado"
                  [class.erro]="formularioInscricao.get('endereco.estado')?.invalid && formularioInscricao.get('endereco.estado')?.touched">
                  <option value="">Selecione</option>
                  <option value="AC">AC</option>
                  <option value="AL">AL</option>
                  <option value="AP">AP</option>
                  <option value="AM">AM</option>
                  <option value="BA">BA</option>
                  <option value="CE">CE</option>
                  <option value="DF">DF</option>
                  <option value="ES">ES</option>
                  <option value="GO">GO</option>
                  <option value="MA">MA</option>
                  <option value="MT">MT</option>
                  <option value="MS">MS</option>
                  <option value="MG">MG</option>
                  <option value="PA">PA</option>
                  <option value="PB">PB</option>
                  <option value="PR">PR</option>
                  <option value="PE">PE</option>
                  <option value="PI">PI</option>
                  <option value="RJ">RJ</option>
                  <option value="RN">RN</option>
                  <option value="RS">RS</option>
                  <option value="RO">RO</option>
                  <option value="RR">RR</option>
                  <option value="SC">SC</option>
                  <option value="SP">SP</option>
                  <option value="SE">SE</option>
                  <option value="TO">TO</option>
                </select>
                <div class="mensagem-erro" *ngIf="formularioInscricao.get('endereco.estado')?.invalid && formularioInscricao.get('endereco.estado')?.touched">
                  Estado é obrigatório
                </div>
              </div>
            </div>
          </div>
          
          <!-- Forma de Pagamento -->
          <div class="secao-formulario">
            <h3>Forma de Pagamento</h3>
            
            <div class="opcoes-pagamento">
              <label class="opcao-pagamento">
                <input type="radio" formControlName="formaPagamento" value="pix">
                <div class="opcao-conteudo">
                  <span class="opcao-titulo">PIX</span>
                  <span class="opcao-descricao">Pagamento instantâneo</span>
                </div>
              </label>
              
              <label class="opcao-pagamento">
                <input type="radio" formControlName="formaPagamento" value="cartao">
                <div class="opcao-conteudo">
                  <span class="opcao-titulo">Cartão de Crédito</span>
                  <span class="opcao-descricao">Parcelamento disponível</span>
                </div>
              </label>
              
              <label class="opcao-pagamento">
                <input type="radio" formControlName="formaPagamento" value="boleto">
                <div class="opcao-conteudo">
                  <span class="opcao-titulo">Boleto Bancário</span>
                  <span class="opcao-descricao">Vencimento em 3 dias úteis</span>
                </div>
              </label>
            </div>
            
            <div class="mensagem-erro" *ngIf="formularioInscricao.get('formaPagamento')?.invalid && formularioInscricao.get('formaPagamento')?.touched">
              Selecione uma forma de pagamento
            </div>
          </div>
          
          <!-- Observações -->
          <div class="secao-formulario">
            <h3>Observações</h3>
            
            <div class="campo-grupo">
              <label for="observacoes">Observações (opcional)</label>
              <textarea 
                id="observacoes" 
                formControlName="observacoes"
                placeholder="Alguma observação especial sobre sua inscrição..."
                rows="4">
              </textarea>
            </div>
          </div>
          
          <!-- Termos e Condições -->
          <div class="secao-formulario">
            <div class="checkbox-grupo">
              <label class="checkbox-label">
                <input type="checkbox" formControlName="aceitaTermos">
                <span class="checkmark"></span>
                Aceito os <a href="#" target="_blank">termos e condições</a> *
              </label>
              <div class="mensagem-erro" *ngIf="formularioInscricao.get('aceitaTermos')?.invalid && formularioInscricao.get('aceitaTermos')?.touched">
                É necessário aceitar os termos e condições
              </div>
            </div>
            
            <div class="checkbox-grupo">
              <label class="checkbox-label">
                <input type="checkbox" formControlName="receberEmails">
                <span class="checkmark"></span>
                Desejo receber e-mails sobre novos cursos e eventos
              </label>
            </div>
          </div>
        </div>
        
        <div class="resumo-inscricao">
          <div class="resumo-card">
            <h3>Resumo da Inscrição</h3>
            
            <div class="resumo-item">
              <span class="resumo-label">Curso:</span>
              <span class="resumo-valor">{{ cursoTitulo }}</span>
            </div>
            
            <div class="resumo-item">
              <span class="resumo-label">Valor:</span>
              <span class="resumo-valor">R$ {{ preco | number:'1.2-2' }}</span>
            </div>
            
            <div class="resumo-item">
              <span class="resumo-label">Data de Início:</span>
              <span class="resumo-valor">{{ dataInicio }}</span>
            </div>
            
            <div class="resumo-total">
              <span class="total-label">Total:</span>
              <span class="total-valor">R$ {{ preco | number:'1.2-2' }}</span>
            </div>
            
            <button 
              type="submit" 
              class="btn-finalizar"
              [disabled]="formularioInscricao.invalid || processandoInscricao">
              {{ processandoInscricao ? 'Processando...' : 'Finalizar Inscrição' }}
            </button>
          </div>
        </div>
      </form>
    </div>
  `,
  styles: [`
    .inscricao-container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 20px;
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    }
    
    .inscricao-header {
      margin-bottom: 30px;
    }
    
    .btn-voltar {
      background: #2c5aa0;
      color: white;
      border: none;
      padding: 10px 20px;
      border-radius: 5px;
      cursor: pointer;
      margin-bottom: 20px;
      font-size: 14px;
      transition: background-color 0.3s;
    }
    
    .btn-voltar:hover {
      background: #1e3d6f;
    }
    
    .curso-info h1 {
      color: #2c5aa0;
      margin-bottom: 15px;
      font-size: 2em;
    }
    
    .curso-resumo {
      background: white;
      padding: 20px;
      border-radius: 10px;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    }
    
    .curso-resumo h2 {
      color: #333;
      margin-bottom: 10px;
    }
    
    .curso-detalhes {
      display: flex;
      gap: 20px;
      flex-wrap: wrap;
    }
    
    .detalhe {
      color: #666;
      font-size: 14px;
    }
    
    .formulario-inscricao {
      display: grid;
      grid-template-columns: 2fr 1fr;
      gap: 30px;
    }
    
    .secoes-formulario {
      display: flex;
      flex-direction: column;
      gap: 30px;
    }
    
    .secao-formulario {
      background: white;
      padding: 25px;
      border-radius: 10px;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    }
    
    .secao-formulario h3 {
      color: #2c5aa0;
      margin-bottom: 20px;
      font-size: 1.3em;
      border-bottom: 2px solid #e8f4fd;
      padding-bottom: 10px;
    }
    
    .campo-grupo {
      margin-bottom: 20px;
    }
    
    .campo-grupo label {
      display: block;
      margin-bottom: 5px;
      color: #333;
      font-weight: 500;
    }
    
    .campo-grupo input,
    .campo-grupo select,
    .campo-grupo textarea {
      width: 100%;
      padding: 12px;
      border: 2px solid #e0e0e0;
      border-radius: 5px;
      font-size: 14px;
      transition: border-color 0.3s;
    }
    
    .campo-grupo input:focus,
    .campo-grupo select:focus,
    .campo-grupo textarea:focus {
      outline: none;
      border-color: #2c5aa0;
    }
    
    .campo-grupo input.erro,
    .campo-grupo select.erro {
      border-color: #ff4757;
    }
    
    .campos-linha {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 15px;
    }
    
    .campo-pequeno {
      grid-column: span 1;
    }
    
    .mensagem-erro {
      color: #ff4757;
      font-size: 12px;
      margin-top: 5px;
    }
    
    .opcoes-pagamento {
      display: flex;
      flex-direction: column;
      gap: 15px;
    }
    
    .opcao-pagamento {
      display: flex;
      align-items: center;
      padding: 15px;
      border: 2px solid #e0e0e0;
      border-radius: 8px;
      cursor: pointer;
      transition: all 0.3s;
    }
    
    .opcao-pagamento:hover {
      border-color: #2c5aa0;
      background: #f8f9fa;
    }
    
    .opcao-pagamento input[type="radio"] {
      margin-right: 15px;
      width: auto;
    }
    
    .opcao-conteudo {
      display: flex;
      flex-direction: column;
    }
    
    .opcao-titulo {
      font-weight: bold;
      color: #333;
    }
    
    .opcao-descricao {
      font-size: 12px;
      color: #666;
    }
    
    .checkbox-grupo {
      margin-bottom: 15px;
    }
    
    .checkbox-label {
      display: flex;
      align-items: center;
      cursor: pointer;
      font-size: 14px;
    }
    
    .checkbox-label input[type="checkbox"] {
      margin-right: 10px;
      width: auto;
    }
    
    .checkbox-label a {
      color: #2c5aa0;
      text-decoration: none;
    }
    
    .checkbox-label a:hover {
      text-decoration: underline;
    }
    
    .resumo-inscricao {
      position: sticky;
      top: 20px;
      height: fit-content;
    }
    
    .resumo-card {
      background: white;
      padding: 25px;
      border-radius: 10px;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    }
    
    .resumo-card h3 {
      color: #2c5aa0;
      margin-bottom: 20px;
      text-align: center;
    }
    
    .resumo-item {
      display: flex;
      justify-content: space-between;
      margin-bottom: 15px;
      padding-bottom: 15px;
      border-bottom: 1px solid #f0f0f0;
    }
    
    .resumo-label {
      color: #666;
      font-weight: 500;
    }
    
    .resumo-valor {
      color: #333;
      font-weight: bold;
    }
    
    .resumo-total {
      display: flex;
      justify-content: space-between;
      margin: 20px 0;
      padding: 15px 0;
      border-top: 2px solid #2c5aa0;
      border-bottom: 2px solid #2c5aa0;
    }
    
    .total-label {
      font-size: 1.2em;
      font-weight: bold;
      color: #2c5aa0;
    }
    
    .total-valor {
      font-size: 1.2em;
      font-weight: bold;
      color: #2c5aa0;
    }
    
    .btn-finalizar {
      background: #2c5aa0;
      color: white;
      border: none;
      padding: 15px 25px;
      border-radius: 8px;
      font-size: 16px;
      font-weight: bold;
      cursor: pointer;
      width: 100%;
      transition: background-color 0.3s;
    }
    
    .btn-finalizar:hover:not(:disabled) {
      background: #1e3d6f;
    }
    
    .btn-finalizar:disabled {
      background: #ccc;
      cursor: not-allowed;
    }
    
    @media (max-width: 768px) {
      .inscricao-container {
        padding: 15px;
      }
      
      .formulario-inscricao {
        grid-template-columns: 1fr;
        gap: 20px;
      }
      
      .campos-linha {
        grid-template-columns: 1fr;
      }
      
      .curso-detalhes {
        flex-direction: column;
        gap: 10px;
      }
      
      .resumo-inscricao {
        position: static;
        order: -1;
      }
    }
  `]
})
export class InscricaoCursoComponent implements OnInit {
  formularioInscricao: FormGroup;
  cursoId: number = 0;
  cursoTitulo: string = 'Fundamentos da Doutrina Espírita';
  dataInicio: string = '01/02/2025';
  horario: string = 'Sábados, 14h às 16h';
  preco: number = 99.00;
  processandoInscricao: boolean = false;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.formularioInscricao = this.fb.group({
      nomeCompleto: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      telefone: ['', [Validators.required]],
      cpf: ['', [Validators.required]],
      dataNascimento: ['', [Validators.required]],
      endereco: this.fb.group({
        cep: ['', [Validators.required]],
        logradouro: ['', [Validators.required]],
        numero: ['', [Validators.required]],
        complemento: [''],
        bairro: ['', [Validators.required]],
        cidade: ['', [Validators.required]],
        estado: ['', [Validators.required]]
      }),
      formaPagamento: ['', [Validators.required]],
      observacoes: [''],
      aceitaTermos: [false, [Validators.requiredTrue]],
      receberEmails: [false]
    });
  }

  ngOnInit() {
    const cursoIdParam = this.route.snapshot.paramMap.get('id');
    if (cursoIdParam) {
      this.cursoId = parseInt(cursoIdParam);
      this.carregarDadosCurso(this.cursoId);
    }
  }

  carregarDadosCurso(id: number) {
    // Aqui você carregaria os dados do curso específico
    // Por enquanto, usando dados de exemplo
    console.log('Carregando dados do curso:', id);
  }

  buscarCep() {
    const cep = this.formularioInscricao.get('endereco.cep')?.value;
    if (cep && cep.length === 8) {
      // Aqui você faria a chamada para a API de CEP
      // Por enquanto, simulando preenchimento automático
      console.log('Buscando CEP:', cep);
      
      // Exemplo de preenchimento automático (remover em produção)
      setTimeout(() => {
        this.formularioInscricao.patchValue({
          endereco: {
            logradouro: 'Rua das Flores',
            bairro: 'Centro',
            cidade: 'São Paulo',
            estado: 'SP'
          }
        });
      }, 1000);
    }
  }

  submeterInscricao() {
    if (this.formularioInscricao.valid) {
      this.processandoInscricao = true;
      
      const dadosInscricao: DadosInscricao = {
        cursoId: this.cursoId,
        ...this.formularioInscricao.value
      };
      
      console.log('Dados da inscrição:', dadosInscricao);
      
      // Simular processamento
      setTimeout(() => {
        this.processandoInscricao = false;
        alert('Inscrição realizada com sucesso! Você receberá um e-mail de confirmação.');
        this.router.navigate(['/']);
      }, 2000);
    } else {
      // Marcar todos os campos como tocados para exibir erros
      this.marcarCamposComoTocados();
    }
  }

  marcarCamposComoTocados() {
    Object.keys(this.formularioInscricao.controls).forEach(key => {
      const control = this.formularioInscricao.get(key);
      if (control) {
        control.markAsTouched();
        
        if (control instanceof FormGroup) {
          Object.keys(control.controls).forEach(subKey => {
            control.get(subKey)?.markAsTouched();
          });
        }
      }
    });
  }

  voltar() {
    this.router.navigate(['/curso', this.cursoId]);
  }
}

