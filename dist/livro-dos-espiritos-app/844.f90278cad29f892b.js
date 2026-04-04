"use strict";
(self["webpackChunklivro_dos_espiritos_app"] = self["webpackChunklivro_dos_espiritos_app"] || []).push([[844],{

/***/ 5844:
/*!*********************************************************************!*\
  !*** ./src/app/area-admin/matriculas/lista-matriculas.component.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ListaMatriculasComponent: () => (/* binding */ ListaMatriculasComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 177);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 8530);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 6977);
/* harmony import */ var _services_admin_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/admin.service */ 1851);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7705);







function ListaMatriculasComponent_div_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Carregando matr\u00EDculas...");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
}
function ListaMatriculasComponent_div_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("\u26A0\uFE0F ", ctx_r0.erro, "");
  }
}
function ListaMatriculasComponent_div_9_p_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Nenhuma matr\u00EDcula registrada ainda. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function ListaMatriculasComponent_div_9_div_2_tr_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr")(1, "td")(2, "div", 18)(3, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "td")(10, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](12, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "td")(14, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const m_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](m_r2.usuarioNome);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](m_r2.usuarioEmail);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](m_r2.cursoTitulo);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](12, 7, m_r2.dataMatricula, "dd/MM/yyyy"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMap"](m_r2.ativa ? "badge badge--verde" : "badge badge--cinza");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", m_r2.ativa ? "Ativa" : "Inativa", " ");
  }
}
function ListaMatriculasComponent_div_9_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 14)(1, "table", 15)(2, "thead")(3, "tr")(4, "th", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Aluno");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "th", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Curso");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "th", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Data");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "th", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Status");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](13, ListaMatriculasComponent_div_9_div_2_tr_13_Template, 16, 10, "tr", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r0.resultado.items);
  }
}
function ListaMatriculasComponent_div_9_nav_3_button_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ListaMatriculasComponent_div_9_nav_3_button_3_Template_button_click_0_listener() {
      const p_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r4).$implicit;
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r0.irPagina(p_r5));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const p_r5 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("ativo", p_r5 === ctx_r0.paginaAtual);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("aria-label", "Ir para p\u00E1gina " + p_r5)("aria-current", p_r5 === ctx_r0.paginaAtual ? "page" : null);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](p_r5);
  }
}
function ListaMatriculasComponent_div_9_nav_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "nav", 21)(1, "button", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ListaMatriculasComponent_div_9_nav_3_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r3);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r0.irPagina(ctx_r0.paginaAtual - 1));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "\u2190");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, ListaMatriculasComponent_div_9_nav_3_button_3_Template, 2, 5, "button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "button", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ListaMatriculasComponent_div_9_nav_3_Template_button_click_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r3);
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
function ListaMatriculasComponent_div_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, ListaMatriculasComponent_div_9_p_1_Template, 2, 0, "p", 10)(2, ListaMatriculasComponent_div_9_div_2_Template, 14, 1, "div", 11)(3, ListaMatriculasComponent_div_9_nav_3_Template, 6, 3, "nav", 12);
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
let ListaMatriculasComponent = /*#__PURE__*/(() => {
  class ListaMatriculasComponent {
    adminService;
    destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__.Subject();
    resultado = null;
    carregando = true;
    erro = '';
    paginaAtual = 1;
    tamanhoPagina = 20;
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
      this.adminService.getMatriculas(this.paginaAtual, this.tamanhoPagina).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.takeUntil)(this.destroy$)).subscribe({
        next: result => {
          this.resultado = result;
          this.carregando = false;
        },
        error: () => {
          this.erro = 'Erro ao carregar matrículas.';
          this.carregando = false;
        }
      });
    }
    irPagina(pagina) {
      if (pagina < 1 || this.resultado && pagina > this.resultado.totalPaginas) return;
      this.paginaAtual = pagina;
      this.carregar();
    }
    get paginas() {
      if (!this.resultado) return [];
      return Array.from({
        length: this.resultado.totalPaginas
      }, (_, i) => i + 1);
    }
    static ɵfac = function ListaMatriculasComponent_Factory(t) {
      return new (t || ListaMatriculasComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_admin_service__WEBPACK_IMPORTED_MODULE_0__.AdminService));
    };
    static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: ListaMatriculasComponent,
      selectors: [["app-lista-matriculas"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵStandaloneFeature"]],
      decls: 10,
      vars: 4,
      consts: [[1, "admin-page"], [1, "admin-page-header"], [1, "admin-page-titulo"], [1, "admin-page-subtitulo"], ["class", "admin-loading", "role", "status", "aria-live", "polite", 4, "ngIf"], ["class", "admin-alert admin-alert--erro", "role", "alert", 4, "ngIf"], [4, "ngIf"], ["role", "status", "aria-live", "polite", 1, "admin-loading"], [1, "admin-loading__spinner"], ["role", "alert", 1, "admin-alert", "admin-alert--erro"], ["class", "admin-vazio", 4, "ngIf"], ["class", "tabela-container", "role", "region", "aria-label", "Lista de matr\u00EDculas", 4, "ngIf"], ["class", "paginacao", "aria-label", "Navega\u00E7\u00E3o de p\u00E1ginas", 4, "ngIf"], [1, "admin-vazio"], ["role", "region", "aria-label", "Lista de matr\u00EDculas", 1, "tabela-container"], ["aria-label", "Matr\u00EDculas realizadas", 1, "tabela"], ["scope", "col"], [4, "ngFor", "ngForOf"], [1, "usuario-info"], [1, "usuario-email"], [1, "data-texto"], ["aria-label", "Navega\u00E7\u00E3o de p\u00E1ginas", 1, "paginacao"], ["aria-label", "P\u00E1gina anterior", 1, "paginacao__btn", 3, "click", "disabled"], ["class", "paginacao__btn", 3, "ativo", "click", 4, "ngFor", "ngForOf"], ["aria-label", "Pr\u00F3xima p\u00E1gina", 1, "paginacao__btn", 3, "click", "disabled"], [1, "paginacao__btn", 3, "click"]],
      template: function ListaMatriculasComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div")(3, "h1", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Matr\u00EDculas");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "p", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, ListaMatriculasComponent_div_7_Template, 4, 0, "div", 4)(8, ListaMatriculasComponent_div_8_Template, 2, 1, "div", 5)(9, ListaMatriculasComponent_div_9_Template, 4, 3, "div", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.resultado ? ctx.resultado.totalItens + " matr\u00EDculas no total" : "Carregando...", " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.carregando);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.erro);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.carregando && !ctx.erro && ctx.resultado);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_4__.DatePipe],
      styles: ["@charset \"UTF-8\";\n.admin-page[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 24px;\n}\n\n.admin-page-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  gap: 16px;\n  flex-wrap: wrap;\n}\n\n.admin-page-titulo[_ngcontent-%COMP%] {\n  font-size: 1.4rem;\n  font-weight: 700;\n  color: #1a1f2e;\n  margin: 0;\n}\n\n.admin-page-subtitulo[_ngcontent-%COMP%] {\n  font-size: 0.88rem;\n  color: #666;\n  margin: 4px 0 0;\n}\n\n.admin-card[_ngcontent-%COMP%] {\n  background: #ffffff;\n  border-radius: 12px;\n  border: 1px solid #e8ecf0;\n  padding: 22px;\n  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.05);\n}\n\n.admin-loading[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 12px;\n  padding: 48px;\n  color: #666;\n  font-size: 0.9rem;\n}\n.admin-loading__spinner[_ngcontent-%COMP%] {\n  width: 36px;\n  height: 36px;\n  border: 3px solid #e2e8f0;\n  border-top-color: #4f9cf9;\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_admin-spin 0.8s linear infinite;\n}\n\n@keyframes _ngcontent-%COMP%_admin-spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n.admin-alert[_ngcontent-%COMP%] {\n  padding: 13px 18px;\n  border-radius: 8px;\n  font-size: 0.88rem;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.admin-alert--erro[_ngcontent-%COMP%] {\n  background: rgba(239, 68, 68, 0.07);\n  color: #ec1e1e;\n  border: 1px solid rgba(239, 68, 68, 0.18);\n}\n.admin-alert--sucesso[_ngcontent-%COMP%] {\n  background: rgba(34, 197, 94, 0.08);\n  color: #147739;\n  border: 1px solid rgba(34, 197, 94, 0.2);\n}\n\n.admin-vazio[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 48px;\n  color: #888;\n  font-size: 0.92rem;\n  background: #ffffff;\n  border-radius: 10px;\n  border: 1px dashed #d0d7e0;\n}\n.admin-vazio[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], .admin-vazio[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  color: #4f9cf9;\n}\n\n.btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 9px 18px;\n  border-radius: 8px;\n  font-size: 0.86rem;\n  font-weight: 600;\n  cursor: pointer;\n  border: none;\n  text-decoration: none;\n  transition: opacity 0.2s, transform 0.15s, box-shadow 0.2s;\n  line-height: 1.2;\n}\n.btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.55;\n  cursor: not-allowed;\n  transform: none !important;\n}\n.btn[_ngcontent-%COMP%]:focus-visible {\n  outline: 2px solid #4f9cf9;\n  outline-offset: 2px;\n}\n.btn--primario[_ngcontent-%COMP%] {\n  background: #4f9cf9;\n  color: #ffffff;\n  box-shadow: 0 1px 4px rgba(79, 156, 249, 0.3);\n}\n.btn--primario[_ngcontent-%COMP%]:hover:not(:disabled) {\n  opacity: 0.9;\n  transform: translateY(-1px);\n}\n.btn--secundario[_ngcontent-%COMP%] {\n  background: #f4f6fa;\n  color: #333;\n  border: 1px solid #dde2ea;\n}\n.btn--secundario[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #eaedf2;\n}\n.btn--perigo[_ngcontent-%COMP%] {\n  background: #ef4444;\n  color: #ffffff;\n}\n.btn--perigo[_ngcontent-%COMP%]:hover:not(:disabled) {\n  opacity: 0.88;\n}\n\n.btn-acao[_ngcontent-%COMP%] {\n  width: 32px;\n  height: 32px;\n  border-radius: 6px;\n  border: 1px solid #e8ecf0;\n  background: #f8faff;\n  cursor: pointer;\n  font-size: 0.9rem;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  transition: background 0.15s, border-color 0.15s;\n  text-decoration: none;\n}\n.btn-acao[_ngcontent-%COMP%]:hover {\n  border-color: #c0cbda;\n  background: #f0f4ff;\n}\n.btn-acao[_ngcontent-%COMP%]:focus-visible {\n  outline: 2px solid #4f9cf9;\n  outline-offset: 1px;\n}\n.btn-acao[_ngcontent-%COMP%]:disabled {\n  opacity: 0.4;\n  cursor: not-allowed;\n}\n.btn-acao--excluir[_ngcontent-%COMP%]:hover {\n  background: rgba(239, 68, 68, 0.08);\n  border-color: rgba(239, 68, 68, 0.3);\n}\n.btn-acao--editar[_ngcontent-%COMP%]:hover {\n  background: rgba(79, 156, 249, 0.08);\n  border-color: rgba(79, 156, 249, 0.3);\n}\n.btn-acao--aulas[_ngcontent-%COMP%]:hover {\n  background: rgba(34, 197, 94, 0.08);\n  border-color: rgba(34, 197, 94, 0.3);\n}\n\n.acoes[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 6px;\n  align-items: center;\n}\n\n.tabela-container[_ngcontent-%COMP%] {\n  background: #ffffff;\n  border-radius: 12px;\n  border: 1px solid #e8ecf0;\n  overflow: auto;\n  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.04);\n}\n\n.tabela[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n  font-size: 0.86rem;\n}\n.tabela[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%] {\n  background: #f8faff;\n  border-bottom: 1px solid #e8ecf0;\n}\n.tabela[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  padding: 11px 16px;\n  text-align: left;\n  font-size: 0.78rem;\n  font-weight: 600;\n  color: #555;\n  text-transform: uppercase;\n  letter-spacing: 0.4px;\n  white-space: nowrap;\n}\n.tabela[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n  border-bottom: 1px solid #f0f3f7;\n  transition: background 0.12s;\n}\n.tabela[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n.tabela[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover {\n  background: #f8faff;\n}\n.tabela[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 12px 16px;\n  color: #333;\n  vertical-align: middle;\n}\n\n.curso-thumb[_ngcontent-%COMP%] {\n  width: 44px;\n  height: 44px;\n  border-radius: 6px;\n  object-fit: cover;\n  flex-shrink: 0;\n  border: 1px solid #e8ecf0;\n}\n\n.curso-info[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n.curso-info[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 0.87rem;\n  color: #1a1f2e;\n}\n\n.curso-desc[_ngcontent-%COMP%] {\n  font-size: 0.76rem;\n  color: #888;\n  margin: 2px 0 0;\n  max-width: 260px;\n}\n\n.badge[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 3px 9px;\n  border-radius: 10px;\n  font-size: 0.74rem;\n  font-weight: 600;\n  white-space: nowrap;\n}\n.badge--verde[_ngcontent-%COMP%] {\n  background: rgba(34, 197, 94, 0.1);\n  color: #147739;\n}\n.badge--cinza[_ngcontent-%COMP%] {\n  background: rgba(148, 163, 184, 0.14);\n  color: #5c6f8a;\n}\n.badge--laranja[_ngcontent-%COMP%] {\n  background: rgba(245, 158, 11, 0.12);\n  color: #945f06;\n}\n.badge--neutro[_ngcontent-%COMP%] {\n  background: #eef2f7;\n  color: #555;\n}\n.badge--categoria[_ngcontent-%COMP%] {\n  background: rgba(167, 139, 250, 0.1);\n  color: #5d29f6;\n}\n\n.admin-form[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 18px;\n}\n\n.form-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));\n  gap: 16px;\n}\n\n.form-grupo[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n}\n.form-grupo--flex2[_ngcontent-%COMP%] {\n  grid-column: span 2;\n}\n\n.form-label[_ngcontent-%COMP%] {\n  font-size: 0.83rem;\n  font-weight: 600;\n  color: #444;\n}\n.form-label[_ngcontent-%COMP%]   span[aria-label=obrigat\u00F3rio][_ngcontent-%COMP%] {\n  color: #ef4444;\n  margin-left: 2px;\n}\n\n.form-input[_ngcontent-%COMP%] {\n  padding: 9px 12px;\n  border: 1.5px solid #dde2ea;\n  border-radius: 8px;\n  font-size: 0.88rem;\n  color: #1a1f2e;\n  background: #fff;\n  transition: border-color 0.2s, box-shadow 0.2s;\n  width: 100%;\n  box-sizing: border-box;\n}\n.form-input[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #4f9cf9;\n  box-shadow: 0 0 0 3px rgba(79, 156, 249, 0.12);\n}\n.form-input.invalido[_ngcontent-%COMP%] {\n  border-color: #ef4444;\n}\n.form-input.invalido[_ngcontent-%COMP%]:focus {\n  box-shadow: 0 0 0 3px rgba(239, 68, 68, 0.1);\n}\n\n.form-textarea[_ngcontent-%COMP%] {\n  resize: vertical;\n  min-height: 80px;\n  font-family: inherit;\n}\n\n.form-select[_ngcontent-%COMP%] {\n  appearance: auto;\n  cursor: pointer;\n}\n\n.form-erro[_ngcontent-%COMP%] {\n  font-size: 0.78rem;\n  color: #ef4444;\n  font-weight: 500;\n}\n\n.form-dica[_ngcontent-%COMP%] {\n  font-size: 0.76rem;\n  color: #888;\n  line-height: 1.4;\n}\n\n.form-checkbox[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 0.87rem;\n  cursor: pointer;\n  color: #333;\n}\n.form-checkbox[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%] {\n  width: 16px;\n  height: 16px;\n  cursor: pointer;\n  accent-color: #4f9cf9;\n}\n\n.form-acoes[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 12px;\n  justify-content: flex-end;\n  padding-top: 8px;\n  border-top: 1px solid #f0f3f7;\n}\n\n.modal-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.45);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 200;\n  padding: 16px;\n}\n\n.modal[_ngcontent-%COMP%] {\n  background: #ffffff;\n  border-radius: 12px;\n  padding: 28px;\n  max-width: 380px;\n  width: 100%;\n  box-shadow: 0 8px 40px rgba(0, 0, 0, 0.18);\n}\n.modal__texto[_ngcontent-%COMP%] {\n  font-size: 0.92rem;\n  color: #333;\n  line-height: 1.5;\n  margin: 0 0 20px;\n}\n.modal__acoes[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 10px;\n  justify-content: flex-end;\n}\n\n.paginacao[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 6px;\n  justify-content: center;\n  flex-wrap: wrap;\n  margin-top: 8px;\n}\n.paginacao__btn[_ngcontent-%COMP%] {\n  min-width: 34px;\n  height: 34px;\n  padding: 0 10px;\n  border-radius: 7px;\n  border: 1px solid #dde2ea;\n  background: #ffffff;\n  color: #333;\n  font-size: 0.84rem;\n  font-weight: 500;\n  cursor: pointer;\n  transition: background 0.15s, border-color 0.15s, color 0.15s;\n}\n.paginacao__btn[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #f0f6ff;\n  border-color: #4f9cf9;\n  color: #4f9cf9;\n}\n.paginacao__btn.ativo[_ngcontent-%COMP%] {\n  background: #4f9cf9;\n  border-color: #4f9cf9;\n  color: #ffffff;\n}\n.paginacao__btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.4;\n  cursor: not-allowed;\n}\n.paginacao__btn[_ngcontent-%COMP%]:focus-visible {\n  outline: 2px solid #4f9cf9;\n  outline-offset: 2px;\n}\n\n.usuario-info[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n}\n\n.usuario-email[_ngcontent-%COMP%] {\n  font-size: 0.78rem;\n  color: #888;\n}\n\n.data-texto[_ngcontent-%COMP%] {\n  font-size: 0.85rem;\n  color: #555;\n}"]
    });
  }
  return ListaMatriculasComponent;
})();

/***/ })

}]);