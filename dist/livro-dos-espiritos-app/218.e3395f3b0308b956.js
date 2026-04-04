"use strict";
(self["webpackChunklivro_dos_espiritos_app"] = self["webpackChunklivro_dos_espiritos_app"] || []).push([[218],{

/***/ 1218:
/*!*****************************************************************!*\
  !*** ./src/app/area-aluno/player-aula/player-aula.component.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PlayerAulaComponent: () => (/* binding */ PlayerAulaComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 177);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 7901);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 8530);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 6977);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 5558);
/* harmony import */ var _services_progresso_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/progresso.service */ 4332);
/* harmony import */ var _services_cursos_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/cursos.service */ 3471);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7705);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser */ 345);













const _c0 = () => ["/area-aluno"];
function PlayerAulaComponent_li_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "li", 22)(1, "button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function PlayerAulaComponent_li_13_Template_button_click_1_listener() {
      const aula_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r1).$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r2.irParaAula(aula_r2));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "span", 25)(5, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "span", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const aula_r2 = ctx.$implicit;
    const i_r4 = ctx.index;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("ativo", aula_r2.id === ctx_r2.aulaAtual.id)("concluida", ctx_r2.aulaConcluida(aula_r2.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("aria-label", "Aula " + (i_r4 + 1) + ": " + aula_r2.titulo + (ctx_r2.aulaConcluida(aula_r2.id) ? " - conclu\u00EDda" : ""))("aria-current", aula_r2.id === ctx_r2.aulaAtual.id ? "true" : null);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r2.aulaConcluida(aula_r2.id) ? "\u2705" : aula_r2.id === ctx_r2.aulaAtual.id ? "\u25B6" : "\u25CB", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("Aula ", i_r4 + 1, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](aula_r2.titulo);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", aula_r2.duracaoMinutos, " min");
  }
}
function PlayerAulaComponent_div_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function PlayerAulaComponent_iframe_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "iframe", 31);
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate1"]("title", "Aula: ", ctx_r2.aulaAtual.titulo, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", ctx_r2.embedUrl, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeResourceUrl"]);
  }
}
// Valores padrão usados antes do ngOnInit carregar os dados reais.
// Evitam o uso de `!` (non-null assertion) e tornam `?.` desnecessário no template.
const CURSO_VAZIO = {
  id: '',
  titulo: '',
  descricao: '',
  categoria: '',
  imagemUrl: '',
  instrutor: '',
  totalAulas: 0,
  aulas: [],
  certificadoDisponivel: false
};
const AULA_VAZIA = {
  id: '',
  titulo: '',
  descricao: '',
  youtubeVideoId: '',
  duracaoMinutos: 0,
  ordem: 0
};
const PROGRESSO_VAZIO = {
  cursoId: '',
  aulasProgresso: [],
  percentualConcluido: 0,
  certificadoEmitido: false
};
let PlayerAulaComponent = /*#__PURE__*/(() => {
  class PlayerAulaComponent {
    route;
    router;
    sanitizer;
    progressoService;
    cursosService;
    destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__.Subject();
    // Propriedades inicializadas com valores padrão — nunca undefined
    curso = CURSO_VAZIO;
    aulaAtual = AULA_VAZIA;
    aulasOrdenadas = [];
    progresso = PROGRESSO_VAZIO;
    embedUrl = '';
    carregando = true;
    constructor(route, router, sanitizer, progressoService, cursosService) {
      this.route = route;
      this.router = router;
      this.sanitizer = sanitizer;
      this.progressoService = progressoService;
      this.cursosService = cursosService;
    }
    ngOnInit() {
      this.route.params.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.takeUntil)(this.destroy$), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.switchMap)(params => {
        this.carregando = true;
        const cursoId = params['cursoId'];
        const aulaId = params['aulaId'];
        return this.cursosService.obterCurso(cursoId).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.switchMap)(detalhe => {
          if (!detalhe) {
            this.router.navigate(['/area-aluno']);
            return [];
          }
          this.curso = this.cursosService.detalheParaCursoAluno(detalhe);
          this.aulasOrdenadas = [...this.curso.aulas].sort((a, b) => a.ordem - b.ordem);
          const aula = this.curso.aulas.find(a => a.id === aulaId) ?? this.aulasOrdenadas[0];
          this.definirAula(aula ?? AULA_VAZIA);
          return this.progressoService.obterProgresso(this.curso.id);
        }));
      })).subscribe(p => {
        if (p) this.progresso = p;
      });
    }
    ngOnDestroy() {
      this.destroy$.next();
      this.destroy$.complete();
    }
    // ── Navegação entre aulas ──────────────────────────────────────
    irParaAula(aula) {
      this.router.navigate(['/area-aluno/player', this.curso.id, aula.id]);
    }
    irParaProximaAula() {
      // Marca a aula atual como concluída ao avançar
      this.progressoService.marcarAulaConcluida(this.curso, this.aulaAtual.id);
      const proxima = this.aulasOrdenadas[this.indiceAtual + 1];
      if (proxima) {
        this.irParaAula(proxima);
      } else {
        this.router.navigate(['/area-aluno/certificado', this.curso.id]);
      }
    }
    irParaAnterior() {
      const anterior = this.aulasOrdenadas[this.indiceAtual - 1];
      if (anterior) this.irParaAula(anterior);
    }
    marcarConcluida() {
      this.progressoService.marcarAulaConcluida(this.curso, this.aulaAtual.id);
    }
    // ── Getters tipados (usados no template sem `?.`) ──────────────
    get indiceAtual() {
      return this.aulasOrdenadas.findIndex(a => a.id === this.aulaAtual.id);
    }
    get temProxima() {
      return this.indiceAtual < this.aulasOrdenadas.length - 1;
    }
    get temAnterior() {
      return this.indiceAtual > 0;
    }
    /** ID da aula atual garantido como string — elimina `?.id` no template */
    get aulaAtualId() {
      return this.aulaAtual.id;
    }
    aulaConcluida(aulaId) {
      return this.progresso.aulasProgresso.some(a => a.aulaId === aulaId && a.concluida);
    }
    // ── Privados ──────────────────────────────────────────────────
    definirAula(aula) {
      this.aulaAtual = aula;
      this.carregando = true;
      const baseUrl = 'https://www.youtube.com/embed/';
      this.embedUrl = this.sanitizer.bypassSecurityTrustResourceUrl(`${baseUrl}${aula.youtubeVideoId}?rel=0&modestbranding=1`);
      setTimeout(() => this.carregando = false, 400);
    }
    static ɵfac = function PlayerAulaComponent_Factory(t) {
      return new (t || PlayerAulaComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__.DomSanitizer), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_progresso_service__WEBPACK_IMPORTED_MODULE_0__.ProgressoService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_cursos_service__WEBPACK_IMPORTED_MODULE_1__.CursosService));
    };
    static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
      type: PlayerAulaComponent,
      selectors: [["app-player-aula"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵStandaloneFeature"]],
      decls: 31,
      vars: 19,
      consts: [[1, "player-layout"], ["aria-label", "Lista de aulas do curso", 1, "player-sidebar"], [1, "player-sidebar__cabecalho"], ["aria-label", "Voltar para o dashboard", 1, "player-sidebar__voltar", 3, "routerLink"], [1, "player-sidebar__titulo"], [1, "player-sidebar__progresso"], ["role", "progressbar", "aria-valuemin", "0", "aria-valuemax", "100", 1, "mini-barra"], [1, "mini-barra__fill"], ["role", "list", 1, "aulas-lista"], ["class", "aulas-lista__item", "role", "listitem", 3, "ativo", "concluida", 4, "ngFor", "ngForOf"], ["role", "main", 1, "player-main"], [1, "player-video-wrap"], ["class", "player-skeleton", "aria-label", "Carregando v\u00EDdeo...", "role", "status", 4, "ngIf"], ["class", "player-iframe", "allow", "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture", "allowfullscreen", "", "loading", "lazy", 3, "src", "title", 4, "ngIf"], [1, "player-info"], [1, "player-info__texto"], [1, "player-info__titulo"], [1, "player-info__desc"], [1, "player-info__controles"], ["aria-label", "Aula anterior", 1, "btn-nav", "btn-nav--anterior", 3, "click", "disabled"], [1, "btn-concluir", 3, "click", "disabled"], [1, "btn-nav", "btn-nav--proxima", 3, "click"], ["role", "listitem", 1, "aulas-lista__item"], [1, "aulas-lista__btn", 3, "click"], ["aria-hidden", "true", 1, "aulas-lista__icone"], [1, "aulas-lista__info"], [1, "aulas-lista__num"], [1, "aulas-lista__nome"], [1, "aulas-lista__dur"], ["aria-label", "Carregando v\u00EDdeo...", "role", "status", 1, "player-skeleton"], [1, "player-skeleton__spinner"], ["allow", "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture", "allowfullscreen", "", "loading", "lazy", 1, "player-iframe", 3, "src", "title"]],
      template: function PlayerAulaComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "aside", 1)(2, "div", 2)(3, "a", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, " \u2190 Dashboard ");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "h2", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 5)(8, "div", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](9, "div", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "ul", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](13, PlayerAulaComponent_li_13_Template, 11, 10, "li", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "main", 10)(15, "div", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](16, PlayerAulaComponent_div_16_Template, 2, 0, "div", 12)(17, PlayerAulaComponent_iframe_17_Template, 1, 3, "iframe", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "div", 14)(19, "div", 15)(20, "h1", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](21);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "p", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](23);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "div", 18)(25, "button", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function PlayerAulaComponent_Template_button_click_25_listener() {
            return ctx.irParaAnterior();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](26, " \u2190 Anterior ");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "button", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function PlayerAulaComponent_Template_button_click_27_listener() {
            return ctx.marcarConcluida();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](28);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "button", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function PlayerAulaComponent_Template_button_click_29_listener() {
            return ctx.irParaProximaAula();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](30);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](18, _c0));
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.curso.titulo);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("aria-valuenow", ctx.progresso.percentualConcluido)("aria-label", ctx.progresso.percentualConcluido + "% conclu\u00EDdo");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleProp"]("width", ctx.progresso.percentualConcluido, "%");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", ctx.progresso.percentualConcluido, "% conclu\u00EDdo");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.aulasOrdenadas);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.carregando);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.carregando && ctx.embedUrl);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.aulaAtual.titulo);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.aulaAtual.descricao);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", !ctx.temAnterior);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx.aulaConcluida(ctx.aulaAtualId));
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("aria-label", ctx.aulaConcluida(ctx.aulaAtualId) ? "Aula j\u00E1 marcada como conclu\u00EDda" : "Marcar aula como conclu\u00EDda");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx.aulaConcluida(ctx.aulaAtualId) ? "\u2705 Aula conclu\u00EDda" : "\u2714 Marcar como conclu\u00EDda", " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("aria-label", ctx.temProxima ? "Pr\u00F3xima aula" : "Finalizar curso");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx.temProxima ? "Pr\u00F3xima \u2192" : "\uD83C\uDF93 Finalizar Curso", " ");
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterLink],
      styles: ["[_nghost-%COMP%] {\n  display: block;\n}\n\n.player-layout[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 320px 1fr;\n  min-height: calc(100vh - 60px);\n}\n\n.player-sidebar[_ngcontent-%COMP%] {\n  background: #1a1a2e;\n  color: #e0e0e0;\n  display: flex;\n  flex-direction: column;\n  overflow-y: auto;\n}\n.player-sidebar__cabecalho[_ngcontent-%COMP%] {\n  padding: 1.25rem;\n  border-bottom: 1px solid rgba(255, 255, 255, 0.1);\n  position: sticky;\n  top: 0;\n  background: #1a1a2e;\n  z-index: 1;\n}\n.player-sidebar__voltar[_ngcontent-%COMP%] {\n  color: #7eb3f5;\n  text-decoration: none;\n  font-size: 0.85rem;\n  display: inline-block;\n  margin-bottom: 0.75rem;\n}\n.player-sidebar__voltar[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n.player-sidebar__voltar[_ngcontent-%COMP%]:focus-visible {\n  outline: 2px solid #7eb3f5;\n  border-radius: 3px;\n}\n.player-sidebar__titulo[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  color: #fff;\n  margin: 0 0 0.75rem;\n  line-height: 1.35;\n}\n.player-sidebar__progresso[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  color: #aaa;\n  display: flex;\n  flex-direction: column;\n  gap: 0.3rem;\n}\n\n.mini-barra[_ngcontent-%COMP%] {\n  height: 5px;\n  background: rgba(255, 255, 255, 0.15);\n  border-radius: 99px;\n  overflow: hidden;\n}\n.mini-barra__fill[_ngcontent-%COMP%] {\n  height: 100%;\n  background: #4a90d9;\n  border-radius: 99px;\n  transition: width 0.5s ease;\n}\n\n.aulas-lista[_ngcontent-%COMP%] {\n  list-style: none;\n  margin: 0;\n  padding: 0.5rem 0;\n}\n.aulas-lista__item[_ngcontent-%COMP%] {\n  border-left: 3px solid transparent;\n}\n.aulas-lista__item.ativo[_ngcontent-%COMP%] {\n  border-left-color: #4a90d9;\n  background: rgba(74, 144, 217, 0.1);\n}\n.aulas-lista__item.concluida[_ngcontent-%COMP%]   .aulas-lista__nome[_ngcontent-%COMP%] {\n  opacity: 0.65;\n}\n.aulas-lista__btn[_ngcontent-%COMP%] {\n  width: 100%;\n  background: none;\n  border: none;\n  color: #ddd;\n  text-align: left;\n  padding: 0.85rem 1.25rem;\n  cursor: pointer;\n  display: flex;\n  align-items: flex-start;\n  gap: 0.75rem;\n  transition: background 0.15s;\n}\n.aulas-lista__btn[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.06);\n}\n.aulas-lista__btn[_ngcontent-%COMP%]:focus-visible {\n  outline: 2px solid #4a90d9;\n  outline-offset: -2px;\n}\n.aulas-lista__icone[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  margin-top: 2px;\n  flex-shrink: 0;\n}\n.aulas-lista__info[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.1rem;\n}\n.aulas-lista__num[_ngcontent-%COMP%] {\n  font-size: 0.72rem;\n  color: #888;\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n}\n.aulas-lista__nome[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n  font-weight: 500;\n}\n.aulas-lista__dur[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  color: #888;\n}\n\n.player-main[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  background: #f4f6fb;\n}\n\n.player-video-wrap[_ngcontent-%COMP%] {\n  position: relative;\n  width: 100%;\n  padding-top: 56.25%;\n  background: #000;\n}\n\n.player-iframe[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  width: 100%;\n  height: 100%;\n  border: none;\n}\n\n.player-skeleton[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  background: #111;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.player-skeleton__spinner[_ngcontent-%COMP%] {\n  width: 48px;\n  height: 48px;\n  border: 4px solid rgba(255, 255, 255, 0.2);\n  border-top-color: #4a90d9;\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_spin 0.8s linear infinite;\n}\n\n.player-info[_ngcontent-%COMP%] {\n  padding: 1.5rem;\n  display: flex;\n  flex-direction: column;\n  gap: 1.25rem;\n}\n.player-info__titulo[_ngcontent-%COMP%] {\n  font-size: 1.3rem;\n  color: #1a1a2e;\n  margin: 0;\n}\n.player-info__desc[_ngcontent-%COMP%] {\n  color: #555;\n  margin: 0.4rem 0 0;\n  font-size: 0.95rem;\n}\n.player-info__controles[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.75rem;\n  align-items: center;\n  flex-wrap: wrap;\n}\n\n.btn-nav[_ngcontent-%COMP%], .btn-concluir[_ngcontent-%COMP%] {\n  padding: 0.65rem 1.3rem;\n  border-radius: 8px;\n  border: none;\n  font-size: 0.9rem;\n  font-weight: 600;\n  cursor: pointer;\n  transition: background 0.2s, opacity 0.2s;\n}\n.btn-nav[_ngcontent-%COMP%]:disabled, .btn-concluir[_ngcontent-%COMP%]:disabled {\n  opacity: 0.4;\n  cursor: not-allowed;\n}\n.btn-nav[_ngcontent-%COMP%]:focus-visible, .btn-concluir[_ngcontent-%COMP%]:focus-visible {\n  outline: 3px solid #2c5aa0;\n  outline-offset: 2px;\n}\n\n.btn-nav[_ngcontent-%COMP%] {\n  background: #e8edf5;\n  color: #2c5aa0;\n}\n.btn-nav[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #d0daea;\n}\n.btn-nav--proxima[_ngcontent-%COMP%] {\n  background: #2c5aa0;\n  color: #fff;\n}\n.btn-nav--proxima[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #1e3d6f;\n}\n\n.btn-concluir[_ngcontent-%COMP%] {\n  background: #e8f7ee;\n  color: #1e7e34;\n  flex: 1;\n}\n.btn-concluir[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #c8ecd6;\n}\n.btn-concluir[_ngcontent-%COMP%]:disabled {\n  background: #c8ecd6;\n  color: #1e7e34;\n}\n\n@keyframes _ngcontent-%COMP%_spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n@media (max-width: 768px) {\n  .player-layout[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    grid-template-rows: auto 1fr;\n  }\n  .player-sidebar[_ngcontent-%COMP%] {\n    max-height: 40vh;\n    overflow-y: auto;\n  }\n}"]
    });
  }
  return PlayerAulaComponent;
})();

/***/ })

}]);