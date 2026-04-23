import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PedidoVibracao } from './pedido-vibracao.model';
import { HttpClient } from '@angular/common/http';
import { CepService, Endereco } from '../services/cep.service';
import { HttpClientModule } from '@angular/common/http';
import { PedidoVibracaoService } from '../services/pedido-vibracao.service';

@Component({
  selector: 'app-pedido-vibracoes',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, HttpClientModule],
  templateUrl: './pedido-vibracoes.component.html',
  styleUrl: './pedido-vibracoes.component.scss'
})
export class PedidoVibracoesComponent {
  formularioPedido: FormGroup;
  pedidoEnviado = false;
  enviandoPedido = false;
  erro?: string;

  constructor(private fb: FormBuilder, private http: HttpClient, private cepService: CepService,  private pedidoVibracaoService: PedidoVibracaoService) {
    this.formularioPedido = this.fb.group({
      nome: ['', [Validators.required, Validators.minLength(3)]],
      email: [''],
      endereco: this.fb.group({
        cep: ['', [Validators.required]],
        logradouro: ['', [Validators.required]],
        numero: ['', [Validators.required]],
        complemento: [''],
        bairro: ['', [Validators.required]],
        cidade: ['', [Validators.required]],
        estado: ['', [Validators.required]]
      }),
      pedido: ['', [Validators.required, Validators.minLength(10)]]
    });
  }

  carregarCep() {
    const cep = this.formularioPedido.get('endereco.cep')?.value.replace(/\D/g, '');;
    if (cep && cep.length === 8) {
      this.cepService.buscarCEP(cep).subscribe({
        next: (data) => {
          if ('erro' in data) {
            this.erro = 'CEP não encontrado';
          } else {
            this.formularioPedido.patchValue({
              endereco: {
                logradouro: data.logradouro,
                bairro: data.bairro,
                cidade: data.localidade,
                estado: data.uf
              }
            }),
              this.erro = 'Não Encontrado';
          }
        },
        error: () => {
          this.erro = 'Erro ao buscar o CEP';
        }
      });
    }
  }

  enviarPedido() {
    if (this.formularioPedido.valid) {
      this.enviandoPedido = true;

      const pedidoData: PedidoVibracao = {
        ...this.formularioPedido.value,
        dataEnvio: new Date()
      };

      console.log('Dados do pedido:', pedidoData);
      
      this.pedidoVibracaoService.enviarPedido(pedidoData).subscribe({
        next: (response) => {
          this.enviandoPedido = false;
          this.pedidoEnviado = true;
        },
        error: (error) => {
          this.enviandoPedido = false;
          console.error('Erro ao enviar pedido:', error);
          alert('Erro ao enviar pedido. Tente novamente.');
        }
      });
     

      // Simulação de envio
      setTimeout(() => {
        this.enviandoPedido = false;
        this.pedidoEnviado = true;
      }, 2000);
    } else {
      // Marcar todos os campos como tocados para exibir erros
      this.marcarCamposComoTocados();
    }
  }

  marcarCamposComoTocados() {
    Object.keys(this.formularioPedido.controls).forEach(key => {
      const control = this.formularioPedido.get(key);
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

  novoPedido() {
    this.pedidoEnviado = false;
    this.formularioPedido.reset();
  }

  voltarHome() {
    // Implementar navegação para home
    // this.router.navigate(['/']);
    window.location.href = '/';
  }
}
