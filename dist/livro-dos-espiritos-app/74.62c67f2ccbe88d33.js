"use strict";
(self["webpackChunklivro_dos_espiritos_app"] = self["webpackChunklivro_dos_espiritos_app"] || []).push([[74],{

/***/ 5074:
/*!*****************************************************!*\
  !*** ./src/app/area-aluno/login/login.component.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LoginComponent: () => (/* binding */ LoginComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 177);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 9417);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 7901);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 8530);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 6977);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/auth.service */ 5722);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7705);











function LoginComponent_div_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" \u26A0\uFE0F ", ctx_r0.erro, " ");
  }
}
function LoginComponent_span_16_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "E-mail \u00E9 obrigat\u00F3rio.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function LoginComponent_span_16_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Informe um e-mail v\u00E1lido.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function LoginComponent_span_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, LoginComponent_span_16_span_1_Template, 2, 0, "span", 19)(2, LoginComponent_span_16_span_2_Template, 2, 0, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.emailCtrl == null ? null : ctx_r0.emailCtrl.errors == null ? null : ctx_r0.emailCtrl.errors["required"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.emailCtrl == null ? null : ctx_r0.emailCtrl.errors == null ? null : ctx_r0.emailCtrl.errors["email"]);
  }
}
function LoginComponent_span_24_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Senha \u00E9 obrigat\u00F3ria.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function LoginComponent_span_24_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "A senha deve ter pelo menos 6 caracteres.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function LoginComponent_span_24_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, LoginComponent_span_24_span_1_Template, 2, 0, "span", 19)(2, LoginComponent_span_24_span_2_Template, 2, 0, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.senhaCtrl == null ? null : ctx_r0.senhaCtrl.errors == null ? null : ctx_r0.senhaCtrl.errors["required"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.senhaCtrl == null ? null : ctx_r0.senhaCtrl.errors == null ? null : ctx_r0.senhaCtrl.errors["minlength"]);
  }
}
function LoginComponent_span_26_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Entrar");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function LoginComponent_span_27_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "span", 27);
  }
}
function LoginComponent_span_28_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Entrando...");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
let LoginComponent = /*#__PURE__*/(() => {
  class LoginComponent {
    fb;
    authService;
    router;
    destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__.Subject();
    // Nome "formulario" mantido para compatibilidade com o HTML existente
    formulario;
    erro = null;
    carregando = false;
    senhaVisivel = false;
    constructor(fb, authService, router) {
      this.fb = fb;
      this.authService = authService;
      this.router = router;
      this.formulario = this.fb.group({
        email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.email]],
        senha: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.minLength(6)]]
      });
    }
    ngOnInit() {
      // Se já está logado, redireciona imediatamente para o destino correto
      if (this.authService.estaLogado) {
        this.redirecionar();
      }
    }
    ngOnDestroy() {
      this.destroy$.next();
      this.destroy$.complete();
    }
    // Getters usados pelo HTML existente
    get emailCtrl() {
      return this.formulario.get('email');
    }
    get senhaCtrl() {
      return this.formulario.get('senha');
    }
    alternarSenha() {
      this.senhaVisivel = !this.senhaVisivel;
    }
    entrar() {
      if (this.formulario.invalid) {
        this.formulario.markAllAsTouched();
        return;
      }
      this.carregando = true;
      this.erro = null;
      const {
        email,
        senha
      } = this.formulario.value;
      this.authService.login(email, senha).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.takeUntil)(this.destroy$)).subscribe({
        next: () => {
          this.carregando = false;
          this.redirecionar();
        },
        error: () => {
          // Mensagem genérica — nunca revela qual campo está errado (segurança)
          this.erro = 'E-mail ou senha inválidos. Verifique seus dados e tente novamente.';
          this.carregando = false;
        }
      });
    }
    redirecionar() {
      // Lê a role diretamente do JWT decodificado no AuthService
      const destino = this.authService.isAdmin ? '/admin' : '/area-aluno';
      this.router.navigate([destino]);
    }
    static ɵfac = function LoginComponent_Factory(t) {
      return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router));
    };
    static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: LoginComponent,
      selectors: [["app-login"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵStandaloneFeature"]],
      decls: 32,
      vars: 17,
      consts: [[1, "login-page"], ["role", "main", 1, "login-card"], ["aria-hidden", "true", 1, "login-card__topo"], [1, "login-card__icone"], [1, "login-card__corpo"], [1, "login-card__titulo"], [1, "login-card__subtitulo"], ["class", "login-erro", "role", "alert", "aria-live", "assertive", 4, "ngIf"], ["novalidate", "", "aria-label", "Formul\u00E1rio de login", 3, "ngSubmit", "formGroup"], [1, "campo-grupo"], ["for", "email", 1, "campo-grupo__label"], ["id", "email", "type", "email", "formControlName", "email", "placeholder", "seu@email.com", "autocomplete", "email", "aria-required", "true", "aria-describedby", "email-erro", 1, "campo-grupo__input"], ["id", "email-erro", "class", "campo-grupo__erro", "role", "alert", 4, "ngIf"], ["for", "senha", 1, "campo-grupo__label"], [1, "campo-grupo__senha-wrap"], ["id", "senha", "formControlName", "senha", "placeholder", "\u2022\u2022\u2022\u2022\u2022\u2022", "autocomplete", "current-password", "aria-required", "true", "aria-describedby", "senha-erro", 1, "campo-grupo__input", 3, "type"], ["type", "button", 1, "campo-grupo__toggle-senha", 3, "click"], ["id", "senha-erro", "class", "campo-grupo__erro", "role", "alert", 4, "ngIf"], ["type", "submit", "aria-label", "Entrar na \u00E1rea do aluno", 1, "btn-entrar", 3, "disabled"], [4, "ngIf"], ["class", "btn-entrar__spinner", "aria-hidden", "true", 4, "ngIf"], ["class", "sr-only", 4, "ngIf"], [1, "login-card__rodape"], ["routerLink", "/", 1, "login-card__link-voltar"], ["role", "alert", "aria-live", "assertive", 1, "login-erro"], ["id", "email-erro", "role", "alert", 1, "campo-grupo__erro"], ["id", "senha-erro", "role", "alert", 1, "campo-grupo__erro"], ["aria-hidden", "true", 1, "btn-entrar__spinner"], [1, "sr-only"]],
      template: function LoginComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "\u271D\uFE0F");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 4)(6, "h1", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "\u00C1rea do Aluno");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "p", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, " Acesse seus cursos, acompanhe seu progresso e emita seus certificados. ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, LoginComponent_div_10_Template, 2, 1, "div", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "form", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function LoginComponent_Template_form_ngSubmit_11_listener() {
            return ctx.entrar();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 9)(13, "label", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "E-mail");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](15, "input", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](16, LoginComponent_span_16_Template, 3, 2, "span", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 9)(18, "label", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "Senha");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "div", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](21, "input", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "button", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function LoginComponent_Template_button_click_22_listener() {
            return ctx.alternarSenha();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](24, LoginComponent_span_24_Template, 3, 2, "span", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "button", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](26, LoginComponent_span_26_Template, 2, 0, "span", 19)(27, LoginComponent_span_27_Template, 1, 0, "span", 20)(28, LoginComponent_span_28_Template, 2, 0, "span", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "div", 22)(30, "a", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31, "\u2190 Voltar para o site");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.erro);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.formulario);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("campo-grupo__input--erro", (ctx.emailCtrl == null ? null : ctx.emailCtrl.invalid) && (ctx.emailCtrl == null ? null : ctx.emailCtrl.touched));
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("aria-invalid", (ctx.emailCtrl == null ? null : ctx.emailCtrl.invalid) && (ctx.emailCtrl == null ? null : ctx.emailCtrl.touched) ? "true" : null);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (ctx.emailCtrl == null ? null : ctx.emailCtrl.invalid) && (ctx.emailCtrl == null ? null : ctx.emailCtrl.touched));
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("campo-grupo__input--erro", (ctx.senhaCtrl == null ? null : ctx.senhaCtrl.invalid) && (ctx.senhaCtrl == null ? null : ctx.senhaCtrl.touched));
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("type", ctx.senhaVisivel ? "text" : "password");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("aria-invalid", (ctx.senhaCtrl == null ? null : ctx.senhaCtrl.invalid) && (ctx.senhaCtrl == null ? null : ctx.senhaCtrl.touched) ? "true" : null);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("aria-label", ctx.senhaVisivel ? "Ocultar senha" : "Mostrar senha");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.senhaVisivel ? "\uD83D\uDE48" : "\uD83D\uDC41\uFE0F", " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (ctx.senhaCtrl == null ? null : ctx.senhaCtrl.invalid) && (ctx.senhaCtrl == null ? null : ctx.senhaCtrl.touched));
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx.carregando);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.carregando);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.carregando);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.carregando);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.ReactiveFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControlName, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterLink],
      styles: ["[_nghost-%COMP%] {\n  display: block;\n}\n\n.login-page[_ngcontent-%COMP%] {\n  min-height: calc(100vh - 130px);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 2rem 1rem;\n  background: linear-gradient(160deg, #f0f4fc 0%, #e8edf8 100%);\n}\n\n.login-card[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 420px;\n  background: #fff;\n  border-radius: 16px;\n  box-shadow: 0 8px 40px rgba(44, 90, 160, 0.12);\n  overflow: hidden;\n  animation: _ngcontent-%COMP%_slideUp 0.3s ease;\n}\n.login-card__topo[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, #2c5aa0 0%, #1e3d6f 100%);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 2rem;\n}\n.login-card__icone[_ngcontent-%COMP%] {\n  font-size: 3rem;\n  filter: drop-shadow(0 2px 6px rgba(0, 0, 0, 0.3));\n}\n.login-card__corpo[_ngcontent-%COMP%] {\n  padding: 2rem;\n}\n.login-card__titulo[_ngcontent-%COMP%] {\n  font-size: 1.6rem;\n  color: #1a1a2e;\n  margin: 0 0 0.4rem;\n  text-align: center;\n}\n.login-card__subtitulo[_ngcontent-%COMP%] {\n  color: #666;\n  font-size: 0.9rem;\n  text-align: center;\n  margin: 0 0 1.75rem;\n  line-height: 1.5;\n}\n.login-card__dica[_ngcontent-%COMP%] {\n  margin-top: 1.25rem;\n  font-size: 0.8rem;\n  color: #888;\n  background: #f8f9fa;\n  border: 1px dashed #ccc;\n  border-radius: 8px;\n  padding: 0.65rem 0.9rem;\n  text-align: center;\n  line-height: 1.5;\n}\n.login-card__dica[_ngcontent-%COMP%]   code[_ngcontent-%COMP%] {\n  background: #e8edf5;\n  padding: 0.1rem 0.4rem;\n  border-radius: 4px;\n  font-size: 0.85em;\n  color: #2c5aa0;\n}\n.login-card__rodape[_ngcontent-%COMP%] {\n  margin-top: 1.5rem;\n  text-align: center;\n}\n.login-card__link-voltar[_ngcontent-%COMP%] {\n  font-size: 0.85rem;\n  color: #2c5aa0;\n  text-decoration: none;\n}\n.login-card__link-voltar[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n.login-card__link-voltar[_ngcontent-%COMP%]:focus-visible {\n  outline: 2px solid #2c5aa0;\n  outline-offset: 2px;\n  border-radius: 3px;\n}\n\n.login-erro[_ngcontent-%COMP%] {\n  background: #fff2f2;\n  border: 1px solid #ffcdd2;\n  color: #c62828;\n  border-radius: 8px;\n  padding: 0.75rem 1rem;\n  font-size: 0.9rem;\n  margin-bottom: 1.25rem;\n  line-height: 1.45;\n}\n\n.campo-grupo[_ngcontent-%COMP%] {\n  margin-bottom: 1.25rem;\n}\n.campo-grupo__label[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 0.875rem;\n  font-weight: 600;\n  color: #333;\n  margin-bottom: 0.4rem;\n}\n.campo-grupo__input[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 0.7rem 0.9rem;\n  border: 1.5px solid #dde2ee;\n  border-radius: 8px;\n  font-size: 1rem;\n  color: #1a1a2e;\n  background: #fafbfd;\n  transition: border-color 0.2s, box-shadow 0.2s;\n  box-sizing: border-box;\n}\n.campo-grupo__input[_ngcontent-%COMP%]::placeholder {\n  color: #bbb;\n}\n.campo-grupo__input[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #2c5aa0;\n  box-shadow: 0 0 0 3px rgba(44, 90, 160, 0.15);\n  background: #fff;\n}\n.campo-grupo__input--erro[_ngcontent-%COMP%] {\n  border-color: #e53935;\n  background: #fff8f8;\n}\n.campo-grupo__input--erro[_ngcontent-%COMP%]:focus {\n  border-color: #c62828;\n  box-shadow: 0 0 0 3px rgba(229, 57, 53, 0.15);\n}\n.campo-grupo__senha-wrap[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  align-items: center;\n}\n.campo-grupo__senha-wrap[_ngcontent-%COMP%]   .campo-grupo__input[_ngcontent-%COMP%] {\n  padding-right: 2.75rem;\n}\n.campo-grupo__toggle-senha[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 0.75rem;\n  background: none;\n  border: none;\n  cursor: pointer;\n  font-size: 1.1rem;\n  padding: 0.25rem;\n  line-height: 1;\n  border-radius: 4px;\n}\n.campo-grupo__toggle-senha[_ngcontent-%COMP%]:focus-visible {\n  outline: 2px solid #2c5aa0;\n  outline-offset: 1px;\n}\n.campo-grupo__erro[_ngcontent-%COMP%] {\n  display: block;\n  margin-top: 0.35rem;\n  font-size: 0.8rem;\n  color: #c62828;\n}\n\n.btn-entrar[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 0.85rem;\n  background: linear-gradient(135deg, #2c5aa0 0%, #1e3d6f 100%);\n  color: #fff;\n  border: none;\n  border-radius: 8px;\n  font-size: 1rem;\n  font-weight: 700;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 0.5rem;\n  transition: opacity 0.2s, transform 0.1s;\n  margin-top: 0.5rem;\n}\n.btn-entrar[_ngcontent-%COMP%]:hover:not(:disabled) {\n  opacity: 0.92;\n}\n.btn-entrar[_ngcontent-%COMP%]:active:not(:disabled) {\n  transform: scale(0.98);\n}\n.btn-entrar[_ngcontent-%COMP%]:disabled {\n  opacity: 0.7;\n  cursor: not-allowed;\n}\n.btn-entrar[_ngcontent-%COMP%]:focus-visible {\n  outline: 3px solid #2c5aa0;\n  outline-offset: 3px;\n}\n.btn-entrar__spinner[_ngcontent-%COMP%] {\n  width: 20px;\n  height: 20px;\n  border: 3px solid rgba(255, 255, 255, 0.35);\n  border-top-color: #fff;\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_spin 0.7s linear infinite;\n}\n\n.sr-only[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  padding: 0;\n  margin: -1px;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0);\n  white-space: nowrap;\n  border: 0;\n}\n\n@keyframes _ngcontent-%COMP%_slideUp {\n  from {\n    opacity: 0;\n    transform: translateY(16px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n@keyframes _ngcontent-%COMP%_spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n@media (max-width: 480px) {\n  .login-card[_ngcontent-%COMP%] {\n    border-radius: 12px;\n  }\n  .login-card__corpo[_ngcontent-%COMP%] {\n    padding: 1.5rem;\n  }\n}"]
    });
  }
  return LoginComponent;
})();

/***/ })

}]);