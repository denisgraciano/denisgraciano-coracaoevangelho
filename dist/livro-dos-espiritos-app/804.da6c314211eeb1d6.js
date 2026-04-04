"use strict";
(self["webpackChunklivro_dos_espiritos_app"] = self["webpackChunklivro_dos_espiritos_app"] || []).push([[804],{

/***/ 6804:
/*!*******************************************************************!*\
  !*** ./src/app/area-aluno/perfil-aluno/perfil-aluno.component.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PerfilAlunoComponent: () => (/* binding */ PerfilAlunoComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 177);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 9417);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 7901);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 8530);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 6977);
/* harmony import */ var _services_perfil_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/perfil.service */ 1538);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/auth.service */ 5722);
/* harmony import */ var _services_cep_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/cep.service */ 2158);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7705);







 // reutiliza o service existente







const _c0 = () => ["/area-aluno"];
function PerfilAlunoComponent_img_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "img", 76);
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate1"]("alt", "Foto de perfil de ", ctx_r1.nomeUsuario, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("src", ctx_r1.avatarPreview, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
  }
}
function PerfilAlunoComponent_ng_template_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r1.nomeUsuario.charAt(0).toUpperCase(), " ");
  }
}
function PerfilAlunoComponent_p_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "p", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" \u26A0\uFE0F ", ctx_r1.erroAvatar, " ");
  }
}
function PerfilAlunoComponent_button_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "button", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function PerfilAlunoComponent_button_21_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r1.removerAvatar());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " \uD83D\uDDD1\uFE0F Remover foto ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function PerfilAlunoComponent_div_25_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " \u2705 Perfil atualizado com sucesso! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function PerfilAlunoComponent_span_34_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Nome \u00E9 obrigat\u00F3rio.");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function PerfilAlunoComponent_span_34_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "M\u00EDnimo de 3 caracteres.");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function PerfilAlunoComponent_span_34_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, PerfilAlunoComponent_span_34_span_1_Template, 2, 0, "span", 47)(2, PerfilAlunoComponent_span_34_span_2_Template, 2, 0, "span", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    let tmp_2_0;
    let tmp_3_0;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", (tmp_2_0 = ctx_r1.campo("nomeCompleto")) == null ? null : tmp_2_0.errors == null ? null : tmp_2_0.errors["required"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", (tmp_3_0 = ctx_r1.campo("nomeCompleto")) == null ? null : tmp_3_0.errors == null ? null : tmp_3_0.errors["minlength"]);
  }
}
function PerfilAlunoComponent_span_40_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "E-mail \u00E9 obrigat\u00F3rio.");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function PerfilAlunoComponent_span_40_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "E-mail inv\u00E1lido.");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function PerfilAlunoComponent_span_40_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, PerfilAlunoComponent_span_40_span_1_Template, 2, 0, "span", 47)(2, PerfilAlunoComponent_span_40_span_2_Template, 2, 0, "span", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    let tmp_2_0;
    let tmp_3_0;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", (tmp_2_0 = ctx_r1.campo("email")) == null ? null : tmp_2_0.errors == null ? null : tmp_2_0.errors["required"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", (tmp_3_0 = ctx_r1.campo("email")) == null ? null : tmp_3_0.errors == null ? null : tmp_3_0.errors["email"]);
  }
}
function PerfilAlunoComponent_span_45_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Telefone \u00E9 obrigat\u00F3rio. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function PerfilAlunoComponent_span_51_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " CPF \u00E9 obrigat\u00F3rio. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function PerfilAlunoComponent_span_56_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Data de nascimento \u00E9 obrigat\u00F3ria. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function PerfilAlunoComponent_span_66_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "span", 86);
  }
}
function PerfilAlunoComponent_span_68_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "CEP \u00E9 obrigat\u00F3rio.");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function PerfilAlunoComponent_span_69_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "CEP n\u00E3o encontrado.");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function PerfilAlunoComponent_span_74_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Logradouro \u00E9 obrigat\u00F3rio. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function PerfilAlunoComponent_span_80_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " N\u00FAmero \u00E9 obrigat\u00F3rio. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function PerfilAlunoComponent_span_89_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Bairro \u00E9 obrigat\u00F3rio. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function PerfilAlunoComponent_span_95_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Cidade \u00E9 obrigat\u00F3ria. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function PerfilAlunoComponent_option_102_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "option", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const uf_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", uf_r4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](uf_r4);
  }
}
function PerfilAlunoComponent_span_103_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Estado \u00E9 obrigat\u00F3rio. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function PerfilAlunoComponent_span_120_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "\uD83D\uDCBE Salvar Altera\u00E7\u00F5es");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function PerfilAlunoComponent_span_121_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "span", 89);
  }
}
function PerfilAlunoComponent_span_122_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Salvando...");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
const ESTADOS = ['AC', 'AL', 'AP', 'AM', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MT', 'MS', 'MG', 'PA', 'PB', 'PR', 'PE', 'PI', 'RJ', 'RN', 'RS', 'RO', 'RR', 'SC', 'SP', 'SE', 'TO'];
let PerfilAlunoComponent = /*#__PURE__*/(() => {
  class PerfilAlunoComponent {
    fb;
    perfilService;
    authService;
    cepService;
    destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__.Subject();
    estados = ESTADOS;
    formulario;
    nomeUsuario = '';
    avatarPreview = ''; // data URL para preview imediato
    salvando = false;
    salvoComSucesso = false;
    erroCep = false;
    buscandoCep = false;
    // Limites do avatar
    MAX_AVATAR_BYTES = 2 * 1024 * 1024; // 2 MB
    erroAvatar = '';
    constructor(fb, perfilService, authService, cepService) {
      this.fb = fb;
      this.perfilService = perfilService;
      this.authService = authService;
      this.cepService = cepService;
    }
    ngOnInit() {
      this.criarFormulario();
      // Carrega dados existentes do perfil
      this.perfilService.perfil$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.takeUntil)(this.destroy$)).subscribe(perfil => {
        if (perfil) {
          this.preencherFormulario(perfil);
          this.avatarPreview = perfil.avatarBase64 ?? '';
        }
      });
      this.authService.usuario$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.takeUntil)(this.destroy$)).subscribe(u => this.nomeUsuario = u?.nome ?? '');
    }
    ngOnDestroy() {
      this.destroy$.next();
      this.destroy$.complete();
    }
    // ── Avatar ────────────────────────────────────────────────────
    onArquivoSelecionado(evento) {
      this.erroAvatar = '';
      const input = evento.target;
      const arquivo = input.files?.[0];
      if (!arquivo) return;
      // Valida tipo
      if (!arquivo.type.startsWith('image/')) {
        this.erroAvatar = 'Selecione um arquivo de imagem (JPG, PNG, WEBP).';
        return;
      }
      // Valida tamanho
      if (arquivo.size > this.MAX_AVATAR_BYTES) {
        this.erroAvatar = 'A imagem deve ter no máximo 2 MB.';
        return;
      }
      const reader = new FileReader();
      reader.onload = e => {
        const base64 = e.target?.result;
        this.avatarPreview = base64;
        this.perfilService.salvarAvatar(base64);
      };
      reader.readAsDataURL(arquivo);
    }
    removerAvatar() {
      this.avatarPreview = '';
      this.perfilService.salvarAvatar('');
    }
    // ── CEP ───────────────────────────────────────────────────────
    buscarCep() {
      const cep = this.formulario.get('endereco.cep')?.value?.replace(/\D/g, '');
      if (!cep || cep.length !== 8) return;
      this.buscandoCep = true;
      this.erroCep = false;
      this.cepService.buscarCEP(cep).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.takeUntil)(this.destroy$)).subscribe({
        next: data => {
          this.buscandoCep = false;
          if ('erro' in data) {
            this.erroCep = true;
            return;
          }
          this.formulario.patchValue({
            endereco: {
              logradouro: data.logradouro,
              bairro: data.bairro,
              cidade: data.localidade,
              estado: data.uf
            }
          });
        },
        error: () => {
          this.buscandoCep = false;
          this.erroCep = true;
        }
      });
    }
    // ── Submit ────────────────────────────────────────────────────
    salvar() {
      if (this.formulario.invalid) {
        this.formulario.markAllAsTouched();
        return;
      }
      this.salvando = true;
      const valores = this.formulario.value;
      const perfil = {
        nomeCompleto: valores.nomeCompleto,
        email: valores.email,
        telefone: valores.telefone,
        cpf: valores.cpf,
        dataNascimento: valores.dataNascimento,
        endereco: valores.endereco,
        receberEmails: valores.receberEmails,
        observacoes: valores.observacoes
      };
      // Simula latência de rede (remover ao integrar backend)
      setTimeout(() => {
        this.perfilService.salvar(perfil);
        this.salvando = false;
        this.salvoComSucesso = true;
        // Esconde o feedback após 3s
        setTimeout(() => this.salvoComSucesso = false, 3000);
      }, 600);
    }
    // ── Helpers de validação no template ─────────────────────────
    campo(path) {
      return this.formulario.get(path);
    }
    invalido(path) {
      const c = this.campo(path);
      return !!(c?.invalid && c.touched);
    }
    // ── Privados ──────────────────────────────────────────────────
    criarFormulario() {
      this.formulario = this.fb.group({
        nomeCompleto: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.minLength(3)]],
        email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.email]],
        telefone: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]],
        cpf: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]],
        dataNascimento: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]],
        endereco: this.fb.group({
          cep: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]],
          logradouro: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]],
          numero: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]],
          complemento: [''],
          bairro: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]],
          cidade: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]],
          estado: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]]
        }),
        receberEmails: [false],
        observacoes: ['']
      });
    }
    preencherFormulario(perfil) {
      this.formulario.patchValue({
        nomeCompleto: perfil.nomeCompleto,
        email: perfil.email,
        telefone: perfil.telefone,
        cpf: perfil.cpf,
        dataNascimento: perfil.dataNascimento,
        endereco: perfil.endereco,
        receberEmails: perfil.receberEmails,
        observacoes: perfil.observacoes ?? ''
      });
    }
    static ɵfac = function PerfilAlunoComponent_Factory(t) {
      return new (t || PerfilAlunoComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_perfil_service__WEBPACK_IMPORTED_MODULE_0__.PerfilService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_1__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_cep_service__WEBPACK_IMPORTED_MODULE_2__.CepService));
    };
    static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
      type: PerfilAlunoComponent,
      selectors: [["app-perfil-aluno"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵStandaloneFeature"]],
      decls: 123,
      vars: 62,
      consts: [["avatarPlaceholder", ""], ["role", "main", 1, "perfil-page"], [1, "perfil-page__header"], ["aria-label", "Voltar ao dashboard", 1, "perfil-page__voltar", 3, "routerLink"], [1, "perfil-page__titulo"], [1, "perfil-page__subtitulo"], [1, "perfil-layout"], ["aria-label", "Foto de perfil", 1, "perfil-avatar-col"], [1, "avatar-wrap"], [1, "avatar-img-wrap"], ["class", "avatar-img", 3, "src", "alt", 4, "ngIf", "ngIfElse"], ["for", "input-avatar", "aria-label", "Alterar foto de perfil", "title", "Alterar foto", 1, "avatar-camera-btn"], ["id", "input-avatar", "type", "file", "accept", "image/jpeg,image/png,image/webp", "aria-label", "Selecionar imagem de perfil", 1, "avatar-input-hidden", 3, "change"], [1, "avatar-nome"], ["class", "avatar-erro", "role", "alert", 4, "ngIf"], ["class", "btn-remover-avatar", "type", "button", "aria-label", "Remover foto de perfil", 3, "click", 4, "ngIf"], [1, "avatar-dica"], ["aria-label", "Dados do perfil", 1, "perfil-form-col"], ["class", "perfil-sucesso", "role", "status", "aria-live", "polite", 4, "ngIf"], ["novalidate", "", "aria-label", "Formul\u00E1rio de perfil", 3, "ngSubmit", "formGroup"], [1, "perfil-secao"], [1, "perfil-secao__titulo"], [1, "campo-grupo", "campo-grupo--full"], ["for", "nomeCompleto", 1, "campo-grupo__label"], ["id", "nomeCompleto", "type", "text", "formControlName", "nomeCompleto", "placeholder", "Seu nome completo", "autocomplete", "name", "aria-required", "true", "aria-describedby", "nomeCompleto-erro", 1, "campo-grupo__input"], ["id", "nomeCompleto-erro", "class", "campo-grupo__erro", "role", "alert", 4, "ngIf"], [1, "campos-linha"], [1, "campo-grupo"], ["for", "email", 1, "campo-grupo__label"], ["id", "email", "type", "email", "formControlName", "email", "placeholder", "seu@email.com", "autocomplete", "email", "aria-required", "true", "aria-describedby", "email-erro", 1, "campo-grupo__input"], ["id", "email-erro", "class", "campo-grupo__erro", "role", "alert", 4, "ngIf"], ["for", "telefone", 1, "campo-grupo__label"], ["id", "telefone", "type", "tel", "formControlName", "telefone", "placeholder", "(11) 99999-9999", "autocomplete", "tel", "aria-required", "true", "aria-describedby", "telefone-erro", 1, "campo-grupo__input"], ["id", "telefone-erro", "class", "campo-grupo__erro", "role", "alert", 4, "ngIf"], ["for", "cpf", 1, "campo-grupo__label"], ["id", "cpf", "type", "text", "formControlName", "cpf", "placeholder", "000.000.000-00", "autocomplete", "off", "aria-required", "true", "aria-describedby", "cpf-erro", 1, "campo-grupo__input"], ["id", "cpf-erro", "class", "campo-grupo__erro", "role", "alert", 4, "ngIf"], ["for", "dataNascimento", 1, "campo-grupo__label"], ["id", "dataNascimento", "type", "date", "formControlName", "dataNascimento", "aria-required", "true", "aria-describedby", "dataNascimento-erro", 1, "campo-grupo__input"], ["id", "dataNascimento-erro", "class", "campo-grupo__erro", "role", "alert", 4, "ngIf"], ["formGroupName", "endereco", 1, "perfil-secao"], [1, "campo-grupo", "campo-grupo--cep"], ["for", "cep", 1, "campo-grupo__label"], [1, "campo-grupo__cep-wrap"], ["id", "cep", "type", "text", "formControlName", "cep", "placeholder", "00000-000", "maxlength", "9", "aria-required", "true", "aria-describedby", "cep-erro", 1, "campo-grupo__input", 3, "blur"], ["class", "campo-grupo__cep-spinner", "aria-label", "Buscando CEP...", "role", "status", 4, "ngIf"], ["id", "cep-erro", "role", "alert", 1, "campo-grupo__erro"], [4, "ngIf"], [1, "campo-grupo", "campo-grupo--logradouro"], ["for", "logradouro", 1, "campo-grupo__label"], ["id", "logradouro", "type", "text", "formControlName", "logradouro", "placeholder", "Rua, Avenida...", "aria-required", "true", 1, "campo-grupo__input"], ["class", "campo-grupo__erro", "role", "alert", 4, "ngIf"], [1, "campo-grupo", "campo-grupo--numero"], ["for", "numero", 1, "campo-grupo__label"], ["id", "numero", "type", "text", "formControlName", "numero", "placeholder", "123", "aria-required", "true", 1, "campo-grupo__input"], ["for", "complemento", 1, "campo-grupo__label"], ["id", "complemento", "type", "text", "formControlName", "complemento", "placeholder", "Apto, Bloco...", 1, "campo-grupo__input"], ["for", "bairro", 1, "campo-grupo__label"], ["id", "bairro", "type", "text", "formControlName", "bairro", "placeholder", "Nome do bairro", "aria-required", "true", 1, "campo-grupo__input"], ["for", "cidade", 1, "campo-grupo__label"], ["id", "cidade", "type", "text", "formControlName", "cidade", "placeholder", "Nome da cidade", "aria-required", "true", 1, "campo-grupo__input"], [1, "campo-grupo", "campo-grupo--estado"], ["for", "estado", 1, "campo-grupo__label"], ["id", "estado", "formControlName", "estado", "aria-required", "true", 1, "campo-grupo__input"], ["value", ""], [3, "value", 4, "ngFor", "ngForOf"], ["for", "observacoes", 1, "campo-grupo__label"], ["id", "observacoes", "formControlName", "observacoes", "placeholder", "Alguma informa\u00E7\u00E3o adicional que queira compartilhar...", "rows", "3", 1, "campo-grupo__input", "campo-grupo__textarea"], [1, "campo-grupo", "campo-grupo--checkbox"], [1, "checkbox-label"], ["type", "checkbox", "formControlName", "receberEmails"], [1, "perfil-acoes"], ["type", "button", "aria-label", "Cancelar e voltar ao dashboard", 1, "btn-cancelar", 3, "routerLink"], ["type", "submit", "aria-label", "Salvar altera\u00E7\u00F5es do perfil", 1, "btn-salvar", 3, "disabled"], ["class", "btn-salvar__spinner", "aria-hidden", "true", 4, "ngIf"], ["class", "sr-only", 4, "ngIf"], [1, "avatar-img", 3, "src", "alt"], ["aria-hidden", "true", 1, "avatar-placeholder"], ["role", "alert", 1, "avatar-erro"], ["type", "button", "aria-label", "Remover foto de perfil", 1, "btn-remover-avatar", 3, "click"], ["role", "status", "aria-live", "polite", 1, "perfil-sucesso"], ["id", "nomeCompleto-erro", "role", "alert", 1, "campo-grupo__erro"], ["id", "email-erro", "role", "alert", 1, "campo-grupo__erro"], ["id", "telefone-erro", "role", "alert", 1, "campo-grupo__erro"], ["id", "cpf-erro", "role", "alert", 1, "campo-grupo__erro"], ["id", "dataNascimento-erro", "role", "alert", 1, "campo-grupo__erro"], ["aria-label", "Buscando CEP...", "role", "status", 1, "campo-grupo__cep-spinner"], ["role", "alert", 1, "campo-grupo__erro"], [3, "value"], ["aria-hidden", "true", 1, "btn-salvar__spinner"], [1, "sr-only"]],
      template: function PerfilAlunoComponent_Template(rf, ctx) {
        if (rf & 1) {
          const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 1)(1, "header", 2)(2, "a", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, " \u2190 Dashboard ");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "h1", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, "Meu Perfil");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "p", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7, "Mantenha seus dados atualizados");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "div", 6)(9, "aside", 7)(10, "div", 8)(11, "div", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](12, PerfilAlunoComponent_img_12_Template, 1, 3, "img", 10)(13, PerfilAlunoComponent_ng_template_13_Template, 2, 1, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplateRefExtractor"]);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "label", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](16, " \uD83D\uDCF7 ");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "input", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("change", function PerfilAlunoComponent_Template_input_change_17_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx.onArquivoSelecionado($event));
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "p", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](19);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](20, PerfilAlunoComponent_p_20_Template, 2, 1, "p", 14)(21, PerfilAlunoComponent_button_21_Template, 2, 0, "button", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](22, "p", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](23, "JPG, PNG ou WEBP \u00B7 M\u00E1x. 2 MB");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](24, "section", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](25, PerfilAlunoComponent_div_25_Template, 2, 0, "div", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](26, "form", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngSubmit", function PerfilAlunoComponent_Template_form_ngSubmit_26_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx.salvar());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](27, "fieldset", 20)(28, "legend", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](29, "Dados Pessoais");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](30, "div", 22)(31, "label", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](32, "Nome Completo *");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](33, "input", 24);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](34, PerfilAlunoComponent_span_34_Template, 3, 2, "span", 25);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](35, "div", 26)(36, "div", 27)(37, "label", 28);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](38, "E-mail *");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](39, "input", 29);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](40, PerfilAlunoComponent_span_40_Template, 3, 2, "span", 30);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](41, "div", 27)(42, "label", 31);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](43, "Telefone *");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](44, "input", 32);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](45, PerfilAlunoComponent_span_45_Template, 2, 0, "span", 33);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](46, "div", 26)(47, "div", 27)(48, "label", 34);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](49, "CPF *");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](50, "input", 35);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](51, PerfilAlunoComponent_span_51_Template, 2, 0, "span", 36);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](52, "div", 27)(53, "label", 37);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](54, "Data de Nascimento *");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](55, "input", 38);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](56, PerfilAlunoComponent_span_56_Template, 2, 0, "span", 39);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](57, "fieldset", 40)(58, "legend", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](59, "Endere\u00E7o");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](60, "div", 26)(61, "div", 41)(62, "label", 42);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](63, "CEP *");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](64, "div", 43)(65, "input", 44);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("blur", function PerfilAlunoComponent_Template_input_blur_65_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx.buscarCep());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](66, PerfilAlunoComponent_span_66_Template, 1, 0, "span", 45);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](67, "span", 46);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](68, PerfilAlunoComponent_span_68_Template, 2, 0, "span", 47)(69, PerfilAlunoComponent_span_69_Template, 2, 0, "span", 47);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](70, "div", 48)(71, "label", 49);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](72, "Logradouro *");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](73, "input", 50);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](74, PerfilAlunoComponent_span_74_Template, 2, 0, "span", 51);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](75, "div", 26)(76, "div", 52)(77, "label", 53);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](78, "N\u00FAmero *");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](79, "input", 54);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](80, PerfilAlunoComponent_span_80_Template, 2, 0, "span", 51);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](81, "div", 27)(82, "label", 55);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](83, "Complemento");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](84, "input", 56);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](85, "div", 27)(86, "label", 57);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](87, "Bairro *");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](88, "input", 58);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](89, PerfilAlunoComponent_span_89_Template, 2, 0, "span", 51);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](90, "div", 26)(91, "div", 27)(92, "label", 59);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](93, "Cidade *");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](94, "input", 60);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](95, PerfilAlunoComponent_span_95_Template, 2, 0, "span", 51);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](96, "div", 61)(97, "label", 62);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](98, "Estado *");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](99, "select", 63)(100, "option", 64);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](101, "Selecione");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](102, PerfilAlunoComponent_option_102_Template, 2, 2, "option", 65);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](103, PerfilAlunoComponent_span_103_Template, 2, 0, "span", 51);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](104, "fieldset", 20)(105, "legend", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](106, "Prefer\u00EAncias");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](107, "div", 22)(108, "label", 66);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](109, "Observa\u00E7\u00F5es");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](110, "textarea", 67);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](111, "div", 68)(112, "label", 69);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](113, "input", 70);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](114, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](115, "Desejo receber novidades e informa\u00E7\u00F5es sobre novos cursos por e-mail");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](116, "div", 71)(117, "button", 72);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](118, " Cancelar ");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](119, "button", 73);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](120, PerfilAlunoComponent_span_120_Template, 2, 0, "span", 47)(121, PerfilAlunoComponent_span_121_Template, 1, 0, "span", 74)(122, PerfilAlunoComponent_span_122_Template, 2, 0, "span", 75);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()();
        }
        if (rf & 2) {
          const avatarPlaceholder_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](14);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](60, _c0));
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](10);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.avatarPreview)("ngIfElse", avatarPlaceholder_r5);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.nomeUsuario);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.erroAvatar);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.avatarPreview);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.salvoComSucesso);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx.formulario);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("campo-grupo__input--erro", ctx.invalido("nomeCompleto"));
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵattribute"]("aria-invalid", ctx.invalido("nomeCompleto") ? "true" : null);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.invalido("nomeCompleto"));
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("campo-grupo__input--erro", ctx.invalido("email"));
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵattribute"]("aria-invalid", ctx.invalido("email") ? "true" : null);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.invalido("email"));
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("campo-grupo__input--erro", ctx.invalido("telefone"));
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵattribute"]("aria-invalid", ctx.invalido("telefone") ? "true" : null);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.invalido("telefone"));
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("campo-grupo__input--erro", ctx.invalido("cpf"));
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵattribute"]("aria-invalid", ctx.invalido("cpf") ? "true" : null);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.invalido("cpf"));
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("campo-grupo__input--erro", ctx.invalido("dataNascimento"));
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵattribute"]("aria-invalid", ctx.invalido("dataNascimento") ? "true" : null);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.invalido("dataNascimento"));
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](9);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("campo-grupo__input--erro", ctx.invalido("endereco.cep"));
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵattribute"]("aria-invalid", ctx.invalido("endereco.cep") ? "true" : null);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.buscandoCep);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.invalido("endereco.cep"));
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.erroCep && !ctx.buscandoCep);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("campo-grupo__input--erro", ctx.invalido("endereco.logradouro"));
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵattribute"]("aria-invalid", ctx.invalido("endereco.logradouro") ? "true" : null);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.invalido("endereco.logradouro"));
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("campo-grupo__input--erro", ctx.invalido("endereco.numero"));
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵattribute"]("aria-invalid", ctx.invalido("endereco.numero") ? "true" : null);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.invalido("endereco.numero"));
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](8);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("campo-grupo__input--erro", ctx.invalido("endereco.bairro"));
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵattribute"]("aria-invalid", ctx.invalido("endereco.bairro") ? "true" : null);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.invalido("endereco.bairro"));
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("campo-grupo__input--erro", ctx.invalido("endereco.cidade"));
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵattribute"]("aria-invalid", ctx.invalido("endereco.cidade") ? "true" : null);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.invalido("endereco.cidade"));
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("campo-grupo__input--erro", ctx.invalido("endereco.estado"));
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵattribute"]("aria-invalid", ctx.invalido("endereco.estado") ? "true" : null);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.estados);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.invalido("endereco.estado"));
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](14);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](61, _c0));
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", ctx.salvando);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.salvando);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.salvando);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.salvando);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.ReactiveFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.CheckboxControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.MaxLengthValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControlName, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormGroupName, _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterModule, _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterLink],
      styles: ["[_nghost-%COMP%] {\n  display: block;\n}\n\n.perfil-page[_ngcontent-%COMP%] {\n  max-width: 1100px;\n  margin: 0 auto;\n  padding: 0 1.5rem 3rem;\n}\n.perfil-page__header[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, #2c5aa0 0%, #1e3d6f 100%);\n  color: #fff;\n  border-radius: 0 0 1rem 1rem;\n  margin: 0 -1.5rem 2rem;\n  padding: 2rem 1.5rem;\n}\n.perfil-page__voltar[_ngcontent-%COMP%] {\n  display: inline-block;\n  color: #a8c8f8;\n  font-size: 0.875rem;\n  text-decoration: none;\n  margin-bottom: 0.75rem;\n}\n.perfil-page__voltar[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n.perfil-page__voltar[_ngcontent-%COMP%]:focus-visible {\n  outline: 2px solid #a8c8f8;\n  border-radius: 3px;\n}\n.perfil-page__titulo[_ngcontent-%COMP%] {\n  font-size: 1.6rem;\n  margin: 0 0 0.25rem;\n}\n.perfil-page__subtitulo[_ngcontent-%COMP%] {\n  margin: 0;\n  opacity: 0.85;\n  font-size: 0.95rem;\n}\n\n.perfil-layout[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 220px 1fr;\n  gap: 2rem;\n  align-items: start;\n}\n@media (max-width: 768px) {\n  .perfil-layout[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n\n.perfil-avatar-col[_ngcontent-%COMP%] {\n  position: sticky;\n  top: 80px;\n}\n\n.avatar-wrap[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 0.75rem;\n  background: #fff;\n  border-radius: 16px;\n  padding: 1.5rem 1rem;\n  box-shadow: 0 3px 12px rgba(44, 90, 160, 0.08);\n  text-align: center;\n}\n\n.avatar-img-wrap[_ngcontent-%COMP%] {\n  position: relative;\n  width: 120px;\n  height: 120px;\n}\n\n.avatar-img[_ngcontent-%COMP%] {\n  width: 120px;\n  height: 120px;\n  border-radius: 50%;\n  object-fit: cover;\n  border: 3px solid #e0e8f5;\n  display: block;\n}\n\n.avatar-placeholder[_ngcontent-%COMP%] {\n  width: 120px;\n  height: 120px;\n  border-radius: 50%;\n  background: linear-gradient(135deg, #2c5aa0, #4a90d9);\n  color: #fff;\n  font-size: 3rem;\n  font-weight: 700;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border: 3px solid #e0e8f5;\n  -webkit-user-select: none;\n          user-select: none;\n}\n\n.avatar-camera-btn[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 4px;\n  right: 4px;\n  width: 32px;\n  height: 32px;\n  border-radius: 50%;\n  background: #2c5aa0;\n  color: #fff;\n  font-size: 0.85rem;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  border: 2px solid #fff;\n  transition: background 0.2s;\n}\n.avatar-camera-btn[_ngcontent-%COMP%]:hover {\n  background: #1e3d6f;\n}\n.avatar-camera-btn[_ngcontent-%COMP%]:focus-visible {\n  outline: 3px solid #2c5aa0;\n  outline-offset: 2px;\n}\n\n.avatar-input-hidden[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  opacity: 0;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0);\n}\n\n.avatar-nome[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: #1a1a2e;\n  margin: 0;\n  font-size: 0.95rem;\n}\n\n.avatar-dica[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  color: #aaa;\n  margin: 0;\n}\n\n.avatar-erro[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  color: #c62828;\n  margin: 0;\n}\n\n.btn-remover-avatar[_ngcontent-%COMP%] {\n  background: none;\n  border: 1px solid #e0e0e0;\n  border-radius: 6px;\n  padding: 0.35rem 0.75rem;\n  font-size: 0.78rem;\n  color: #c62828;\n  cursor: pointer;\n  transition: background 0.2s;\n}\n.btn-remover-avatar[_ngcontent-%COMP%]:hover {\n  background: #fff2f2;\n}\n.btn-remover-avatar[_ngcontent-%COMP%]:focus-visible {\n  outline: 2px solid #c62828;\n  outline-offset: 2px;\n}\n\n.perfil-form-col[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0;\n}\n\n.perfil-sucesso[_ngcontent-%COMP%] {\n  background: #e8f7ee;\n  border: 1px solid #a5d6b7;\n  color: #1e7e34;\n  border-radius: 8px;\n  padding: 0.85rem 1rem;\n  font-size: 0.9rem;\n  margin-bottom: 1.25rem;\n  animation: _ngcontent-%COMP%_fadeIn 0.3s ease;\n}\n\n.perfil-secao[_ngcontent-%COMP%] {\n  border: 1px solid #e8edf5;\n  border-radius: 12px;\n  padding: 1.5rem;\n  margin-bottom: 1.25rem;\n  background: #fff;\n  box-shadow: 0 2px 8px rgba(44, 90, 160, 0.05);\n  min-width: 0;\n}\n.perfil-secao__titulo[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  font-weight: 700;\n  color: #2c5aa0;\n  margin: 0 0 1.25rem;\n  padding-bottom: 0.6rem;\n  border-bottom: 2px solid #e8edf5;\n  display: block;\n  width: 100%;\n}\n\n.campos-linha[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));\n  gap: 1rem;\n  margin-bottom: 1rem;\n}\n.campos-linha[_ngcontent-%COMP%]:last-child {\n  margin-bottom: 0;\n}\n\n.campo-grupo[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.35rem;\n}\n.campo-grupo--full[_ngcontent-%COMP%] {\n  grid-column: 1/-1;\n}\n.campo-grupo--cep[_ngcontent-%COMP%] {\n  max-width: 140px;\n}\n.campo-grupo--numero[_ngcontent-%COMP%] {\n  max-width: 100px;\n}\n.campo-grupo--estado[_ngcontent-%COMP%] {\n  max-width: 110px;\n}\n.campo-grupo__label[_ngcontent-%COMP%] {\n  font-size: 0.85rem;\n  font-weight: 600;\n  color: #444;\n}\n.campo-grupo__input[_ngcontent-%COMP%] {\n  padding: 0.65rem 0.85rem;\n  border: 1.5px solid #dde2ee;\n  border-radius: 8px;\n  font-size: 0.95rem;\n  color: #1a1a2e;\n  background: #fafbfd;\n  transition: border-color 0.2s, box-shadow 0.2s;\n  width: 100%;\n  box-sizing: border-box;\n}\n.campo-grupo__input[_ngcontent-%COMP%]::placeholder {\n  color: #bbb;\n}\n.campo-grupo__input[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #2c5aa0;\n  box-shadow: 0 0 0 3px rgba(44, 90, 160, 0.12);\n  background: #fff;\n}\n.campo-grupo__input--erro[_ngcontent-%COMP%] {\n  border-color: #e53935;\n  background: #fff8f8;\n}\n.campo-grupo__input--erro[_ngcontent-%COMP%]:focus {\n  border-color: #c62828;\n  box-shadow: 0 0 0 3px rgba(229, 57, 53, 0.12);\n}\n.campo-grupo__textarea[_ngcontent-%COMP%] {\n  resize: vertical;\n  min-height: 80px;\n}\n.campo-grupo__erro[_ngcontent-%COMP%] {\n  font-size: 0.78rem;\n  color: #c62828;\n  min-height: 1rem;\n}\n.campo-grupo__cep-wrap[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  align-items: center;\n}\n.campo-grupo__cep-spinner[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 0.75rem;\n  width: 16px;\n  height: 16px;\n  border: 2px solid rgba(44, 90, 160, 0.2);\n  border-top-color: #2c5aa0;\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_spin 0.7s linear infinite;\n}\n.campo-grupo--checkbox[_ngcontent-%COMP%] {\n  margin-top: 0.5rem;\n}\n\n.checkbox-label[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 0.75rem;\n  font-size: 0.9rem;\n  color: #444;\n  cursor: pointer;\n  line-height: 1.45;\n}\n.checkbox-label[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%] {\n  margin-top: 2px;\n  accent-color: #2c5aa0;\n  width: 16px;\n  height: 16px;\n  flex-shrink: 0;\n  cursor: pointer;\n}\n\n.perfil-acoes[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  gap: 1rem;\n  margin-top: 0.5rem;\n  flex-wrap: wrap;\n}\n\n.btn-salvar[_ngcontent-%COMP%], .btn-cancelar[_ngcontent-%COMP%] {\n  padding: 0.75rem 1.75rem;\n  border-radius: 8px;\n  font-size: 0.95rem;\n  font-weight: 600;\n  cursor: pointer;\n  border: none;\n  display: inline-flex;\n  align-items: center;\n  gap: 0.4rem;\n  transition: background 0.2s, opacity 0.2s;\n  text-decoration: none;\n}\n.btn-salvar[_ngcontent-%COMP%]:focus-visible, .btn-cancelar[_ngcontent-%COMP%]:focus-visible {\n  outline: 3px solid #2c5aa0;\n  outline-offset: 2px;\n}\n\n.btn-salvar[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, #2c5aa0, #1e3d6f);\n  color: #fff;\n  min-width: 170px;\n  justify-content: center;\n}\n.btn-salvar[_ngcontent-%COMP%]:hover:not(:disabled) {\n  opacity: 0.9;\n}\n.btn-salvar[_ngcontent-%COMP%]:disabled {\n  opacity: 0.65;\n  cursor: not-allowed;\n}\n.btn-salvar__spinner[_ngcontent-%COMP%] {\n  width: 18px;\n  height: 18px;\n  border: 2.5px solid rgba(255, 255, 255, 0.3);\n  border-top-color: #fff;\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_spin 0.7s linear infinite;\n}\n\n.btn-cancelar[_ngcontent-%COMP%] {\n  background: #e8edf5;\n  color: #2c5aa0;\n}\n.btn-cancelar[_ngcontent-%COMP%]:hover {\n  background: #d0daea;\n}\n\n.sr-only[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  padding: 0;\n  margin: -1px;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0);\n  white-space: nowrap;\n  border: 0;\n}\n\n@keyframes _ngcontent-%COMP%_fadeIn {\n  from {\n    opacity: 0;\n    transform: translateY(-4px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n@keyframes _ngcontent-%COMP%_spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n@media (max-width: 768px) {\n  .perfil-avatar-col[_ngcontent-%COMP%] {\n    position: static;\n  }\n  .perfil-acoes[_ngcontent-%COMP%] {\n    justify-content: stretch;\n  }\n  .btn-salvar[_ngcontent-%COMP%], .btn-cancelar[_ngcontent-%COMP%] {\n    flex: 1;\n    justify-content: center;\n  }\n  .campo-grupo--cep[_ngcontent-%COMP%], .campo-grupo--numero[_ngcontent-%COMP%], .campo-grupo--estado[_ngcontent-%COMP%] {\n    max-width: 100%;\n  }\n}"]
    });
  }
  return PerfilAlunoComponent;
})();

