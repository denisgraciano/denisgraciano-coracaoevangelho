"use strict";
(self["webpackChunklivro_dos_espiritos_app"] = self["webpackChunklivro_dos_espiritos_app"] || []).push([[850],{

/***/ 850:
/*!*****************************************************************!*\
  !*** ./src/app/area-aluno/certificado/certificado.component.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CertificadoComponent: () => (/* binding */ CertificadoComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 177);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 7901);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 8530);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 6977);
/* harmony import */ var _services_progresso_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/progresso.service */ 4332);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/auth.service */ 5722);
/* harmony import */ var _mocks_cursos_mock__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../mocks/cursos.mock */ 7011);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7705);












const _c0 = () => ["/area-aluno"];
function CertificadoComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 4)(1, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "\uD83C\uDF89 Parab\u00E9ns! Voc\u00EA concluiu o curso!");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "Clique abaixo para gerar seu certificado oficial.");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "button", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function CertificadoComponent_div_1_Template_button_click_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r1.emitirCertificado());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, " \uD83C\uDFC6 Emitir Certificado ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
}
function CertificadoComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 6)(1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Voc\u00EA ainda n\u00E3o concluiu todas as aulas para gerar o certificado.");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "a", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "\u2190 Voltar aos Cursos");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](1, _c0));
  }
}
function CertificadoComponent_div_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 8)(1, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 11)(4, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](5, "img", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "h1", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7, "Cora\u00E7\u00E3o do Evangelho");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "h2", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9, "Certificado de Conclus\u00E3o");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "p", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11, "Certificamos que");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "p", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "p", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](15, "concluiu com \u00EAxito o curso");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "p", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "p", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](20, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "p", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](23, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](24, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](25, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](26, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](27, "Coordena\u00E7\u00E3o \u2014 Cora\u00E7\u00E3o do Evangelho");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](28, "p", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](29);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](30, "div", 24)(31, "button", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function CertificadoComponent_div_3_Template_button_click_31_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r1.imprimir());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](32, " \uD83D\uDDA8\uFE0F Imprimir / Salvar PDF ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](33, "a", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](34, " \u2190 Meus Cursos ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r1.nomeAluno);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r1.certificado.cursoTitulo);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" Carga hor\u00E1ria: ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](20, 6, ctx_r1.certificado.cargaHoraria, "1.0-1"), " horas ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" Emitido em ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind4"](23, 9, ctx_r1.certificado.dataEmissao, "dd 'de' MMMM 'de' yyyy", "", "pt-BR"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("C\u00F3digo: ", ctx_r1.certificado.id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](14, _c0));
  }
}
let CertificadoComponent = /*#__PURE__*/(() => {
  class CertificadoComponent {
    route;
    router;
    progressoService;
    authService;
    destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__.Subject();
    curso;
    certificado = null;
    nomeAluno = '';
    podEmitir = false;
    constructor(route, router, progressoService, authService) {
      this.route = route;
      this.router = router;
      this.progressoService = progressoService;
      this.authService = authService;
    }
    ngOnInit() {
      this.authService.usuario$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.takeUntil)(this.destroy$)).subscribe(u => {
        this.nomeAluno = u?.nome ?? 'Aluno';
      });
      this.route.params.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.takeUntil)(this.destroy$)).subscribe(params => {
        const cursoId = params['cursoId'];
        const curso = _mocks_cursos_mock__WEBPACK_IMPORTED_MODULE_2__.CURSOS_MOCK.find(c => c.id === cursoId);
        if (!curso) {
          this.router.navigate(['/area-aluno']);
          return;
        }
        this.curso = curso;
        // Verifica se o certificado já foi emitido
        const todos = this.progressoService.listarCertificados();
        this.certificado = todos.find(c => c.cursoId === cursoId) ?? null;
        // Verifica se o curso está concluído mas o certificado ainda não foi emitido
        const progresso = this.progressoService.obterProgressoSnapshot(cursoId);
        this.podEmitir = progresso.percentualConcluido === 100 && !this.certificado;
      });
    }
    ngOnDestroy() {
      this.destroy$.next();
      this.destroy$.complete();
    }
    emitirCertificado() {
      this.certificado = this.progressoService.emitirCertificado(this.curso);
      this.podEmitir = false;
    }
    imprimir() {
      window.print();
    }
    static ɵfac = function CertificadoComponent_Factory(t) {
      return new (t || CertificadoComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_progresso_service__WEBPACK_IMPORTED_MODULE_0__.ProgressoService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_1__.AuthService));
    };
    static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
      type: CertificadoComponent,
      selectors: [["app-certificado"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵStandaloneFeature"]],
      decls: 4,
      vars: 3,
      consts: [[1, "cert-page"], ["class", "cert-page__emitir", 4, "ngIf"], ["class", "cert-page__incompleto", 4, "ngIf"], ["class", "certificado-wrapper", "id", "certificado-para-impressao", "role", "region", "aria-label", "Certificado de conclus\u00E3o", 4, "ngIf"], [1, "cert-page__emitir"], [1, "btn-emitir", 3, "click"], [1, "cert-page__incompleto"], [1, "btn-voltar", 3, "routerLink"], ["id", "certificado-para-impressao", "role", "region", "aria-label", "Certificado de conclus\u00E3o", 1, "certificado-wrapper"], [1, "certificado"], ["aria-hidden", "true", 1, "certificado__borda"], [1, "certificado__conteudo"], [1, "certificado__topo"], ["src", "assets/images/logo.png", "alt", "Logo Cora\u00E7\u00E3o do Evangelho", 1, "certificado__logo"], [1, "certificado__titulo-inst"], [1, "certificado__titulo-cert"], [1, "certificado__texto"], [1, "certificado__aluno"], [1, "certificado__curso"], [1, "certificado__carga"], [1, "certificado__data"], ["aria-hidden", "true", 1, "certificado__assinatura"], [1, "certificado__assinatura-linha"], [1, "certificado__id"], [1, "cert-page__acoes", "no-print"], ["aria-label", "Imprimir certificado", 1, "btn-imprimir", 3, "click"], ["aria-label", "Voltar ao dashboard", 1, "btn-voltar", 3, "routerLink"]],
      template: function CertificadoComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, CertificadoComponent_div_1_Template, 7, 0, "div", 1)(2, CertificadoComponent_div_2_Template, 5, 2, "div", 2)(3, CertificadoComponent_div_3_Template, 35, 15, "div", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.podEmitir && !ctx.certificado);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.podEmitir && !ctx.certificado);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.certificado);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_7__.DecimalPipe, _angular_common__WEBPACK_IMPORTED_MODULE_7__.DatePipe, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterLink],
      styles: ["[_nghost-%COMP%] {\n  display: block;\n}\n\n.cert-page[_ngcontent-%COMP%] {\n  max-width: 900px;\n  margin: 2rem auto;\n  padding: 0 1.5rem;\n}\n.cert-page__emitir[_ngcontent-%COMP%], .cert-page__incompleto[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 3rem 1rem;\n}\n.cert-page__emitir[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], .cert-page__incompleto[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  color: #1a1a2e;\n}\n.cert-page__emitir[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], .cert-page__incompleto[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #555;\n  margin-bottom: 1.5rem;\n}\n.cert-page__acoes[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 1rem;\n  justify-content: center;\n  margin-top: 1.5rem;\n  flex-wrap: wrap;\n}\n\n.certificado-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.certificado[_ngcontent-%COMP%] {\n  position: relative;\n  width: 100%;\n  max-width: 800px;\n  background: linear-gradient(165deg, #fffdf5 0%, #fff8e1 100%);\n  border-radius: 8px;\n  box-shadow: 0 8px 40px rgba(0, 0, 0, 0.15);\n  overflow: hidden;\n}\n.certificado__borda[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 12px;\n  border: 3px double #c8a020;\n  border-radius: 4px;\n  pointer-events: none;\n}\n.certificado__conteudo[_ngcontent-%COMP%] {\n  padding: 3rem 4rem;\n  text-align: center;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 0.75rem;\n}\n.certificado__topo[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 0.5rem;\n  margin-bottom: 0.5rem;\n}\n.certificado__logo[_ngcontent-%COMP%] {\n  height: 64px;\n  object-fit: contain;\n}\n.certificado__titulo-inst[_ngcontent-%COMP%] {\n  font-size: 1.1rem;\n  color: #2c5aa0;\n  letter-spacing: 0.1em;\n  text-transform: uppercase;\n  margin: 0;\n}\n.certificado__titulo-cert[_ngcontent-%COMP%] {\n  font-size: 1.6rem;\n  color: #1a1a2e;\n  border-bottom: 2px solid #c8a020;\n  padding-bottom: 0.5rem;\n  margin: 0.5rem 0;\n  font-family: Georgia, serif;\n}\n.certificado__texto[_ngcontent-%COMP%] {\n  color: #555;\n  font-size: 0.95rem;\n  margin: 0;\n}\n.certificado__aluno[_ngcontent-%COMP%] {\n  font-size: 2rem;\n  font-family: \"Brush Script MT\", cursive, Georgia, serif;\n  color: #1a1a2e;\n  margin: 0.25rem 0;\n}\n.certificado__curso[_ngcontent-%COMP%] {\n  font-size: 1.3rem;\n  font-weight: 700;\n  color: #2c5aa0;\n  margin: 0.25rem 0;\n}\n.certificado__carga[_ngcontent-%COMP%], .certificado__data[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n  color: #666;\n  margin: 0;\n}\n.certificado__assinatura[_ngcontent-%COMP%] {\n  margin-top: 1.5rem;\n  width: 200px;\n  text-align: center;\n  font-size: 0.8rem;\n  color: #555;\n}\n.certificado__assinatura-linha[_ngcontent-%COMP%] {\n  height: 1px;\n  background: #aaa;\n  margin-bottom: 0.4rem;\n}\n.certificado__id[_ngcontent-%COMP%] {\n  font-size: 0.7rem;\n  color: #bbb;\n  font-family: monospace;\n  margin-top: 0.5rem;\n}\n\n.btn-emitir[_ngcontent-%COMP%], .btn-imprimir[_ngcontent-%COMP%], .btn-voltar[_ngcontent-%COMP%] {\n  padding: 0.75rem 1.5rem;\n  border-radius: 8px;\n  border: none;\n  font-size: 0.95rem;\n  font-weight: 600;\n  cursor: pointer;\n  text-decoration: none;\n  display: inline-flex;\n  align-items: center;\n  gap: 0.5rem;\n  transition: background 0.2s;\n}\n.btn-emitir[_ngcontent-%COMP%]:focus-visible, .btn-imprimir[_ngcontent-%COMP%]:focus-visible, .btn-voltar[_ngcontent-%COMP%]:focus-visible {\n  outline: 3px solid #2c5aa0;\n  outline-offset: 2px;\n}\n\n.btn-emitir[_ngcontent-%COMP%] {\n  background: #f0a500;\n  color: #fff;\n}\n.btn-emitir[_ngcontent-%COMP%]:hover {\n  background: #c98700;\n}\n\n.btn-imprimir[_ngcontent-%COMP%] {\n  background: #2c5aa0;\n  color: #fff;\n}\n.btn-imprimir[_ngcontent-%COMP%]:hover {\n  background: #1e3d6f;\n}\n\n.btn-voltar[_ngcontent-%COMP%] {\n  background: #e8edf5;\n  color: #2c5aa0;\n}\n.btn-voltar[_ngcontent-%COMP%]:hover {\n  background: #d0daea;\n}\n\n@media print {\n  .no-print[_ngcontent-%COMP%] {\n    display: none !important;\n  }\n  .certificado-wrapper[_ngcontent-%COMP%] {\n    margin: 0;\n  }\n  .certificado[_ngcontent-%COMP%] {\n    box-shadow: none;\n    max-width: 100%;\n    border: 2px solid #c8a020;\n  }\n}"]
    });
  }
  return CertificadoComponent;
})();

