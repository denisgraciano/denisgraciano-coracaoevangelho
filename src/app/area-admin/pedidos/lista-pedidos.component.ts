// src/app/area-admin/pedidos/lista-pedidos.component.ts
import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { AdminService } from '../services/admin.service';
import { PedidoVibracaoAdmin, PagedResult } from '../models/admin.models';

@Component({
  selector: 'app-lista-pedidos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './lista-pedidos.component.html',
  styleUrls: ['./lista-pedidos.component.scss'],
})
export class ListaPedidosComponent implements OnInit, OnDestroy {
  private destroy$ = new Subject<void>();

  resultado: PagedResult<PedidoVibracaoAdmin> | null = null;
  carregando = true;
  erro = '';
  sucesso = '';
  paginaAtual = 1;
  readonly tamanhoPagina = 20;

  // id do pedido com conteúdo expandido
  pedidoExpandidoId: string | null = null;

  // ids de pedidos cujo "marcar lido" está em andamento
  marcandoLidoIds = new Set<string>();

  constructor(private adminService: AdminService) {}

  ngOnInit(): void {
    this.carregar();
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  private carregar(): void {
    this.carregando = true;
    this.erro = '';
    this.adminService
      .getPedidosVibracao(this.paginaAtual, this.tamanhoPagina)
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: result => {
          this.resultado = result;
          this.carregando = false;
        },
        error: () => {
          this.erro = 'Erro ao carregar pedidos de vibração.';
          this.carregando = false;
        },
      });
  }

  togglePedido(id: string): void {
    this.pedidoExpandidoId = this.pedidoExpandidoId === id ? null : id;
  }

  /**
   * Chama PATCH /api/pedidos-vibracao/{id}/lido e atualiza o item localmente.
   * O spinner individual (marcandoLidoIds) evita double-click.
   */
  marcarLido(pedido: PedidoVibracaoAdmin): void {
    if (pedido.lido || this.marcandoLidoIds.has(pedido.id)) return;

    this.marcandoLidoIds.add(pedido.id);
    this.erro = '';

    this.adminService
      .marcarPedidoLido(pedido.id)
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: () => {
          // Atualiza localmente sem recarregar a lista inteira
          if (this.resultado) {
            this.resultado = {
              ...this.resultado,
              items: this.resultado.items.map(p =>
                p.id === pedido.id ? { ...p, lido: true } : p
              ),
            };
          }
          this.marcandoLidoIds.delete(pedido.id);
          this.sucesso = 'Pedido marcado como lido.';
          setTimeout(() => (this.sucesso = ''), 3000);
        },
        error: () => {
          this.erro = 'Erro ao marcar pedido como lido.';
          this.marcandoLidoIds.delete(pedido.id);
        },
      });
  }

  irPagina(pagina: number): void {
    if (pagina < 1 || (this.resultado && pagina > this.resultado.totalPaginas)) return;
    this.paginaAtual = pagina;
    this.pedidoExpandidoId = null;
    this.carregar();
  }

  get paginas(): number[] {
    if (!this.resultado) return [];
    return Array.from({ length: this.resultado.totalPaginas }, (_, i) => i + 1);
  }

  get totalNaoLidos(): number {
    return this.resultado?.items.filter(p => !p.lido).length ?? 0;
  }
}