/***/ }),

/***/ 1538:
/*!*******************************************************!*\
  !*** ./src/app/area-aluno/services/perfil.service.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PerfilService: () => (/* binding */ PerfilService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 4412);
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auth.service */ 5722);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7705);




const PERFIL_KEY_PREFIX = 'ce_perfil_';
const PERFIL_VAZIO = {
  nomeCompleto: '',
  telefone: '',
  cpf: '',
  dataNascimento: '',
  endereco: {
    cep: '',
    logradouro: '',
    numero: '',
    complemento: '',
    bairro: '',
    cidade: '',
    estado: ''
  },
  receberEmails: false,
  observacoes: ''
};
let PerfilService = /*#__PURE__*/(() => {
  class PerfilService {
    authService;
    perfilSubject;
    perfil$;
    constructor(authService) {
      this.authService = authService;
      this.perfilSubject = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject(this.lerStorage());
      this.perfil$ = this.perfilSubject.asObservable();
    }
    get perfilAtual() {
      return this.perfilSubject.getValue();
    }
    /**
     * Salva o perfil completo, incluindo o avatar se fornecido.
     * Mescla com dados de sessão do AuthService para manter coerência.
     */
    salvar(dados) {
      const usuario = this.authService.usuarioAtual;
      if (!usuario) return;
      const atual = this.perfilAtual ?? {
        ...PERFIL_VAZIO,
        id: usuario.id,
        nome: usuario.nome,
        email: usuario.email
      };
      // CORREÇÃO TS2322: garantir email: string explicitamente.
      // O spread de `dados` (Partial<PerfilAluno>) pode trazer email?: string,
      // mas PerfilAluno exige email: string. O fallback para atual.email
      // (que é sempre string) resolve o conflito.
      const atualizado = {
        ...atual,
        ...dados,
        email: dados.email ?? atual.email
      };
      // Persiste no localStorage
      localStorage.setItem(this.chave(), JSON.stringify(atualizado));
      this.perfilSubject.next(atualizado);
      // Sincroniza nome e avatar no AuthService / localStorage de sessão
      if (dados.nomeCompleto) {
        const usuarioAtualizado = {
          ...usuario,
          nome: dados.nomeCompleto,
          avatarUrl: atualizado.avatarBase64 ?? usuario.avatarUrl
        };
        localStorage.setItem('ce_usuario_logado', JSON.stringify(usuarioAtualizado));
      }
    }
    /**
     * Salva apenas o avatar (base64) sem tocar nos outros campos.
     * Chamado separadamente pelo seletor de imagem.
     */
    salvarAvatar(base64) {
      this.salvar({
        avatarBase64: base64
      });
    }
    /**
     * Pré-popula o perfil com dados vindos de uma inscrição de curso.
     * Útil para que o aluno não precise redigitar dados já informados.
     */
    prePopularDaInscricao(dados) {
      // Só preenche se o perfil ainda não tem dados (primeira inscrição)
      if (this.perfilAtual?.nomeCompleto) return;
      this.salvar(dados);
    }
    lerStorage() {
      const usuario = this.authService.usuarioAtual;
      if (!usuario) return null;
      try {
        const raw = localStorage.getItem(this.chave());
        return raw ? JSON.parse(raw) : null;
      } catch {
        return null;
      }
    }
    chave() {
      return `${PERFIL_KEY_PREFIX}${this.authService.usuarioAtual?.id ?? 'anonimo'}`;
    }
    static ɵfac = function PerfilService_Factory(t) {
      return new (t || PerfilService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService));
    };
    static ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
      token: PerfilService,
      factory: PerfilService.ɵfac,
      providedIn: 'root'
    });
  }
  return PerfilService;
})();

/***/ })

}]);