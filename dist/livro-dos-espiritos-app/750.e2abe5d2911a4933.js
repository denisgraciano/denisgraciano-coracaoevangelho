"use strict";
(self["webpackChunklivro_dos_espiritos_app"] = self["webpackChunklivro_dos_espiritos_app"] || []).push([[750],{

/***/ 6750:
/*!*************************************************************!*\
  !*** ./src/app/area-aluno/dashboard/dashboard.component.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DashboardComponent: () => (/* binding */ DashboardComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 177);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 7901);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 8530);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 6977);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/auth.service */ 5722);
/* harmony import */ var _services_progresso_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/progresso.service */ 4332);
/* harmony import */ var _services_cursos_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/cursos.service */ 3471);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7705);













const _c0 = () => ["/area-aluno/perfil"];
const _c1 = a0 => ["/area-aluno/certificado", a0];
function DashboardComponent_section_21_article_2_button_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "button", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function DashboardComponent_section_21_article_2_button_17_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r4);
      const curso_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r2.irParaCertificado(curso_r2.id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " \uD83C\uDF93 Certificado ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const curso_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵattribute"]("aria-label", "Ver certificado de " + curso_r2.titulo);
  }
}
function DashboardComponent_section_21_article_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "article", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "img", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 19)(3, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "h2", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "p", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "div", 23)(10, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](11, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "div", 27)(15, "button", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function DashboardComponent_section_21_article_2_Template_button_click_15_listener() {
      const curso_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r1).$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r2.irParaCurso(curso_r2.id, ctx_r2.proximaAula(curso_r2)));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](17, DashboardComponent_section_21_article_2_button_17_Template, 2, 1, "button", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const curso_r2 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵattribute"]("aria-label", "Curso: " + curso_r2.titulo);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("src", curso_r2.imagemUrl, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"])("alt", curso_r2.titulo);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](curso_r2.categoria);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](curso_r2.titulo);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("Por ", curso_r2.instrutor, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵattribute"]("aria-valuenow", ctx_r2.obterProgresso(curso_r2.id).percentualConcluido);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵstyleProp"]("width", ctx_r2.obterProgresso(curso_r2.id).percentualConcluido, "%");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r2.obterProgresso(curso_r2.id).percentualConcluido, "% conclu\u00EDdo ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵattribute"]("aria-label", "Continuar curso " + curso_r2.titulo);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r2.obterProgresso(curso_r2.id).percentualConcluido === 0 ? "\u25B6 Come\u00E7ar" : "\u25B6 Continuar", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r2.obterProgresso(curso_r2.id).percentualConcluido === 100);
  }
}
function DashboardComponent_section_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "section", 14)(1, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, DashboardComponent_section_21_article_2_Template, 18, 13, "article", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r2.cursosMatriculados);
  }
}
function DashboardComponent_section_22_p_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "p", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Voc\u00EA ainda n\u00E3o possui certificados. Conclua um curso para emitir o seu! \uD83C\uDF93 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function DashboardComponent_section_22_article_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "article", 36)(1, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "\uD83C\uDFC6");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](7, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](10, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "button", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12, " Visualizar ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const cert_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵattribute"]("aria-label", "Certificado de " + cert_r5.cursoTitulo);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](cert_r5.cursoTitulo);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("Emitido em ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](7, 6, cert_r5.dataEmissao, "dd/MM/yyyy"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("Carga hor\u00E1ria: ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](10, 9, cert_r5.cargaHoraria, "1.0-1"), "h");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](12, _c1, cert_r5.cursoId));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵattribute"]("aria-label", "Visualizar certificado de " + cert_r5.cursoTitulo);
  }
}
function DashboardComponent_section_22_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "section", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, DashboardComponent_section_22_p_1_Template, 2, 0, "p", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, DashboardComponent_section_22_article_3_Template, 13, 14, "article", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r2.certificados.length === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r2.certificados);
  }
}
function DashboardComponent_section_23_article_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "article", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "img", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 19)(3, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "h2", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "button", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function DashboardComponent_section_23_article_4_Template_button_click_9_listener() {
      const curso_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r6).$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r2.irParaCurso(curso_r7.id, ctx_r2.proximaAula(curso_r7)));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10, " \u25B6 Iniciar Curso ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const curso_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵattribute"]("aria-label", "Sugest\u00E3o: " + curso_r7.titulo);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("src", curso_r7.imagemUrl, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"])("alt", curso_r7.titulo);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](curso_r7.categoria);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](curso_r7.titulo);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](curso_r7.descricao);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵattribute"]("aria-label", "Iniciar curso " + curso_r7.titulo);
  }
}
function DashboardComponent_section_23_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "section", 39)(1, "p", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, " Baseado no seu perfil, separamos esses cursos especialmente para voc\u00EA: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](4, DashboardComponent_section_23_article_4_Template, 11, 7, "article", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r2.sugestoes);
  }
}
let DashboardComponent = /*#__PURE__*/(() => {
  class DashboardComponent {
    authService;
    progressoService;
    cursosService;
    router;
    destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__.Subject();
    usuario = null;
    cursosMatriculados = [];
    progressos = new Map();
    sugestoes = [];
    certificados = [];
    abaSelecionada = 'cursos';
    constructor(authService, progressoService, cursosService, router) {
      this.authService = authService;
      this.progressoService = progressoService;
      this.cursosService = cursosService;
      this.router = router;
    }
    ngOnInit() {
      this.authService.usuario$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.takeUntil)(this.destroy$)).subscribe(u => this.usuario = u);
      this.cursosService.listarMeusCursos().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.takeUntil)(this.destroy$)).subscribe(cursos => {
        this.cursosMatriculados = cursos;
        cursos.forEach(curso => {
          this.progressoService.obterProgresso(curso.id).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.takeUntil)(this.destroy$)).subscribe(p => this.progressos.set(curso.id, p));
        });
        this.sugestoes = cursos.filter(c => {
          const p = this.progressoService.obterProgressoSnapshot(c.id);
          return p.percentualConcluido === 0;
        }).slice(0, 3);
      });
      this.certificados = this.progressoService.listarCertificados();
    }
    ngOnDestroy() {
      this.destroy$.next();
      this.destroy$.complete();
    }
    obterProgresso(cursoId) {
      return this.progressos.get(cursoId) ?? {
        cursoId,
        aulasProgresso: [],
        percentualConcluido: 0,
        certificadoEmitido: false
      };
    }
    irParaCurso(cursoId, primeiraAulaId) {
      this.router.navigate(['/area-aluno/player', cursoId, primeiraAulaId]);
    }
    irParaCertificado(cursoId) {
      this.router.navigate(['/area-aluno/certificado', cursoId]);
    }
    selecionarAba(aba) {
      this.abaSelecionada = aba;
    }
    logout() {
      this.authService.logout();
    }
    // Retorna a primeira aula não concluída, ou a primeira do curso
    proximaAula(curso) {
      const progresso = this.obterProgresso(curso.id);
      const idsConcluidosSet = new Set(progresso.aulasProgresso.filter(a => a.concluida).map(a => a.aulaId));
      const proxima = curso.aulas.sort((a, b) => a.ordem - b.ordem).find(a => !idsConcluidosSet.has(a.id));
      return proxima?.id ?? curso.aulas[0]?.id;
    }
    static ɵfac = function DashboardComponent_Factory(t) {
      return new (t || DashboardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_progresso_service__WEBPACK_IMPORTED_MODULE_1__.ProgressoService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_cursos_service__WEBPACK_IMPORTED_MODULE_2__.CursosService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.Router));
    };
    static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
      type: DashboardComponent,
      selectors: [["app-dashboard"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵStandaloneFeature"]],
      decls: 24,
      vars: 17,
      consts: [["role", "main", 1, "dashboard"], ["role", "banner", 1, "dashboard__header"], [1, "dashboard__header-inner"], [1, "dashboard__boas-vindas"], ["aria-hidden", "true", 1, "dashboard__avatar", 3, "src", "alt"], [1, "dashboard__titulo"], [1, "dashboard__subtitulo"], ["aria-label", "Editar meu perfil", 1, "btn-perfil", 3, "routerLink"], ["aria-label", "Sair da conta", 1, "btn-logout", 3, "click"], ["role", "tablist", "aria-label", "Se\u00E7\u00F5es da \u00E1rea do aluno", 1, "dashboard__abas"], ["role", "tab", 3, "click"], ["role", "tabpanel", "aria-label", "Meus cursos", "class", "dashboard__painel", 4, "ngIf"], ["role", "tabpanel", "aria-label", "Meus certificados", "class", "dashboard__painel", 4, "ngIf"], ["role", "tabpanel", "aria-label", "Sugest\u00F5es de cursos", "class", "dashboard__painel", 4, "ngIf"], ["role", "tabpanel", "aria-label", "Meus cursos", 1, "dashboard__painel"], [1, "cursos-grid"], ["class", "curso-card", 4, "ngFor", "ngForOf"], [1, "curso-card"], [1, "curso-card__imagem", 3, "src", "alt"], [1, "curso-card__corpo"], [1, "curso-card__categoria"], [1, "curso-card__titulo"], [1, "curso-card__instrutor"], ["aria-label", "Progresso do curso", 1, "progresso"], ["role", "progressbar", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progresso__barra-fundo"], [1, "progresso__barra-fill"], [1, "progresso__texto"], [1, "curso-card__acoes"], [1, "btn-continuar", 3, "click"], ["class", "btn-certificado", 3, "click", 4, "ngIf"], [1, "btn-certificado", 3, "click"], ["role", "tabpanel", "aria-label", "Meus certificados", 1, "dashboard__painel"], ["class", "dashboard__vazio", 4, "ngIf"], [1, "certificados-grid"], ["class", "cert-card", 4, "ngFor", "ngForOf"], [1, "dashboard__vazio"], [1, "cert-card"], ["aria-hidden", "true", 1, "cert-card__icone"], [1, "btn-ver-cert", 3, "routerLink"], ["role", "tabpanel", "aria-label", "Sugest\u00F5es de cursos", 1, "dashboard__painel"], [1, "dashboard__sugestao-texto"], ["class", "curso-card curso-card--sugestao", 4, "ngFor", "ngForOf"], [1, "curso-card", "curso-card--sugestao"]],
      template: function DashboardComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0)(1, "header", 1)(2, "div", 2)(3, "div", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](4, "img", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div")(6, "h1", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "p", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9, "Continue sua jornada espiritual");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "a", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11, " \u270F\uFE0F Meu Perfil ");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "button", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function DashboardComponent_Template_button_click_12_listener() {
            return ctx.logout();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](13, " Sair ");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "nav", 9)(15, "button", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function DashboardComponent_Template_button_click_15_listener() {
            return ctx.selecionarAba("cursos");
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](16, " Meus Cursos ");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "button", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function DashboardComponent_Template_button_click_17_listener() {
            return ctx.selecionarAba("certificados");
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](18, " Certificados ");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "button", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function DashboardComponent_Template_button_click_19_listener() {
            return ctx.selecionarAba("sugestoes");
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](20, " Sugest\u00F5es para voc\u00EA ");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](21, DashboardComponent_section_21_Template, 3, 1, "section", 11)(22, DashboardComponent_section_22_Template, 4, 2, "section", 12)(23, DashboardComponent_section_23_Template, 5, 1, "section", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("src", (ctx.usuario == null ? null : ctx.usuario.avatarUrl) || "assets/images/avatar-default.png", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"])("alt", "Avatar de " + (ctx.usuario == null ? null : ctx.usuario.nome));
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("Ol\u00E1, ", ctx.usuario == null ? null : ctx.usuario.nome, " \uD83D\uDC4B");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](16, _c0));
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("ativo", ctx.abaSelecionada === "cursos");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵattribute"]("aria-selected", ctx.abaSelecionada === "cursos");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("ativo", ctx.abaSelecionada === "certificados");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵattribute"]("aria-selected", ctx.abaSelecionada === "certificados");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("ativo", ctx.abaSelecionada === "sugestoes");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵattribute"]("aria-selected", ctx.abaSelecionada === "sugestoes");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.abaSelecionada === "cursos");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.abaSelecionada === "certificados");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.abaSelecionada === "sugestoes");
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_7__.DecimalPipe, _angular_common__WEBPACK_IMPORTED_MODULE_7__.DatePipe, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterLink],
      styles: ["[_nghost-%COMP%] {\n  display: block;\n}\n\n.dashboard[_ngcontent-%COMP%] {\n  max-width: 1200px;\n  margin: 0 auto;\n  padding: 0 1.5rem 3rem;\n}\n.dashboard__header[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, #2c5aa0 0%, #1e3d6f 100%);\n  color: #fff;\n  border-radius: 0 0 1rem 1rem;\n  margin: 0 -1.5rem 2rem;\n  padding: 2rem 1.5rem;\n}\n.dashboard__header-inner[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 1rem;\n  flex-wrap: wrap;\n}\n.dashboard__boas-vindas[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n}\n.dashboard__avatar[_ngcontent-%COMP%] {\n  width: 56px;\n  height: 56px;\n  border-radius: 50%;\n  border: 3px solid rgba(255, 255, 255, 0.6);\n  object-fit: cover;\n}\n.dashboard__titulo[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  margin: 0;\n}\n.dashboard__subtitulo[_ngcontent-%COMP%] {\n  margin: 0.25rem 0 0;\n  opacity: 0.85;\n  font-size: 0.95rem;\n}\n.dashboard__abas[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.5rem;\n  border-bottom: 2px solid #e0e0e0;\n  margin-bottom: 2rem;\n  overflow-x: auto;\n  scrollbar-width: none;\n}\n.dashboard__abas[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  padding: 0.75rem 1.25rem;\n  font-size: 1rem;\n  color: #555;\n  cursor: pointer;\n  border-bottom: 3px solid transparent;\n  margin-bottom: -2px;\n  white-space: nowrap;\n  transition: color 0.2s, border-color 0.2s;\n  border-radius: 4px 4px 0 0;\n}\n.dashboard__abas[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  color: #2c5aa0;\n}\n.dashboard__abas[_ngcontent-%COMP%]   button.ativo[_ngcontent-%COMP%] {\n  color: #2c5aa0;\n  border-bottom-color: #2c5aa0;\n  font-weight: 600;\n}\n.dashboard__abas[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:focus-visible {\n  outline: 3px solid #2c5aa0;\n  outline-offset: 2px;\n}\n.dashboard__painel[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_fadeIn 0.2s ease;\n}\n.dashboard__vazio[_ngcontent-%COMP%] {\n  text-align: center;\n  color: #666;\n  padding: 3rem 1rem;\n  font-size: 1.1rem;\n}\n.dashboard__sugestao-texto[_ngcontent-%COMP%] {\n  color: #555;\n  margin-bottom: 1.5rem;\n}\n\n.cursos-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));\n  gap: 1.5rem;\n}\n\n.curso-card[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: 12px;\n  box-shadow: 0 3px 12px rgba(0, 0, 0, 0.08);\n  overflow: hidden;\n  display: flex;\n  flex-direction: column;\n  transition: transform 0.2s, box-shadow 0.2s;\n}\n.curso-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-3px);\n  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.12);\n}\n.curso-card--sugestao[_ngcontent-%COMP%] {\n  border-top: 4px solid #f0a500;\n}\n.curso-card__imagem[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 160px;\n  object-fit: cover;\n}\n.curso-card__corpo[_ngcontent-%COMP%] {\n  padding: 1.25rem;\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n  flex: 1;\n}\n.curso-card__categoria[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n  color: #2c5aa0;\n}\n.curso-card__titulo[_ngcontent-%COMP%] {\n  font-size: 1.05rem;\n  margin: 0;\n  color: #1a1a2e;\n}\n.curso-card__instrutor[_ngcontent-%COMP%] {\n  font-size: 0.85rem;\n  color: #777;\n  margin: 0;\n}\n.curso-card__acoes[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.75rem;\n  margin-top: 0.75rem;\n  flex-wrap: wrap;\n}\n\n.progresso__barra-fundo[_ngcontent-%COMP%] {\n  height: 8px;\n  background: #e8edf5;\n  border-radius: 99px;\n  overflow: hidden;\n}\n.progresso__barra-fill[_ngcontent-%COMP%] {\n  height: 100%;\n  background: linear-gradient(90deg, #2c5aa0, #4a90d9);\n  border-radius: 99px;\n  transition: width 0.5s ease;\n}\n.progresso__texto[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  color: #555;\n  margin-top: 0.25rem;\n  display: block;\n}\n\n.btn-continuar[_ngcontent-%COMP%], .btn-certificado[_ngcontent-%COMP%], .btn-ver-cert[_ngcontent-%COMP%], .btn-logout[_ngcontent-%COMP%] {\n  padding: 0.6rem 1.2rem;\n  border-radius: 8px;\n  border: none;\n  font-size: 0.9rem;\n  font-weight: 600;\n  cursor: pointer;\n  transition: background 0.2s, transform 0.1s;\n}\n.btn-continuar[_ngcontent-%COMP%]:focus-visible, .btn-certificado[_ngcontent-%COMP%]:focus-visible, .btn-ver-cert[_ngcontent-%COMP%]:focus-visible, .btn-logout[_ngcontent-%COMP%]:focus-visible {\n  outline: 3px solid #2c5aa0;\n  outline-offset: 2px;\n}\n.btn-continuar[_ngcontent-%COMP%]:active, .btn-certificado[_ngcontent-%COMP%]:active, .btn-ver-cert[_ngcontent-%COMP%]:active, .btn-logout[_ngcontent-%COMP%]:active {\n  transform: scale(0.97);\n}\n\n.btn-continuar[_ngcontent-%COMP%] {\n  background: #2c5aa0;\n  color: #fff;\n  flex: 1;\n}\n.btn-continuar[_ngcontent-%COMP%]:hover {\n  background: #1e3d6f;\n}\n\n.btn-certificado[_ngcontent-%COMP%], .btn-ver-cert[_ngcontent-%COMP%] {\n  background: #f0a500;\n  color: #fff;\n}\n.btn-certificado[_ngcontent-%COMP%]:hover, .btn-ver-cert[_ngcontent-%COMP%]:hover {\n  background: #c98700;\n}\n\n.btn-logout[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.2);\n  color: #fff;\n  border: 1px solid rgba(255, 255, 255, 0.5);\n}\n.btn-logout[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.35);\n}\n\n.btn-perfil[_ngcontent-%COMP%] {\n  padding: 0.6rem 1.2rem;\n  border-radius: 8px;\n  background: rgba(255, 255, 255, 0.2);\n  color: #fff;\n  border: 1px solid rgba(255, 255, 255, 0.5);\n  font-size: 0.9rem;\n  font-weight: 600;\n  text-decoration: none;\n  transition: background 0.2s;\n}\n.btn-perfil[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.35);\n}\n.btn-perfil[_ngcontent-%COMP%]:focus-visible {\n  outline: 3px solid rgba(255, 255, 255, 0.8);\n  outline-offset: 2px;\n}\n\n.certificados-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));\n  gap: 1.5rem;\n}\n\n.cert-card[_ngcontent-%COMP%] {\n  background: linear-gradient(145deg, #fffdf5, #fff8e1);\n  border: 1px solid #e8d5a0;\n  border-radius: 12px;\n  padding: 1.5rem;\n  text-align: center;\n  box-shadow: 0 3px 12px rgba(240, 165, 0, 0.12);\n}\n.cert-card__icone[_ngcontent-%COMP%] {\n  font-size: 3rem;\n  margin-bottom: 0.75rem;\n}\n.cert-card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  color: #1a1a2e;\n  font-size: 1rem;\n  margin-bottom: 0.5rem;\n}\n.cert-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #666;\n  font-size: 0.85rem;\n  margin: 0.2rem 0;\n}\n\n@keyframes _ngcontent-%COMP%_fadeIn {\n  from {\n    opacity: 0;\n    transform: translateY(6px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n@media (max-width: 600px) {\n  .dashboard__abas[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    padding: 0.6rem 0.85rem;\n    font-size: 0.9rem;\n  }\n  .cursos-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}"]
    });
  }
  return DashboardComponent;
})();

/***/ })

}]);