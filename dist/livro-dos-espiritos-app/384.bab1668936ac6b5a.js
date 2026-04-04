"use strict";
(self["webpackChunklivro_dos_espiritos_app"] = self["webpackChunklivro_dos_espiritos_app"] || []).push([[384],{

/***/ 7384:
/*!***************************************************************!*\
  !*** ./src/app/area-admin/pedidos/lista-pedidos.component.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ListaPedidosComponent: () => (/* binding */ ListaPedidosComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 177);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 8530);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 6977);
/* harmony import */ var _services_admin_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/admin.service */ 1851);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7705);







function ListaPedidosComponent_span_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"](" ", ctx_r0.totalNaoLidos, " n\u00E3o lido", ctx_r0.totalNaoLidos > 1 ? "s" : "", " ");
  }
}
function ListaPedidosComponent_div_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Carregando pedidos...");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
}
function ListaPedidosComponent_div_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("\u26A0\uFE0F ", ctx_r0.erro, "");
  }
}
function ListaPedidosComponent_div_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("\u2705 ", ctx_r0.sucesso, "");
  }
}
function ListaPedidosComponent_div_11_p_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Nenhum pedido de vibra\u00E7\u00E3o recebido ainda. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function ListaPedidosComponent_div_11_div_2_div_1_span_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const pedido_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"](" \uD83D\uDCCD ", pedido_r3.cidade, "", pedido_r3.estado ? "/" + pedido_r3.estado : "", " ");
  }
}
function ListaPedidosComponent_div_11_div_2_div_1_span_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const pedido_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](pedido_r3.usuarioNome);
  }
}
function ListaPedidosComponent_div_11_div_2_div_1_span_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "An\u00F4nimo");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function ListaPedidosComponent_div_11_div_2_div_1_button_24_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "\u2705 Marcar como lido");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function ListaPedidosComponent_div_11_div_2_div_1_button_24_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Salvando...");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function ListaPedidosComponent_div_11_div_2_div_1_button_24_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ListaPedidosComponent_div_11_div_2_div_1_button_24_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r4);
      const pedido_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r0.marcarLido(pedido_r3));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, ListaPedidosComponent_div_11_div_2_div_1_button_24_span_1_Template, 2, 0, "span", 8)(2, ListaPedidosComponent_div_11_div_2_div_1_button_24_span_2_Template, 2, 0, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const pedido_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx_r0.marcandoLidoIds.has(pedido_r3.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("aria-label", "Marcar pedido de " + pedido_r3.nome + " como lido");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r0.marcandoLidoIds.has(pedido_r3.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.marcandoLidoIds.has(pedido_r3.id));
  }
}
function ListaPedidosComponent_div_11_div_2_div_1_span_25_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " \u2705 Pedido lido ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function ListaPedidosComponent_div_11_div_2_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 20)(1, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ListaPedidosComponent_div_11_div_2_div_1_Template_button_click_1_listener() {
      const pedido_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r2).$implicit;
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r0.togglePedido(pedido_r3.id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "\uD83D\uDE4F");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 25)(7, "strong", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "span", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, ListaPedidosComponent_div_11_div_2_div_1_span_12_Template, 2, 2, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "span", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](15, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](16, ListaPedidosComponent_div_11_div_2_div_1_span_16_Template, 2, 1, "span", 31)(17, ListaPedidosComponent_div_11_div_2_div_1_span_17_Template, 2, 0, "span", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "span", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "div", 34)(21, "blockquote", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](24, ListaPedidosComponent_div_11_div_2_div_1_button_24_Template, 3, 4, "button", 37)(25, ListaPedidosComponent_div_11_div_2_div_1_span_25_Template, 2, 0, "span", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const pedido_r3 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("pedido-card--lido", pedido_r3.lido)("pedido-card--expandido", pedido_r3.id === ctx_r0.pedidoExpandidoId);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("aria-expanded", pedido_r3.id === ctx_r0.pedidoExpandidoId)("aria-controls", "pedido-body-" + pedido_r3.id)("aria-label", "Pedido de " + pedido_r3.nome + (pedido_r3.lido ? " \u2014 lido" : " \u2014 n\u00E3o lido") + ", clique para " + (pedido_r3.id === ctx_r0.pedidoExpandidoId ? "recolher" : "expandir"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("pedido-card__dot--nao-lido", !pedido_r3.lido)("pedido-card__dot--lido", pedido_r3.lido);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("aria-label", pedido_r3.lido ? "Lido" : "N\u00E3o lido");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](pedido_r3.nome);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](pedido_r3.email);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", pedido_r3.cidade);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](15, 26, pedido_r3.criadoEm, "dd/MM/yyyy HH:mm"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", pedido_r3.usuarioNome);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !pedido_r3.usuarioId);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", pedido_r3.id === ctx_r0.pedidoExpandidoId ? "\u25B2" : "\u25BC", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("pedido-card__body--visivel", pedido_r3.id === ctx_r0.pedidoExpandidoId);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("id", "pedido-body-" + pedido_r3.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("aria-label", "Conte\u00FAdo do pedido de " + pedido_r3.nome);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](pedido_r3.pedido);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !pedido_r3.lido);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", pedido_r3.lido);
  }
}
function ListaPedidosComponent_div_11_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, ListaPedidosComponent_div_11_div_2_div_1_Template, 26, 29, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r0.resultado.items);
  }
}
function ListaPedidosComponent_div_11_nav_3_button_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ListaPedidosComponent_div_11_nav_3_button_3_Template_button_click_0_listener() {
      const p_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r6).$implicit;
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r0.irPagina(p_r7));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const p_r7 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("ativo", p_r7 === ctx_r0.paginaAtual);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("aria-label", "Ir para p\u00E1gina " + p_r7)("aria-current", p_r7 === ctx_r0.paginaAtual ? "page" : null);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](p_r7);
  }
}
function ListaPedidosComponent_div_11_nav_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "nav", 44)(1, "button", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ListaPedidosComponent_div_11_nav_3_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r5);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r0.irPagina(ctx_r0.paginaAtual - 1));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "\u2190");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, ListaPedidosComponent_div_11_nav_3_button_3_Template, 2, 5, "button", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "button", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ListaPedidosComponent_div_11_nav_3_Template_button_click_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r5);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r0.irPagina(ctx_r0.paginaAtual + 1));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "\u2192");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", !ctx_r0.resultado.temAnterior);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r0.paginas);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", !ctx_r0.resultado.temProxima);
  }
}
function ListaPedidosComponent_div_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, ListaPedidosComponent_div_11_p_1_Template, 2, 0, "p", 14)(2, ListaPedidosComponent_div_11_div_2_Template, 2, 1, "div", 15)(3, ListaPedidosComponent_div_11_nav_3_Template, 6, 3, "nav", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.resultado.items.length === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.resultado.items.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.resultado.totalPaginas > 1);
  }
}
let ListaPedidosComponent = /*#__PURE__*/(() => {
  class ListaPedidosComponent {
    adminService;
    destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__.Subject();
    resultado = null;
    carregando = true;
    erro = '';
    sucesso = '';
    paginaAtual = 1;
    tamanhoPagina = 20;
    // id do pedido com conteúdo expandido
    pedidoExpandidoId = null;
    // ids de pedidos cujo "marcar lido" está em andamento
    marcandoLidoIds = new Set();
    constructor(adminService) {
      this.adminService = adminService;
    }
    ngOnInit() {
      this.carregar();
    }
    ngOnDestroy() {
      this.destroy$.next();
      this.destroy$.complete();
    }
    carregar() {
      this.carregando = true;
      this.erro = '';
      this.adminService.getPedidosVibracao(this.paginaAtual, this.tamanhoPagina).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.takeUntil)(this.destroy$)).subscribe({
        next: result => {
          this.resultado = result;
          this.carregando = false;
        },
        error: () => {
          this.erro = 'Erro ao carregar pedidos de vibração.';
          this.carregando = false;
        }
      });
    }
    togglePedido(id) {
      this.pedidoExpandidoId = this.pedidoExpandidoId === id ? null : id;
    }
    /**
     * Chama PATCH /api/pedidos-vibracao/{id}/lido e atualiza o item localmente.
     * O spinner individual (marcandoLidoIds) evita double-click.
     */
    marcarLido(pedido) {
      if (pedido.lido || this.marcandoLidoIds.has(pedido.id)) return;
      this.marcandoLidoIds.add(pedido.id);
      this.erro = '';
      this.adminService.marcarPedidoLido(pedido.id).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.takeUntil)(this.destroy$)).subscribe({
        next: () => {
          // Atualiza localmente sem recarregar a lista inteira
          if (this.resultado) {
            this.resultado = {
              ...this.resultado,
              items: this.resultado.items.map(p => p.id === pedido.id ? {
                ...p,
                lido: true
              } : p)
            };
          }
          this.marcandoLidoIds.delete(pedido.id);
          this.sucesso = 'Pedido marcado como lido.';
          setTimeout(() => this.sucesso = '', 3000);
        },
        error: () => {
          this.erro = 'Erro ao marcar pedido como lido.';
          this.marcandoLidoIds.delete(pedido.id);
        }
      });
    }
    irPagina(pagina) {
      if (pagina < 1 || this.resultado && pagina > this.resultado.totalPaginas) return;
      this.paginaAtual = pagina;
      this.pedidoExpandidoId = null;
      this.carregar();
    }
    get paginas() {
      if (!this.resultado) return [];
      return Array.from({
        length: this.resultado.totalPaginas
      }, (_, i) => i + 1);
    }
    get totalNaoLidos() {
      return this.resultado?.items.filter(p => !p.lido).length ?? 0;
    }
    static ɵfac = function ListaPedidosComponent_Factory(t) {
      return new (t || ListaPedidosComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_admin_service__WEBPACK_IMPORTED_MODULE_0__.AdminService));
    };
    static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: ListaPedidosComponent,
      selectors: [["app-lista-pedidos"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵStandaloneFeature"]],
      decls: 12,
      vars: 6,
      consts: [[1, "admin-page"], [1, "admin-page-header"], [1, "admin-page-titulo"], [1, "admin-page-subtitulo"], ["class", "badge-nao-lidos", 4, "ngIf"], ["class", "admin-loading", "role", "status", "aria-live", "polite", 4, "ngIf"], ["class", "admin-alert admin-alert--erro", "role", "alert", 4, "ngIf"], ["class", "admin-alert admin-alert--sucesso", "role", "status", 4, "ngIf"], [4, "ngIf"], [1, "badge-nao-lidos"], ["role", "status", "aria-live", "polite", 1, "admin-loading"], [1, "admin-loading__spinner"], ["role", "alert", 1, "admin-alert", "admin-alert--erro"], ["role", "status", 1, "admin-alert", "admin-alert--sucesso"], ["class", "admin-vazio", 4, "ngIf"], ["class", "pedidos-lista", "role", "list", "aria-label", "Pedidos de vibra\u00E7\u00E3o", 4, "ngIf"], ["class", "paginacao", "aria-label", "Navega\u00E7\u00E3o de p\u00E1ginas", 4, "ngIf"], [1, "admin-vazio"], ["role", "list", "aria-label", "Pedidos de vibra\u00E7\u00E3o", 1, "pedidos-lista"], ["class", "pedido-card", "role", "listitem", 3, "pedido-card--lido", "pedido-card--expandido", 4, "ngFor", "ngForOf"], ["role", "listitem", 1, "pedido-card"], [1, "pedido-card__header", 3, "click"], [1, "pedido-card__remetente"], ["role", "img", 1, "pedido-card__dot"], ["aria-hidden", "true", 1, "pedido-card__icone"], [1, "pedido-card__identificacao"], [1, "pedido-card__nome"], [1, "pedido-card__email"], [1, "pedido-card__meta"], ["class", "pedido-card__local", 4, "ngIf"], [1, "pedido-card__data"], ["class", "badge badge--azul", 4, "ngIf"], ["class", "badge badge--cinza", 4, "ngIf"], ["aria-hidden", "true", 1, "pedido-card__chevron"], ["role", "region", 1, "pedido-card__body", 3, "id"], [1, "pedido-card__texto"], [1, "pedido-card__acoes"], ["class", "btn btn--primario btn--sm", 3, "disabled", "click", 4, "ngIf"], ["class", "pedido-lido-label", "aria-label", "Pedido lido", 4, "ngIf"], [1, "pedido-card__local"], [1, "badge", "badge--azul"], [1, "badge", "badge--cinza"], [1, "btn", "btn--primario", "btn--sm", 3, "click", "disabled"], ["aria-label", "Pedido lido", 1, "pedido-lido-label"], ["aria-label", "Navega\u00E7\u00E3o de p\u00E1ginas", 1, "paginacao"], ["aria-label", "P\u00E1gina anterior", 1, "paginacao__btn", 3, "click", "disabled"], ["class", "paginacao__btn", 3, "ativo", "click", 4, "ngFor", "ngForOf"], ["aria-label", "Pr\u00F3xima p\u00E1gina", 1, "paginacao__btn", 3, "click", "disabled"], [1, "paginacao__btn", 3, "click"]],
      template: function ListaPedidosComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div")(3, "h1", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Pedidos de Vibra\u00E7\u00E3o");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "p", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, ListaPedidosComponent_span_7_Template, 2, 2, "span", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, ListaPedidosComponent_div_8_Template, 4, 0, "div", 5)(9, ListaPedidosComponent_div_9_Template, 2, 1, "div", 6)(10, ListaPedidosComponent_div_10_Template, 2, 1, "div", 7)(11, ListaPedidosComponent_div_11_Template, 4, 3, "div", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.resultado ? ctx.resultado.totalItens + " pedidos recebidos" : "Carregando...", " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.resultado && ctx.totalNaoLidos > 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.carregando);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.erro);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.sucesso);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.carregando && ctx.resultado);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_4__.DatePipe],
      styles: ["@charset \"UTF-8\";\n.admin-page[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 24px;\n}\n\n.admin-page-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  gap: 16px;\n  flex-wrap: wrap;\n}\n\n.admin-page-titulo[_ngcontent-%COMP%] {\n  font-size: 1.4rem;\n  font-weight: 700;\n  color: #1a1f2e;\n  margin: 0;\n}\n\n.admin-page-subtitulo[_ngcontent-%COMP%] {\n  font-size: 0.88rem;\n  color: #666;\n  margin: 4px 0 0;\n}\n\n.admin-card[_ngcontent-%COMP%] {\n  background: #ffffff;\n  border-radius: 12px;\n  border: 1px solid #e8ecf0;\n  padding: 22px;\n  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.05);\n}\n\n.admin-loading[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 12px;\n  padding: 48px;\n  color: #666;\n  font-size: 0.9rem;\n}\n.admin-loading__spinner[_ngcontent-%COMP%] {\n  width: 36px;\n  height: 36px;\n  border: 3px solid #e2e8f0;\n  border-top-color: #4f9cf9;\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_admin-spin 0.8s linear infinite;\n}\n\n@keyframes _ngcontent-%COMP%_admin-spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n.admin-alert[_ngcontent-%COMP%] {\n  padding: 13px 18px;\n  border-radius: 8px;\n  font-size: 0.88rem;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.admin-alert--erro[_ngcontent-%COMP%] {\n  background: rgba(239, 68, 68, 0.07);\n  color: #ec1e1e;\n  border: 1px solid rgba(239, 68, 68, 0.18);\n}\n.admin-alert--sucesso[_ngcontent-%COMP%] {\n  background: rgba(34, 197, 94, 0.08);\n  color: #147739;\n  border: 1px solid rgba(34, 197, 94, 0.2);\n}\n\n.admin-vazio[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 48px;\n  color: #888;\n  font-size: 0.92rem;\n  background: #ffffff;\n  border-radius: 10px;\n  border: 1px dashed #d0d7e0;\n}\n.admin-vazio[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], .admin-vazio[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  color: #4f9cf9;\n}\n\n.btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 9px 18px;\n  border-radius: 8px;\n  font-size: 0.86rem;\n  font-weight: 600;\n  cursor: pointer;\n  border: none;\n  text-decoration: none;\n  transition: opacity 0.2s, transform 0.15s, box-shadow 0.2s;\n  line-height: 1.2;\n}\n.btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.55;\n  cursor: not-allowed;\n  transform: none !important;\n}\n.btn[_ngcontent-%COMP%]:focus-visible {\n  outline: 2px solid #4f9cf9;\n  outline-offset: 2px;\n}\n.btn--primario[_ngcontent-%COMP%] {\n  background: #4f9cf9;\n  color: #ffffff;\n  box-shadow: 0 1px 4px rgba(79, 156, 249, 0.3);\n}\n.btn--primario[_ngcontent-%COMP%]:hover:not(:disabled) {\n  opacity: 0.9;\n  transform: translateY(-1px);\n}\n.btn--secundario[_ngcontent-%COMP%] {\n  background: #f4f6fa;\n  color: #333;\n  border: 1px solid #dde2ea;\n}\n.btn--secundario[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #eaedf2;\n}\n.btn--perigo[_ngcontent-%COMP%] {\n  background: #ef4444;\n  color: #ffffff;\n}\n.btn--perigo[_ngcontent-%COMP%]:hover:not(:disabled) {\n  opacity: 0.88;\n}\n\n.btn-acao[_ngcontent-%COMP%] {\n  width: 32px;\n  height: 32px;\n  border-radius: 6px;\n  border: 1px solid #e8ecf0;\n  background: #f8faff;\n  cursor: pointer;\n  font-size: 0.9rem;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  transition: background 0.15s, border-color 0.15s;\n  text-decoration: none;\n}\n.btn-acao[_ngcontent-%COMP%]:hover {\n  border-color: #c0cbda;\n  background: #f0f4ff;\n}\n.btn-acao[_ngcontent-%COMP%]:focus-visible {\n  outline: 2px solid #4f9cf9;\n  outline-offset: 1px;\n}\n.btn-acao[_ngcontent-%COMP%]:disabled {\n  opacity: 0.4;\n  cursor: not-allowed;\n}\n.btn-acao--excluir[_ngcontent-%COMP%]:hover {\n  background: rgba(239, 68, 68, 0.08);\n  border-color: rgba(239, 68, 68, 0.3);\n}\n.btn-acao--editar[_ngcontent-%COMP%]:hover {\n  background: rgba(79, 156, 249, 0.08);\n  border-color: rgba(79, 156, 249, 0.3);\n}\n.btn-acao--aulas[_ngcontent-%COMP%]:hover {\n  background: rgba(34, 197, 94, 0.08);\n  border-color: rgba(34, 197, 94, 0.3);\n}\n\n.acoes[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 6px;\n  align-items: center;\n}\n\n.tabela-container[_ngcontent-%COMP%] {\n  background: #ffffff;\n  border-radius: 12px;\n  border: 1px solid #e8ecf0;\n  overflow: auto;\n  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.04);\n}\n\n.tabela[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n  font-size: 0.86rem;\n}\n.tabela[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%] {\n  background: #f8faff;\n  border-bottom: 1px solid #e8ecf0;\n}\n.tabela[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  padding: 11px 16px;\n  text-align: left;\n  font-size: 0.78rem;\n  font-weight: 600;\n  color: #555;\n  text-transform: uppercase;\n  letter-spacing: 0.4px;\n  white-space: nowrap;\n}\n.tabela[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n  border-bottom: 1px solid #f0f3f7;\n  transition: background 0.12s;\n}\n.tabela[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n.tabela[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover {\n  background: #f8faff;\n}\n.tabela[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 12px 16px;\n  color: #333;\n  vertical-align: middle;\n}\n\n.curso-thumb[_ngcontent-%COMP%] {\n  width: 44px;\n  height: 44px;\n  border-radius: 6px;\n  object-fit: cover;\n  flex-shrink: 0;\n  border: 1px solid #e8ecf0;\n}\n\n.curso-info[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n.curso-info[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 0.87rem;\n  color: #1a1f2e;\n}\n\n.curso-desc[_ngcontent-%COMP%] {\n  font-size: 0.76rem;\n  color: #888;\n  margin: 2px 0 0;\n  max-width: 260px;\n}\n\n.badge[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 3px 9px;\n  border-radius: 10px;\n  font-size: 0.74rem;\n  font-weight: 600;\n  white-space: nowrap;\n}\n.badge--verde[_ngcontent-%COMP%] {\n  background: rgba(34, 197, 94, 0.1);\n  color: #147739;\n}\n.badge--cinza[_ngcontent-%COMP%] {\n  background: rgba(148, 163, 184, 0.14);\n  color: #5c6f8a;\n}\n.badge--laranja[_ngcontent-%COMP%] {\n  background: rgba(245, 158, 11, 0.12);\n  color: #945f06;\n}\n.badge--neutro[_ngcontent-%COMP%] {\n  background: #eef2f7;\n  color: #555;\n}\n.badge--categoria[_ngcontent-%COMP%] {\n  background: rgba(167, 139, 250, 0.1);\n  color: #5d29f6;\n}\n\n.admin-form[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 18px;\n}\n\n.form-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));\n  gap: 16px;\n}\n\n.form-grupo[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n}\n.form-grupo--flex2[_ngcontent-%COMP%] {\n  grid-column: span 2;\n}\n\n.form-label[_ngcontent-%COMP%] {\n  font-size: 0.83rem;\n  font-weight: 600;\n  color: #444;\n}\n.form-label[_ngcontent-%COMP%]   span[aria-label=obrigat\u00F3rio][_ngcontent-%COMP%] {\n  color: #ef4444;\n  margin-left: 2px;\n}\n\n.form-input[_ngcontent-%COMP%] {\n  padding: 9px 12px;\n  border: 1.5px solid #dde2ea;\n  border-radius: 8px;\n  font-size: 0.88rem;\n  color: #1a1f2e;\n  background: #fff;\n  transition: border-color 0.2s, box-shadow 0.2s;\n  width: 100%;\n  box-sizing: border-box;\n}\n.form-input[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #4f9cf9;\n  box-shadow: 0 0 0 3px rgba(79, 156, 249, 0.12);\n}\n.form-input.invalido[_ngcontent-%COMP%] {\n  border-color: #ef4444;\n}\n.form-input.invalido[_ngcontent-%COMP%]:focus {\n  box-shadow: 0 0 0 3px rgba(239, 68, 68, 0.1);\n}\n\n.form-textarea[_ngcontent-%COMP%] {\n  resize: vertical;\n  min-height: 80px;\n  font-family: inherit;\n}\n\n.form-select[_ngcontent-%COMP%] {\n  appearance: auto;\n  cursor: pointer;\n}\n\n.form-erro[_ngcontent-%COMP%] {\n  font-size: 0.78rem;\n  color: #ef4444;\n  font-weight: 500;\n}\n\n.form-dica[_ngcontent-%COMP%] {\n  font-size: 0.76rem;\n  color: #888;\n  line-height: 1.4;\n}\n\n.form-checkbox[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 0.87rem;\n  cursor: pointer;\n  color: #333;\n}\n.form-checkbox[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%] {\n  width: 16px;\n  height: 16px;\n  cursor: pointer;\n  accent-color: #4f9cf9;\n}\n\n.form-acoes[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 12px;\n  justify-content: flex-end;\n  padding-top: 8px;\n  border-top: 1px solid #f0f3f7;\n}\n\n.modal-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.45);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 200;\n  padding: 16px;\n}\n\n.modal[_ngcontent-%COMP%] {\n  background: #ffffff;\n  border-radius: 12px;\n  padding: 28px;\n  max-width: 380px;\n  width: 100%;\n  box-shadow: 0 8px 40px rgba(0, 0, 0, 0.18);\n}\n.modal__texto[_ngcontent-%COMP%] {\n  font-size: 0.92rem;\n  color: #333;\n  line-height: 1.5;\n  margin: 0 0 20px;\n}\n.modal__acoes[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 10px;\n  justify-content: flex-end;\n}\n\n.paginacao[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 6px;\n  justify-content: center;\n  flex-wrap: wrap;\n  margin-top: 8px;\n}\n.paginacao__btn[_ngcontent-%COMP%] {\n  min-width: 34px;\n  height: 34px;\n  padding: 0 10px;\n  border-radius: 7px;\n  border: 1px solid #dde2ea;\n  background: #ffffff;\n  color: #333;\n  font-size: 0.84rem;\n  font-weight: 500;\n  cursor: pointer;\n  transition: background 0.15s, border-color 0.15s, color 0.15s;\n}\n.paginacao__btn[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #f0f6ff;\n  border-color: #4f9cf9;\n  color: #4f9cf9;\n}\n.paginacao__btn.ativo[_ngcontent-%COMP%] {\n  background: #4f9cf9;\n  border-color: #4f9cf9;\n  color: #ffffff;\n}\n.paginacao__btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.4;\n  cursor: not-allowed;\n}\n.paginacao__btn[_ngcontent-%COMP%]:focus-visible {\n  outline: 2px solid #4f9cf9;\n  outline-offset: 2px;\n}\n\n.badge-nao-lidos[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  padding: 2px 9px;\n  border-radius: 999px;\n  font-size: 0.75rem;\n  font-weight: 700;\n  background: rgba(239, 68, 68, 0.12);\n  color: #ec1e1e;\n  margin-left: 10px;\n}\n\n.pedidos-lista[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n\n.pedido-card[_ngcontent-%COMP%] {\n  background: #ffffff;\n  border-radius: 12px;\n  border: 1.5px solid #e8ecf0;\n  overflow: hidden;\n  transition: border-color 0.2s, box-shadow 0.2s;\n}\n.pedido-card--lido[_ngcontent-%COMP%] {\n  opacity: 0.72;\n  background: #fafafa;\n}\n.pedido-card--expandido[_ngcontent-%COMP%] {\n  border-color: #4f9cf9;\n  box-shadow: 0 0 0 3px rgba(79, 156, 249, 0.1);\n  opacity: 1;\n}\n.pedido-card__header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 12px;\n  width: 100%;\n  padding: 14px 18px;\n  background: none;\n  border: none;\n  cursor: pointer;\n  text-align: left;\n  flex-wrap: wrap;\n  transition: background 0.15s;\n}\n.pedido-card__header[_ngcontent-%COMP%]:hover {\n  background: #f8fafc;\n}\n.pedido-card__header[_ngcontent-%COMP%]:focus-visible {\n  outline: 2px solid #4f9cf9;\n  outline-offset: -2px;\n}\n.pedido-card__remetente[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  flex: 1;\n  min-width: 0;\n}\n.pedido-card__dot[_ngcontent-%COMP%] {\n  width: 10px;\n  height: 10px;\n  border-radius: 50%;\n  flex-shrink: 0;\n}\n.pedido-card__dot--nao-lido[_ngcontent-%COMP%] {\n  background: #ef4444;\n  box-shadow: 0 0 0 3px rgba(239, 68, 68, 0.2);\n}\n.pedido-card__dot--lido[_ngcontent-%COMP%] {\n  background: #94a3b8;\n}\n.pedido-card__icone[_ngcontent-%COMP%] {\n  font-size: 1.2rem;\n  flex-shrink: 0;\n}\n.pedido-card__identificacao[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 1px;\n  min-width: 0;\n}\n.pedido-card__nome[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n  color: #1a1f2e;\n  font-weight: 600;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.pedido-card__email[_ngcontent-%COMP%] {\n  font-size: 0.78rem;\n  color: #888;\n}\n.pedido-card__meta[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  flex-wrap: wrap;\n  flex-shrink: 0;\n}\n.pedido-card__local[_ngcontent-%COMP%] {\n  font-size: 0.78rem;\n  color: #666;\n}\n.pedido-card__data[_ngcontent-%COMP%] {\n  font-size: 0.78rem;\n  color: #888;\n  white-space: nowrap;\n}\n.pedido-card__chevron[_ngcontent-%COMP%] {\n  font-size: 0.7rem;\n  color: #aaa;\n}\n.pedido-card__body[_ngcontent-%COMP%] {\n  max-height: 0;\n  overflow: hidden;\n  transition: max-height 0.3s ease;\n  padding: 0 18px;\n}\n.pedido-card__body--visivel[_ngcontent-%COMP%] {\n  max-height: 600px;\n  padding: 0 18px 18px;\n}\n.pedido-card__texto[_ngcontent-%COMP%] {\n  margin: 0 0 16px;\n  padding: 14px 16px;\n  background: #f8fafc;\n  border-left: 3px solid #4f9cf9;\n  border-radius: 0 8px 8px 0;\n  font-size: 0.9rem;\n  color: #334155;\n  line-height: 1.6;\n  white-space: pre-wrap;\n}\n.pedido-card__acoes[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n\n.pedido-lido-label[_ngcontent-%COMP%] {\n  font-size: 0.82rem;\n  color: #199145;\n  font-weight: 600;\n}\n\n.btn--sm[_ngcontent-%COMP%] {\n  padding: 6px 14px;\n  font-size: 0.82rem;\n}\n\n@media (max-width: 600px) {\n  .pedido-card__header[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: flex-start;\n  }\n  .pedido-card__meta[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}"]
    });
  }
  return ListaPedidosComponent;
})();

/***/ })

}]);