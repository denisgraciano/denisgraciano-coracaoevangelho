"use strict";
(self["webpackChunklivro_dos_espiritos_app"] = self["webpackChunklivro_dos_espiritos_app"] || []).push([[112],{

/***/ 3112:
/*!*******************************************************************!*\
  !*** ./src/app/area-admin/dashboard/admin-dashboard.component.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AdminDashboardComponent: () => (/* binding */ AdminDashboardComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 177);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 7901);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 8530);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 7468);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 7673);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 9437);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 6977);
/* harmony import */ var _services_admin_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/admin.service */ 1851);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7705);








function AdminDashboardComponent_div_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Carregando dados...");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
}
function AdminDashboardComponent_div_7_span_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "\u26A0\uFE0F");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function AdminDashboardComponent_div_7_span_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "\u26A0\uFE0F");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function AdminDashboardComponent_div_7_span_27_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "\u26A0\uFE0F");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function AdminDashboardComponent_div_7_span_36_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "\u26A0\uFE0F");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function AdminDashboardComponent_div_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 9)(1, "a", 10)(2, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "\uD83C\uDF93");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 12)(5, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Cursos");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, AdminDashboardComponent_div_7_span_9_Template, 2, 0, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "a", 16)(11, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "\uD83D\uDC65");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 12)(14, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "Alunos");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](18, AdminDashboardComponent_div_7_span_18_Template, 2, 0, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "a", 17)(20, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "\uD83D\uDCCB");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "div", 12)(23, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, "Matr\u00EDculas");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](27, AdminDashboardComponent_div_7_span_27_Template, 2, 0, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "a", 18)(29, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30, "\uD83D\uDE4F");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "div", 12)(32, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](35, "Pedidos n\u00E3o lidos");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](36, AdminDashboardComponent_div_7_span_36_Template, 2, 0, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("aria-label", ctx_r0.erros["cursos"] ? "Cursos indispon\u00EDvel" : ctx_r0.stats.totalCursos + " cursos cadastrados");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.erros["cursos"] ? "\u2014" : ctx_r0.stats.totalCursos);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.erros["cursos"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("aria-label", ctx_r0.erros["usuarios"] ? "Alunos indispon\u00EDvel" : ctx_r0.stats.totalAlunos + " alunos cadastrados");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.erros["usuarios"] ? "\u2014" : ctx_r0.stats.totalAlunos);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.erros["usuarios"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("aria-label", ctx_r0.erros["matriculas"] ? "Matr\u00EDculas indispon\u00EDvel" : ctx_r0.stats.totalMatriculas + " matr\u00EDculas realizadas");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.erros["matriculas"] ? "\u2014" : ctx_r0.stats.totalMatriculas);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.erros["matriculas"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("aria-label", ctx_r0.erros["pedidos"] ? "Pedidos indispon\u00EDvel" : ctx_r0.stats.totalPedidos + " pedidos n\u00E3o lidos");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.erros["pedidos"] ? "\u2014" : ctx_r0.stats.totalPedidos);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.erros["pedidos"]);
  }
}
function AdminDashboardComponent_div_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 20)(1, "h2", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "A\u00E7\u00F5es r\u00E1pidas");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 22)(4, "a", 23)(5, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "\u2795");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Novo Curso");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "a", 25)(10, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "\uD83D\uDCCB");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "Ver Matr\u00EDculas");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "a", 26)(15, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "\uD83D\uDE4F");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "Ver Pedidos");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "a", 27)(20, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "\uD83D\uDC65");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "Gerenciar Usu\u00E1rios");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
  }
}
let AdminDashboardComponent = /*#__PURE__*/(() => {
  class AdminDashboardComponent {
    adminService;
    destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__.Subject();
    carregando = true;
    // Controle granular: cada card tem seu próprio estado de erro.
    // Assim o dashboard nunca fica em branco por conta de um endpoint ausente.
    erros = {};
    stats = {
      totalCursos: 0,
      totalAlunos: 0,
      totalMatriculas: 0,
      totalPedidos: 0
    };
    constructor(adminService) {
      this.adminService = adminService;
    }
    ngOnInit() {
      // catchError POR STREAM: se um endpoint falhar (404, 500 ou ainda não
      // implementado no backend), os demais continuam normalmente e o forkJoin
      // completa. Isso evita o cancelamento em cascata que causava o
      // "The operation was canceled." no .NET middleware de exceções.
      (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.forkJoin)({
        cursos: this.adminService.getCursos().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.catchError)(() => {
          this.erros['cursos'] = true;
          return (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.of)([]);
        })),
        usuarios: this.adminService.getUsuarios(1, 1).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.catchError)(() => {
          this.erros['usuarios'] = true;
          return (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.of)(null);
        })),
        matriculas: this.adminService.getMatriculas(1, 1).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.catchError)(() => {
          this.erros['matriculas'] = true;
          return (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.of)(null);
        })),
        // Conta apenas pedidos NÃO lidos — requer ?lido=false no backend
        pedidosNaoLidos: this.adminService.getPedidosNaoLidos().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.catchError)(() => {
          this.erros['pedidos'] = true;
          return (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.of)(null);
        }))
      }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.takeUntil)(this.destroy$)).subscribe({
        next: ({
          cursos,
          usuarios,
          matriculas,
          pedidosNaoLidos
        }) => {
          this.stats = {
            totalCursos: Array.isArray(cursos) ? cursos.length : 0,
            totalAlunos: usuarios?.totalItens ?? 0,
            totalMatriculas: matriculas?.totalItens ?? 0,
            totalPedidos: pedidosNaoLidos ?? 0
          };
          this.carregando = false;
        },
        error: () => {
          this.carregando = false;
        }
      });
    }
    ngOnDestroy() {
      this.destroy$.next();
      this.destroy$.complete();
    }
    static ɵfac = function AdminDashboardComponent_Factory(t) {
      return new (t || AdminDashboardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_admin_service__WEBPACK_IMPORTED_MODULE_0__.AdminService));
    };
    static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: AdminDashboardComponent,
      selectors: [["app-admin-dashboard"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵStandaloneFeature"]],
      decls: 9,
      vars: 3,
      consts: [[1, "admin-dashboard"], [1, "admin-page-header"], [1, "admin-page-titulo"], [1, "admin-page-subtitulo"], ["class", "admin-loading", "role", "status", "aria-label", "Carregando dados", 4, "ngIf"], ["class", "dashboard-stats", "role", "region", "aria-label", "Estat\u00EDsticas gerais", 4, "ngIf"], ["class", "dashboard-acoes", "role", "region", "aria-label", "A\u00E7\u00F5es r\u00E1pidas", 4, "ngIf"], ["role", "status", "aria-label", "Carregando dados", 1, "admin-loading"], [1, "admin-loading__spinner"], ["role", "region", "aria-label", "Estat\u00EDsticas gerais", 1, "dashboard-stats"], ["routerLink", "/admin/cursos", 1, "stat-card", "stat-card--azul"], ["aria-hidden", "true", 1, "stat-card__icone"], [1, "stat-card__info"], [1, "stat-card__valor"], [1, "stat-card__label"], ["class", "stat-card__aviso", "aria-label", "Endpoint n\u00E3o dispon\u00EDvel", 4, "ngIf"], ["routerLink", "/admin/usuarios", 1, "stat-card", "stat-card--verde"], ["routerLink", "/admin/matriculas", 1, "stat-card", "stat-card--laranja"], ["routerLink", "/admin/pedidos", 1, "stat-card", "stat-card--roxo"], ["aria-label", "Endpoint n\u00E3o dispon\u00EDvel", 1, "stat-card__aviso"], ["role", "region", "aria-label", "A\u00E7\u00F5es r\u00E1pidas", 1, "dashboard-acoes"], [1, "dashboard-acoes__titulo"], [1, "dashboard-acoes__grid"], ["routerLink", "/admin/cursos/novo", "aria-label", "Criar novo curso", 1, "acao-card"], ["aria-hidden", "true"], ["routerLink", "/admin/matriculas", "aria-label", "Ver todas as matr\u00EDculas", 1, "acao-card"], ["routerLink", "/admin/pedidos", "aria-label", "Ver pedidos de vibra\u00E7\u00E3o", 1, "acao-card"], ["routerLink", "/admin/usuarios", "aria-label", "Gerenciar usu\u00E1rios", 1, "acao-card"]],
      template: function AdminDashboardComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "h1", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Dashboard");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "p", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Vis\u00E3o geral da plataforma");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, AdminDashboardComponent_div_6_Template, 4, 0, "div", 4)(7, AdminDashboardComponent_div_7_Template, 37, 12, "div", 5)(8, AdminDashboardComponent_div_8_Template, 24, 0, "div", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.carregando);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.carregando);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.carregando);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterLink],
      styles: [".admin-dashboard[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 28px;\n}\n\n.admin-page-header[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\n\n.admin-page-titulo[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  font-weight: 700;\n  color: #1a1f2e;\n  margin: 0;\n}\n\n.admin-page-subtitulo[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n  color: #666;\n  margin: 0;\n}\n\n.admin-loading[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 12px;\n  padding: 48px;\n  color: #666;\n}\n.admin-loading__spinner[_ngcontent-%COMP%] {\n  width: 36px;\n  height: 36px;\n  border: 3px solid #e2e8f0;\n  border-top-color: #4f9cf9;\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_spin 0.8s linear infinite;\n}\n\n@keyframes _ngcontent-%COMP%_spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n.admin-alert[_ngcontent-%COMP%] {\n  padding: 14px 18px;\n  border-radius: 8px;\n  font-size: 0.9rem;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.admin-alert--erro[_ngcontent-%COMP%] {\n  background: rgba(239, 68, 68, 0.08);\n  color: #eb1515;\n  border: 1px solid rgba(239, 68, 68, 0.2);\n}\n\n.dashboard-stats[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));\n  gap: 16px;\n}\n\n.stat-card[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 16px;\n  padding: 20px;\n  background: #ffffff;\n  border-radius: 12px;\n  box-shadow: 0 1px 6px rgba(0, 0, 0, 0.06);\n  text-decoration: none;\n  transition: transform 0.2s, box-shadow 0.2s;\n  border-left: 4px solid transparent;\n}\n.stat-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);\n}\n.stat-card[_ngcontent-%COMP%]:focus-visible {\n  outline: 2px solid #4f9cf9;\n  outline-offset: 2px;\n}\n.stat-card--azul[_ngcontent-%COMP%] {\n  border-left-color: #4f9cf9;\n}\n.stat-card--azul[_ngcontent-%COMP%]   .stat-card__icone[_ngcontent-%COMP%] {\n  background: rgba(79, 156, 249, 0.12);\n}\n.stat-card--verde[_ngcontent-%COMP%] {\n  border-left-color: #22c55e;\n}\n.stat-card--verde[_ngcontent-%COMP%]   .stat-card__icone[_ngcontent-%COMP%] {\n  background: rgba(34, 197, 94, 0.12);\n}\n.stat-card--laranja[_ngcontent-%COMP%] {\n  border-left-color: #f59e0b;\n}\n.stat-card--laranja[_ngcontent-%COMP%]   .stat-card__icone[_ngcontent-%COMP%] {\n  background: rgba(245, 158, 11, 0.12);\n}\n.stat-card--roxo[_ngcontent-%COMP%] {\n  border-left-color: #a78bfa;\n}\n.stat-card--roxo[_ngcontent-%COMP%]   .stat-card__icone[_ngcontent-%COMP%] {\n  background: rgba(167, 139, 250, 0.12);\n}\n.stat-card__icone[_ngcontent-%COMP%] {\n  width: 48px;\n  height: 48px;\n  border-radius: 10px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 1.4rem;\n  flex-shrink: 0;\n}\n.stat-card__info[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n}\n.stat-card__valor[_ngcontent-%COMP%] {\n  font-size: 1.7rem;\n  font-weight: 700;\n  color: #1a1f2e;\n  line-height: 1;\n}\n.stat-card__label[_ngcontent-%COMP%] {\n  font-size: 0.82rem;\n  color: #666;\n  font-weight: 500;\n}\n\n.dashboard-acoes__titulo[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  font-weight: 600;\n  color: #1a1f2e;\n  margin: 0 0 14px;\n}\n.dashboard-acoes__grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));\n  gap: 12px;\n}\n\n.acao-card[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 8px;\n  padding: 20px 16px;\n  background: #ffffff;\n  border-radius: 10px;\n  border: 1px solid #e8ecf0;\n  text-decoration: none;\n  color: #333;\n  font-size: 0.85rem;\n  font-weight: 500;\n  text-align: center;\n  transition: background 0.2s, border-color 0.2s, transform 0.2s;\n}\n.acao-card[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:first-child {\n  font-size: 1.6rem;\n}\n.acao-card[_ngcontent-%COMP%]:hover {\n  background: #f0f6ff;\n  border-color: #4f9cf9;\n  transform: translateY(-1px);\n}\n.acao-card[_ngcontent-%COMP%]:focus-visible {\n  outline: 2px solid #4f9cf9;\n  outline-offset: 2px;\n}\n\n@media (max-width: 600px) {\n  .dashboard-stats[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr 1fr;\n  }\n}"]
    });
  }
  return AdminDashboardComponent;
})();

/***/ })

}]);