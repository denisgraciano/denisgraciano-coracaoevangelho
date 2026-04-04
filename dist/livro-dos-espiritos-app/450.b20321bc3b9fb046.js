"use strict";
(self["webpackChunklivro_dos_espiritos_app"] = self["webpackChunklivro_dos_espiritos_app"] || []).push([[450],{

/***/ 450:
/*!**********************************************************************!*\
  !*** ./src/app/area-admin/cursos/form-curso/form-curso.component.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FormCursoComponent: () => (/* binding */ FormCursoComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 177);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 9417);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 7901);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 8530);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 6977);
/* harmony import */ var _services_admin_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/admin.service */ 1851);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7705);











function FormCursoComponent_div_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Carregando...");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
}
function FormCursoComponent_div_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("\u26A0\uFE0F ", ctx_r0.erro, "");
  }
}
function FormCursoComponent_form_11_span_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " T\u00EDtulo obrigat\u00F3rio (m\u00EDnimo 3 caracteres) ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function FormCursoComponent_form_11_span_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Descri\u00E7\u00E3o obrigat\u00F3ria (m\u00EDnimo 10 caracteres) ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function FormCursoComponent_form_11_span_23_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Instrutor obrigat\u00F3rio ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function FormCursoComponent_form_11_option_30_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "option", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const cat_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", cat_r3.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](cat_r3.nome);
  }
}
function FormCursoComponent_form_11_span_37_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " URL da imagem obrigat\u00F3ria ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function FormCursoComponent_form_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "form", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function FormCursoComponent_form_11_Template_form_ngSubmit_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r2);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r0.salvar());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 12)(2, "div", 13)(3, "label", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "T\u00EDtulo ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "input", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, FormCursoComponent_form_11_span_8_Template, 2, 0, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 13)(10, "label", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Descri\u00E7\u00E3o ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](14, "textarea", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](15, FormCursoComponent_form_11_span_15_Template, 2, 0, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 20)(17, "div", 13)(18, "label", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "Instrutor ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](22, "input", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](23, FormCursoComponent_form_11_span_23_Template, 2, 0, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "div", 13)(25, "label", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, "Categoria");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "select", 24)(28, "option", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29, "Sem categoria");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](30, FormCursoComponent_form_11_option_30_Template, 2, 2, "option", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "div", 13)(32, "label", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](33, "URL da Imagem ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](35, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](36, "input", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](37, FormCursoComponent_form_11_span_37_Template, 2, 0, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "div", 13)(39, "label", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](40, "input", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](42, "Certificado dispon\u00EDvel para este curso");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "div", 31)(44, "a", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](45, "Cancelar");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "button", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](47);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx_r0.form);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("aria-label", ctx_r0.modoEdicao ? "Formul\u00E1rio de edi\u00E7\u00E3o de curso" : "Formul\u00E1rio de cria\u00E7\u00E3o de curso");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("invalido", ctx_r0.f["titulo"].invalid && ctx_r0.f["titulo"].touched);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.f["titulo"].invalid && ctx_r0.f["titulo"].touched);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("invalido", ctx_r0.f["descricao"].invalid && ctx_r0.f["descricao"].touched);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.f["descricao"].invalid && ctx_r0.f["descricao"].touched);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("invalido", ctx_r0.f["instrutor"].invalid && ctx_r0.f["instrutor"].touched);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.f["instrutor"].invalid && ctx_r0.f["instrutor"].touched);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngValue", null);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r0.categorias);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("invalido", ctx_r0.f["imagemUrl"].invalid && ctx_r0.f["imagemUrl"].touched);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.f["imagemUrl"].invalid && ctx_r0.f["imagemUrl"].touched);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx_r0.salvando);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r0.salvando ? "Salvando..." : ctx_r0.modoEdicao ? "Salvar altera\u00E7\u00F5es" : "Criar curso", " ");
  }
}
let FormCursoComponent = /*#__PURE__*/(() => {
  class FormCursoComponent {
    fb;
    adminService;
    router;
    route;
    destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__.Subject();
    form;
    categorias = [];
    modoEdicao = false;
    cursoId = '';
    carregando = true;
    salvando = false;
    erro = '';
    sucesso = '';
    constructor(fb, adminService, router, route) {
      this.fb = fb;
      this.adminService = adminService;
      this.router = router;
      this.route = route;
    }
    ngOnInit() {
      this.form = this.fb.group({
        titulo: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.minLength(3)]],
        descricao: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.minLength(10)]],
        categoriaId: [null],
        imagemUrl: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
        instrutor: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
        certificadoDisponivel: [false]
      });
      // Carrega categorias e verifica se é edição
      this.adminService.getCategorias().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.takeUntil)(this.destroy$)).subscribe(cats => {
        this.categorias = cats;
      });
      this.cursoId = this.route.snapshot.paramMap.get('id') ?? '';
      this.modoEdicao = !!this.cursoId;
      if (this.modoEdicao) {
        this.adminService.getCurso(this.cursoId).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.takeUntil)(this.destroy$)).subscribe({
          next: curso => {
            this.form.patchValue({
              titulo: curso.titulo,
              descricao: curso.descricao,
              categoriaId: curso.categoriaId ?? null,
              imagemUrl: curso.imagemUrl,
              instrutor: curso.instrutor,
              certificadoDisponivel: curso.certificadoDisponivel
            });
            this.carregando = false;
          },
          error: () => {
            this.erro = 'Erro ao carregar curso para edição.';
            this.carregando = false;
          }
        });
      } else {
        this.carregando = false;
      }
    }
    ngOnDestroy() {
      this.destroy$.next();
      this.destroy$.complete();
    }
    get f() {
      return this.form.controls;
    }
    salvar() {
      if (this.form.invalid) {
        this.form.markAllAsTouched();
        return;
      }
      this.salvando = true;
      this.erro = '';
      this.sucesso = '';
      const payload = this.form.value;
      const operacao = this.modoEdicao ? this.adminService.atualizarCurso(this.cursoId, payload) : this.adminService.criarCurso(payload);
      operacao.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.takeUntil)(this.destroy$)).subscribe({
        next: () => {
          this.salvando = false;
          this.router.navigate(['/admin/cursos']);
        },
        error: () => {
          this.erro = 'Erro ao salvar curso. Verifique os dados e tente novamente.';
          this.salvando = false;
        }
      });
    }
    static ɵfac = function FormCursoComponent_Factory(t) {
      return new (t || FormCursoComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_admin_service__WEBPACK_IMPORTED_MODULE_0__.AdminService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.ActivatedRoute));
    };
    static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: FormCursoComponent,
      selectors: [["app-form-curso"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵStandaloneFeature"]],
      decls: 12,
      vars: 5,
      consts: [[1, "admin-page"], [1, "admin-page-header"], [1, "admin-page-titulo"], [1, "admin-page-subtitulo"], ["routerLink", "/admin/cursos", 1, "btn", "btn--secundario"], ["class", "admin-loading", "role", "status", 4, "ngIf"], ["class", "admin-alert admin-alert--erro", "role", "alert", 4, "ngIf"], ["class", "admin-form", "novalidate", "", 3, "formGroup", "ngSubmit", 4, "ngIf"], ["role", "status", 1, "admin-loading"], [1, "admin-loading__spinner"], ["role", "alert", 1, "admin-alert", "admin-alert--erro"], ["novalidate", "", 1, "admin-form", 3, "ngSubmit", "formGroup"], [1, "admin-card"], [1, "form-grupo"], ["for", "titulo", 1, "form-label"], ["aria-label", "obrigat\u00F3rio"], ["id", "titulo", "type", "text", "formControlName", "titulo", "placeholder", "Ex: Fundamentos do Espiritismo", "aria-required", "true", 1, "form-input"], ["class", "form-erro", "role", "alert", 4, "ngIf"], ["for", "descricao", 1, "form-label"], ["id", "descricao", "formControlName", "descricao", "rows", "4", "placeholder", "Descreva o conte\u00FAdo do curso...", "aria-required", "true", 1, "form-input", "form-textarea"], [1, "form-row"], ["for", "instrutor", 1, "form-label"], ["id", "instrutor", "type", "text", "formControlName", "instrutor", "placeholder", "Nome do instrutor", "aria-required", "true", 1, "form-input"], ["for", "categoriaId", 1, "form-label"], ["id", "categoriaId", "formControlName", "categoriaId", 1, "form-input", "form-select"], [3, "ngValue"], [3, "value", 4, "ngFor", "ngForOf"], ["for", "imagemUrl", 1, "form-label"], ["id", "imagemUrl", "type", "url", "formControlName", "imagemUrl", "placeholder", "https://...", "aria-required", "true", 1, "form-input"], [1, "form-checkbox"], ["type", "checkbox", "formControlName", "certificadoDisponivel"], [1, "form-acoes"], ["type", "submit", 1, "btn", "btn--primario", 3, "disabled"], ["role", "alert", 1, "form-erro"], [3, "value"]],
      template: function FormCursoComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div")(3, "h1", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "p", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "a", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "\u2190 Voltar");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, FormCursoComponent_div_9_Template, 4, 0, "div", 5)(10, FormCursoComponent_div_10_Template, 2, 1, "div", 6)(11, FormCursoComponent_form_11_Template, 48, 18, "form", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.modoEdicao ? "Editar Curso" : "Novo Curso");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.modoEdicao ? "Altere os dados do curso" : "Preencha os dados para criar um novo curso");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.carregando);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.erro);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.carregando);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.ReactiveFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.CheckboxControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControlName, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterLink],
      styles: ["@charset \"UTF-8\";\n.admin-page[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 24px;\n}\n\n.admin-page-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  gap: 16px;\n  flex-wrap: wrap;\n}\n\n.admin-page-titulo[_ngcontent-%COMP%] {\n  font-size: 1.4rem;\n  font-weight: 700;\n  color: #1a1f2e;\n  margin: 0;\n}\n\n.admin-page-subtitulo[_ngcontent-%COMP%] {\n  font-size: 0.88rem;\n  color: #666;\n  margin: 4px 0 0;\n}\n\n.admin-card[_ngcontent-%COMP%] {\n  background: #ffffff;\n  border-radius: 12px;\n  border: 1px solid #e8ecf0;\n  padding: 22px;\n  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.05);\n}\n\n.admin-loading[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 12px;\n  padding: 48px;\n  color: #666;\n  font-size: 0.9rem;\n}\n.admin-loading__spinner[_ngcontent-%COMP%] {\n  width: 36px;\n  height: 36px;\n  border: 3px solid #e2e8f0;\n  border-top-color: #4f9cf9;\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_admin-spin 0.8s linear infinite;\n}\n\n@keyframes _ngcontent-%COMP%_admin-spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n.admin-alert[_ngcontent-%COMP%] {\n  padding: 13px 18px;\n  border-radius: 8px;\n  font-size: 0.88rem;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.admin-alert--erro[_ngcontent-%COMP%] {\n  background: rgba(239, 68, 68, 0.07);\n  color: #ec1e1e;\n  border: 1px solid rgba(239, 68, 68, 0.18);\n}\n.admin-alert--sucesso[_ngcontent-%COMP%] {\n  background: rgba(34, 197, 94, 0.08);\n  color: #147739;\n  border: 1px solid rgba(34, 197, 94, 0.2);\n}\n\n.admin-vazio[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 48px;\n  color: #888;\n  font-size: 0.92rem;\n  background: #ffffff;\n  border-radius: 10px;\n  border: 1px dashed #d0d7e0;\n}\n.admin-vazio[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], .admin-vazio[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  color: #4f9cf9;\n}\n\n.btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 9px 18px;\n  border-radius: 8px;\n  font-size: 0.86rem;\n  font-weight: 600;\n  cursor: pointer;\n  border: none;\n  text-decoration: none;\n  transition: opacity 0.2s, transform 0.15s, box-shadow 0.2s;\n  line-height: 1.2;\n}\n.btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.55;\n  cursor: not-allowed;\n  transform: none !important;\n}\n.btn[_ngcontent-%COMP%]:focus-visible {\n  outline: 2px solid #4f9cf9;\n  outline-offset: 2px;\n}\n.btn--primario[_ngcontent-%COMP%] {\n  background: #4f9cf9;\n  color: #ffffff;\n  box-shadow: 0 1px 4px rgba(79, 156, 249, 0.3);\n}\n.btn--primario[_ngcontent-%COMP%]:hover:not(:disabled) {\n  opacity: 0.9;\n  transform: translateY(-1px);\n}\n.btn--secundario[_ngcontent-%COMP%] {\n  background: #f4f6fa;\n  color: #333;\n  border: 1px solid #dde2ea;\n}\n.btn--secundario[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #eaedf2;\n}\n.btn--perigo[_ngcontent-%COMP%] {\n  background: #ef4444;\n  color: #ffffff;\n}\n.btn--perigo[_ngcontent-%COMP%]:hover:not(:disabled) {\n  opacity: 0.88;\n}\n\n.btn-acao[_ngcontent-%COMP%] {\n  width: 32px;\n  height: 32px;\n  border-radius: 6px;\n  border: 1px solid #e8ecf0;\n  background: #f8faff;\n  cursor: pointer;\n  font-size: 0.9rem;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  transition: background 0.15s, border-color 0.15s;\n  text-decoration: none;\n}\n.btn-acao[_ngcontent-%COMP%]:hover {\n  border-color: #c0cbda;\n  background: #f0f4ff;\n}\n.btn-acao[_ngcontent-%COMP%]:focus-visible {\n  outline: 2px solid #4f9cf9;\n  outline-offset: 1px;\n}\n.btn-acao[_ngcontent-%COMP%]:disabled {\n  opacity: 0.4;\n  cursor: not-allowed;\n}\n.btn-acao--excluir[_ngcontent-%COMP%]:hover {\n  background: rgba(239, 68, 68, 0.08);\n  border-color: rgba(239, 68, 68, 0.3);\n}\n.btn-acao--editar[_ngcontent-%COMP%]:hover {\n  background: rgba(79, 156, 249, 0.08);\n  border-color: rgba(79, 156, 249, 0.3);\n}\n.btn-acao--aulas[_ngcontent-%COMP%]:hover {\n  background: rgba(34, 197, 94, 0.08);\n  border-color: rgba(34, 197, 94, 0.3);\n}\n\n.acoes[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 6px;\n  align-items: center;\n}\n\n.tabela-container[_ngcontent-%COMP%] {\n  background: #ffffff;\n  border-radius: 12px;\n  border: 1px solid #e8ecf0;\n  overflow: auto;\n  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.04);\n}\n\n.tabela[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n  font-size: 0.86rem;\n}\n.tabela[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%] {\n  background: #f8faff;\n  border-bottom: 1px solid #e8ecf0;\n}\n.tabela[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  padding: 11px 16px;\n  text-align: left;\n  font-size: 0.78rem;\n  font-weight: 600;\n  color: #555;\n  text-transform: uppercase;\n  letter-spacing: 0.4px;\n  white-space: nowrap;\n}\n.tabela[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n  border-bottom: 1px solid #f0f3f7;\n  transition: background 0.12s;\n}\n.tabela[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n.tabela[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover {\n  background: #f8faff;\n}\n.tabela[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 12px 16px;\n  color: #333;\n  vertical-align: middle;\n}\n\n.curso-thumb[_ngcontent-%COMP%] {\n  width: 44px;\n  height: 44px;\n  border-radius: 6px;\n  object-fit: cover;\n  flex-shrink: 0;\n  border: 1px solid #e8ecf0;\n}\n\n.curso-info[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n.curso-info[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 0.87rem;\n  color: #1a1f2e;\n}\n\n.curso-desc[_ngcontent-%COMP%] {\n  font-size: 0.76rem;\n  color: #888;\n  margin: 2px 0 0;\n  max-width: 260px;\n}\n\n.badge[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 3px 9px;\n  border-radius: 10px;\n  font-size: 0.74rem;\n  font-weight: 600;\n  white-space: nowrap;\n}\n.badge--verde[_ngcontent-%COMP%] {\n  background: rgba(34, 197, 94, 0.1);\n  color: #147739;\n}\n.badge--cinza[_ngcontent-%COMP%] {\n  background: rgba(148, 163, 184, 0.14);\n  color: #5c6f8a;\n}\n.badge--laranja[_ngcontent-%COMP%] {\n  background: rgba(245, 158, 11, 0.12);\n  color: #945f06;\n}\n.badge--neutro[_ngcontent-%COMP%] {\n  background: #eef2f7;\n  color: #555;\n}\n.badge--categoria[_ngcontent-%COMP%] {\n  background: rgba(167, 139, 250, 0.1);\n  color: #5d29f6;\n}\n\n.admin-form[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 18px;\n}\n\n.form-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));\n  gap: 16px;\n}\n\n.form-grupo[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n}\n.form-grupo--flex2[_ngcontent-%COMP%] {\n  grid-column: span 2;\n}\n\n.form-label[_ngcontent-%COMP%] {\n  font-size: 0.83rem;\n  font-weight: 600;\n  color: #444;\n}\n.form-label[_ngcontent-%COMP%]   span[aria-label=obrigat\u00F3rio][_ngcontent-%COMP%] {\n  color: #ef4444;\n  margin-left: 2px;\n}\n\n.form-input[_ngcontent-%COMP%] {\n  padding: 9px 12px;\n  border: 1.5px solid #dde2ea;\n  border-radius: 8px;\n  font-size: 0.88rem;\n  color: #1a1f2e;\n  background: #fff;\n  transition: border-color 0.2s, box-shadow 0.2s;\n  width: 100%;\n  box-sizing: border-box;\n}\n.form-input[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #4f9cf9;\n  box-shadow: 0 0 0 3px rgba(79, 156, 249, 0.12);\n}\n.form-input.invalido[_ngcontent-%COMP%] {\n  border-color: #ef4444;\n}\n.form-input.invalido[_ngcontent-%COMP%]:focus {\n  box-shadow: 0 0 0 3px rgba(239, 68, 68, 0.1);\n}\n\n.form-textarea[_ngcontent-%COMP%] {\n  resize: vertical;\n  min-height: 80px;\n  font-family: inherit;\n}\n\n.form-select[_ngcontent-%COMP%] {\n  appearance: auto;\n  cursor: pointer;\n}\n\n.form-erro[_ngcontent-%COMP%] {\n  font-size: 0.78rem;\n  color: #ef4444;\n  font-weight: 500;\n}\n\n.form-dica[_ngcontent-%COMP%] {\n  font-size: 0.76rem;\n  color: #888;\n  line-height: 1.4;\n}\n\n.form-checkbox[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 0.87rem;\n  cursor: pointer;\n  color: #333;\n}\n.form-checkbox[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%] {\n  width: 16px;\n  height: 16px;\n  cursor: pointer;\n  accent-color: #4f9cf9;\n}\n\n.form-acoes[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 12px;\n  justify-content: flex-end;\n  padding-top: 8px;\n  border-top: 1px solid #f0f3f7;\n}\n\n.modal-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.45);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 200;\n  padding: 16px;\n}\n\n.modal[_ngcontent-%COMP%] {\n  background: #ffffff;\n  border-radius: 12px;\n  padding: 28px;\n  max-width: 380px;\n  width: 100%;\n  box-shadow: 0 8px 40px rgba(0, 0, 0, 0.18);\n}\n.modal__texto[_ngcontent-%COMP%] {\n  font-size: 0.92rem;\n  color: #333;\n  line-height: 1.5;\n  margin: 0 0 20px;\n}\n.modal__acoes[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 10px;\n  justify-content: flex-end;\n}\n\n.paginacao[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 6px;\n  justify-content: center;\n  flex-wrap: wrap;\n  margin-top: 8px;\n}\n.paginacao__btn[_ngcontent-%COMP%] {\n  min-width: 34px;\n  height: 34px;\n  padding: 0 10px;\n  border-radius: 7px;\n  border: 1px solid #dde2ea;\n  background: #ffffff;\n  color: #333;\n  font-size: 0.84rem;\n  font-weight: 500;\n  cursor: pointer;\n  transition: background 0.15s, border-color 0.15s, color 0.15s;\n}\n.paginacao__btn[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #f0f6ff;\n  border-color: #4f9cf9;\n  color: #4f9cf9;\n}\n.paginacao__btn.ativo[_ngcontent-%COMP%] {\n  background: #4f9cf9;\n  border-color: #4f9cf9;\n  color: #ffffff;\n}\n.paginacao__btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.4;\n  cursor: not-allowed;\n}\n.paginacao__btn[_ngcontent-%COMP%]:focus-visible {\n  outline: 2px solid #4f9cf9;\n  outline-offset: 2px;\n}"]
    });
  }
  return FormCursoComponent;
})();

/***/ })

}]);