import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PedidoVibracao } from './pedido-vibracao.model';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-pedido-vibracoes',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './pedido-vibracoes.component.html',
  styleUrl: './pedido-vibracoes.component.scss'
})
export class PedidoVibracoesComponent {
  formularioPedido: FormGroup;
  pedidoEnviado = false;
  enviandoPedido = false;

  constructor(private fb: FormBuilder, private http: HttpClient) {
    this.formularioPedido = this.fb.group({
      nome: ['', [Validators.required, Validators.minLength(3)]],
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

  buscarCep() {
    const cep = this.formularioPedido.get('endereco.cep')?.value.replace(/\D/g, '');;
    if (cep && cep.length === 8) {
      fetch(`https://viacep.com.br/ws/${cep}/json/`)
        .then(response => response.json())
        .then(data => {
          if (data.erro) {
            console.error("CEP não encontrado.");
          } else {
            console.log(data); // Exibe: {cep, logradouro, bairro, localidade, uf, ...}
            this.formularioPedido.patchValue({
              endereco: {
                logradouro: data.logradouro,
                bairro: data.bairro,
                cidade: data.localidade,
                estado: data.uf
              }
            });
          }
        })
        .catch(error => console.error("Erro na requisição:", error));

      // Aqui você faria a chamada para a API de CEP
      // Por enquanto, simulando preenchimento automático


      // Exemplo de preenchimento automático (remover em produção)
      // Implementar integração com ViaCEP ou similar
      /*
      setTimeout(() => {
        this.formularioPedido.patchValue({
          endereco: {
            logradouro: 'Rua das Flores',
            bairro: 'Centro',
            cidade: 'São Paulo',
            estado: 'SP'
          }
        });
      }, 1000);
      */
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

      // Aqui você faria a chamada para o backend
      // Exemplo de estrutura para chamada HTTP:
      /*
      this.pedidosService.enviarPedido(pedidoData).subscribe({
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
      */

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