/***/ }),

/***/ 7011:
/*!*************************************************!*\
  !*** ./src/app/area-aluno/mocks/cursos.mock.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CURSOS_MOCK: () => (/* binding */ CURSOS_MOCK)
/* harmony export */ });
const CURSOS_MOCK = [{
  id: 'espiritismo-basico',
  titulo: 'Fundamentos do Espiritismo',
  descricao: 'Entenda as bases da doutrina espírita com didática e profundidade.',
  categoria: 'Doutrina',
  imagemUrl: 'assets/images/curso-espiritismo.jpg',
  instrutor: 'Prof. Allan Kardec Jr.',
  totalAulas: 3,
  certificadoDisponivel: true,
  aulas: [{
    id: 'aula-01',
    titulo: 'O que é o Espiritismo?',
    descricao: 'Introdução à doutrina.',
    youtubeVideoId: 'dQw4w9WgXcQ',
    duracaoMinutos: 25,
    ordem: 1
  }, {
    id: 'aula-02',
    titulo: 'Os Três Aspectos',
    descricao: 'Ciência, filosofia e religião.',
    youtubeVideoId: 'dQw4w9WgXcQ',
    duracaoMinutos: 30,
    ordem: 2
  }, {
    id: 'aula-03',
    titulo: 'Moral Espírita',
    descricao: 'Amor, caridade e evolução.',
    youtubeVideoId: 'dQw4w9WgXcQ',
    duracaoMinutos: 28,
    ordem: 3
  }]
}, {
  id: 'evangelho-no-lar',
  titulo: 'O Evangelho no Lar',
  descricao: 'A prática do Evangelho como fonte de paz e harmonia familiar.',
  categoria: 'Prática Espírita',
  imagemUrl: 'assets/images/curso-evangelho.jpg',
  instrutor: 'Coord. Maria da Graça',
  totalAulas: 4,
  certificadoDisponivel: true,
  aulas: [{
    id: 'aula-01',
    titulo: 'A Família no Plano Espiritual',
    descricao: 'Vínculos além do plano físico.',
    youtubeVideoId: 'dQw4w9WgXcQ',
    duracaoMinutos: 22,
    ordem: 1
  }, {
    id: 'aula-02',
    titulo: 'Leitura e Comentário',
    descricao: 'Como conduzir uma sessão.',
    youtubeVideoId: 'dQw4w9WgXcQ',
    duracaoMinutos: 20,
    ordem: 2
  }, {
    id: 'aula-03',
    titulo: 'Prece e Vibração',
    descricao: 'O poder da oração.',
    youtubeVideoId: 'dQw4w9WgXcQ',
    duracaoMinutos: 18,
    ordem: 3
  }, {
    id: 'aula-04',
    titulo: 'Desdobramentos Práticos',
    descricao: 'Aplicando no cotidiano.',
    youtubeVideoId: 'dQw4w9WgXcQ',
    duracaoMinutos: 26,
    ordem: 4
  }]
}];

/***/ })

}]);