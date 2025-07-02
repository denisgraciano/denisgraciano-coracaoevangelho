import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DadosInscricao } from './dados-inscricao.model'

@Component({
  selector: 'app-inscricao-curso',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './inscricao-curso.component.html',
  styleUrl: './inscricao-curso.component.scss'
})
export class InscricaoCursoComponent {
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
