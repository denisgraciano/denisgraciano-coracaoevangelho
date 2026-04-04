"use strict";
(self["webpackChunklivro_dos_espiritos_app"] = self["webpackChunklivro_dos_espiritos_app"] || []).push([[624],{

/***/ 1624:
/*!*****************************************************************!*\
  !*** ./src/app/area-admin/usuarios/lista-usuarios.component.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ListaUsuariosComponent: () => (/* binding */ ListaUsuariosComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 177);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 9417);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 8530);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 6977);
/* harmony import */ var _services_admin_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/admin.service */ 1851);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7705);









function ListaUsuariosComponent_div_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Carregando usu\u00E1rios...");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
}
function ListaUsuariosComponent_div_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("\u26A0\uFE0F ", ctx_r0.erro, "");
  }
}
function ListaUsuariosComponent_div_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("\u2705 ", ctx_r0.sucesso, "");
  }
}
function ListaUsuariosComponent_div_10_img_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "img", 43);
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", ctx_r0.usuarioEmEdicao.avatarUrl, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"])("alt", ctx_r0.usuarioEmEdicao.nome);
  }
}
function ListaUsuariosComponent_div_10_span_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r0.inicial(ctx_r0.usuarioEmEdicao.nome), " ");
  }
}
function ListaUsuariosComponent_div_10_div_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("\u26A0\uFE0F ", ctx_r0.erro, "");
  }
}
function ListaUsuariosComponent_div_10_span_25_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Nome obrigat\u00F3rio (m\u00EDnimo 2 caracteres) ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function ListaUsuariosComponent_div_10_span_32_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " E-mail obrigat\u00F3rio e deve ser v\u00E1lido ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function ListaUsuariosComponent_div_10_small_49_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "small", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " \u26A0\uFE0F Permiss\u00E3o de administrador d\u00E1 acesso total ao painel. Use com cautela. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function ListaUsuariosComponent_div_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 13)(1, "div", 14)(2, "header", 15)(3, "h2", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Editar Usu\u00E1rio");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ListaUsuariosComponent_div_10_Template_button_click_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r2);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r0.fecharModal());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "\u2715");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 18)(8, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, ListaUsuariosComponent_div_10_img_9_Template, 1, 2, "img", 20)(10, ListaUsuariosComponent_div_10_span_10_Template, 2, 1, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div")(12, "p", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "p", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](16, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](17, ListaUsuariosComponent_div_10_div_17_Template, 2, 1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "form", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function ListaUsuariosComponent_div_10_Template_form_ngSubmit_18_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r2);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r0.salvar());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 25)(20, "label", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, " Nome ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "span", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](24, "input", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](25, ListaUsuariosComponent_div_10_span_25_Template, 2, 0, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "div", 25)(27, "label", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, " E-mail ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "span", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](31, "input", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](32, ListaUsuariosComponent_div_10_span_32_Template, 2, 0, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "div", 25)(34, "label", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](35, "URL do Avatar");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](36, "input", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "small", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](38, "Deixe em branco para remover o avatar atual.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "div", 25)(40, "label", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](41, " Perfil de acesso ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "span", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](43, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "select", 36)(45, "option", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](46, "\uD83C\uDF93 Aluno \u2014 acesso somente \u00E0 \u00E1rea do aluno");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "option", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](48, "\uD83D\uDD11 Admin \u2014 acesso completo ao painel administrativo");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](49, ListaUsuariosComponent_div_10_small_49_Template, 2, 0, "small", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "div", 40)(51, "button", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ListaUsuariosComponent_div_10_Template_button_click_51_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r2);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r0.fecharModal());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](52, "Cancelar");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](53, "button", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](54);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("aria-label", "Editar usu\u00E1rio " + ctx_r0.usuarioEmEdicao.nome);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.usuarioEmEdicao.avatarUrl);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r0.usuarioEmEdicao.avatarUrl);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.usuarioEmEdicao.email);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" Cadastrado em ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](16, 17, ctx_r0.usuarioEmEdicao.dataCadastro, "dd/MM/yyyy"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.erro);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx_r0.form);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("invalido", ctx_r0.f["nome"].invalid && ctx_r0.f["nome"].touched);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.f["nome"].invalid && ctx_r0.f["nome"].touched);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("invalido", ctx_r0.f["email"].invalid && ctx_r0.f["email"].touched);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.f["email"].invalid && ctx_r0.f["email"].touched);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.f["role"].value === "admin");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx_r0.salvando);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx_r0.salvando);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r0.salvando ? "Salvando..." : "Salvar altera\u00E7\u00F5es", " ");
  }
}
function ListaUsuariosComponent_div_11_p_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Nenhum usu\u00E1rio cadastrado.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function ListaUsuariosComponent_div_11_div_2_tr_15_img_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "img", 43);
  }
  if (rf & 2) {
    const u_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", u_r4.avatarUrl, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"])("alt", u_r4.nome);
  }
}
function ListaUsuariosComponent_div_11_div_2_tr_15_span_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const u_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.inicial(u_r4.nome));
  }
}
function ListaUsuariosComponent_div_11_div_2_tr_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr")(1, "td")(2, "div", 54)(3, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, ListaUsuariosComponent_div_11_div_2_tr_15_img_4_Template, 1, 2, "img", 20)(5, ListaUsuariosComponent_div_11_div_2_tr_15_span_5_Template, 2, 1, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "td", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "td")(11, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "td")(14, "span", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](16, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "td")(18, "button", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ListaUsuariosComponent_div_11_div_2_tr_15_Template_button_click_18_listener() {
      const u_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r3).$implicit;
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r0.abrirEdicao(u_r4));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "\u270F\uFE0F");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const u_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", u_r4.avatarUrl);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !u_r4.avatarUrl);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](u_r4.nome);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](u_r4.email);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMap"](u_r4.role === "admin" ? "badge badge--admin" : "badge badge--aluno");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", u_r4.role === "admin" ? "\uD83D\uDD11 Admin" : "\uD83C\uDF93 Aluno", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](16, 9, u_r4.dataCadastro, "dd/MM/yyyy"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("aria-label", "Editar usu\u00E1rio " + u_r4.nome);
  }
}
function ListaUsuariosComponent_div_11_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 50)(1, "table", 51)(2, "thead")(3, "tr")(4, "th", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Usu\u00E1rio");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "th", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "E-mail");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "th", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Perfil");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "th", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Cadastro");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "th", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "A\u00E7\u00F5es");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](15, ListaUsuariosComponent_div_11_div_2_tr_15_Template, 20, 12, "tr", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r0.resultado.items);
  }
}
function ListaUsuariosComponent_div_11_nav_3_button_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ListaUsuariosComponent_div_11_nav_3_button_3_Template_button_click_0_listener() {
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
function ListaUsuariosComponent_div_11_nav_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "nav", 59)(1, "button", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ListaUsuariosComponent_div_11_nav_3_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r5);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r0.irPagina(ctx_r0.paginaAtual - 1));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "\u2190");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, ListaUsuariosComponent_div_11_nav_3_button_3_Template, 2, 5, "button", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "button", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ListaUsuariosComponent_div_11_nav_3_Template_button_click_4_listener() {
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
function ListaUsuariosComponent_div_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, ListaUsuariosComponent_div_11_p_1_Template, 2, 0, "p", 46)(2, ListaUsuariosComponent_div_11_div_2_Template, 16, 1, "div", 47)(3, ListaUsuariosComponent_div_11_nav_3_Template, 6, 3, "nav", 48);
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
let ListaUsuariosComponent = /*#__PURE__*/(() => {
  class ListaUsuariosComponent {
    adminService;
    fb;
    destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__.Subject();
    resultado = null;
    carregando = true;
    erro = '';
    sucesso = '';
    paginaAtual = 1;
    tamanhoPagina = 20;
    // ── Estado do modal de edição ────────────────────────────────
    usuarioEmEdicao = null;
    salvando = false;
    form;
    constructor(adminService, fb) {
      this.adminService = adminService;
      this.fb = fb;
    }
    ngOnInit() {
      this.form = this.fb.group({
        nome: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.minLength(2)]],
        email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.email]],
        avatarUrl: [null],
        role: ['aluno', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]
      });
      this.carregar();
    }
    ngOnDestroy() {
      this.destroy$.next();
      this.destroy$.complete();
    }
    carregar() {
      this.carregando = true;
      this.erro = '';
      this.adminService.getUsuarios(this.paginaAtual, this.tamanhoPagina).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.takeUntil)(this.destroy$)).subscribe({
        next: result => {
          this.resultado = result;
          this.carregando = false;
        },
        error: () => {
          this.erro = 'Erro ao carregar usuários.';
          this.carregando = false;
        }
      });
    }
    // ── Modal ────────────────────────────────────────────────────
    abrirEdicao(usuario) {
      this.usuarioEmEdicao = usuario;
      this.erro = '';
      this.sucesso = '';
      this.form.setValue({
        nome: usuario.nome,
        email: usuario.email,
        avatarUrl: usuario.avatarUrl ?? null,
        role: usuario.role
      });
    }
    fecharModal() {
      this.usuarioEmEdicao = null;
      this.form.reset();
    }
    salvar() {
      if (this.form.invalid || !this.usuarioEmEdicao) {
        this.form.markAllAsTouched();
        return;
      }
      this.salvando = true;
      this.erro = '';
      const {
        nome,
        email,
        avatarUrl,
        role
      } = this.form.value;
      const payload = {
        nome,
        email,
        avatarUrl: avatarUrl?.trim() || null,
        role
      };
      this.adminService.editarUsuario(this.usuarioEmEdicao.id, payload).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.takeUntil)(this.destroy$)).subscribe({
        next: usuarioAtualizado => {
          // Atualiza o item na lista sem recarregar tudo
          if (this.resultado) {
            this.resultado = {
              ...this.resultado,
              items: this.resultado.items.map(u => u.id === usuarioAtualizado.id ? usuarioAtualizado : u)
            };
          }
          this.salvando = false;
          this.usuarioEmEdicao = null;
          this.sucesso = `Usuário "${usuarioAtualizado.nome}" atualizado com sucesso.`;
          setTimeout(() => this.sucesso = '', 4000);
        },
        error: () => {
          this.erro = 'Erro ao salvar. Verifique os dados e tente novamente.';
          this.salvando = false;
        }
      });
    }
    // ── Paginação ────────────────────────────────────────────────
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
    inicial(nome) {
      return nome?.charAt(0)?.toUpperCase() ?? '?';
    }
    get f() {
      return this.form.controls;
    }
    static ɵfac = function ListaUsuariosComponent_Factory(t) {
      return new (t || ListaUsuariosComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_admin_service__WEBPACK_IMPORTED_MODULE_0__.AdminService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormBuilder));
    };
    static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: ListaUsuariosComponent,
      selectors: [["app-lista-usuarios"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵStandaloneFeature"]],
      decls: 12,
      vars: 6,
      consts: [[1, "admin-page"], [1, "admin-page-header"], [1, "admin-page-titulo"], [1, "admin-page-subtitulo"], ["class", "admin-loading", "role", "status", "aria-live", "polite", 4, "ngIf"], ["class", "admin-alert admin-alert--erro", "role", "alert", 4, "ngIf"], ["class", "admin-alert admin-alert--sucesso", "role", "status", 4, "ngIf"], ["class", "modal-overlay", "role", "dialog", "aria-modal", "true", 4, "ngIf"], [4, "ngIf"], ["role", "status", "aria-live", "polite", 1, "admin-loading"], [1, "admin-loading__spinner"], ["role", "alert", 1, "admin-alert", "admin-alert--erro"], ["role", "status", 1, "admin-alert", "admin-alert--sucesso"], ["role", "dialog", "aria-modal", "true", 1, "modal-overlay"], [1, "modal", "modal--medio"], [1, "modal__cabecalho"], [1, "modal__titulo"], ["aria-label", "Fechar modal", 1, "modal__fechar", 3, "click"], [1, "modal__info-usuario"], ["aria-hidden", "true", 1, "usuario-avatar", "usuario-avatar--modal"], [3, "src", "alt", 4, "ngIf"], ["class", "usuario-avatar__inicial", 4, "ngIf"], [1, "modal__usuario-email"], [1, "modal__usuario-data"], ["novalidate", "", "aria-label", "Formul\u00E1rio de edi\u00E7\u00E3o de usu\u00E1rio", 1, "admin-form", 3, "ngSubmit", "formGroup"], [1, "form-grupo"], ["for", "nome-usuario", 1, "form-label"], ["aria-label", "obrigat\u00F3rio"], ["id", "nome-usuario", "type", "text", "formControlName", "nome", "placeholder", "Nome completo do usu\u00E1rio", "aria-required", "true", 1, "form-input"], ["class", "form-erro", "role", "alert", 4, "ngIf"], ["for", "email-usuario", 1, "form-label"], ["id", "email-usuario", "type", "email", "formControlName", "email", "placeholder", "email@exemplo.com", "aria-required", "true", 1, "form-input"], ["for", "avatar-usuario", 1, "form-label"], ["id", "avatar-usuario", "type", "url", "formControlName", "avatarUrl", "placeholder", "https://... (deixe vazio para remover)", 1, "form-input"], [1, "form-dica"], ["for", "role-usuario", 1, "form-label"], ["id", "role-usuario", "formControlName", "role", "aria-required", "true", 1, "form-input", "form-select"], ["value", "aluno"], ["value", "admin"], ["class", "form-dica", 4, "ngIf"], [1, "modal__acoes"], ["type", "button", 1, "btn", "btn--secundario", 3, "click", "disabled"], ["type", "submit", 1, "btn", "btn--primario", 3, "disabled"], [3, "src", "alt"], [1, "usuario-avatar__inicial"], ["role", "alert", 1, "form-erro"], ["class", "admin-vazio", 4, "ngIf"], ["class", "tabela-container", "role", "region", "aria-label", "Lista de usu\u00E1rios", 4, "ngIf"], ["class", "paginacao", "aria-label", "Navega\u00E7\u00E3o de p\u00E1ginas", 4, "ngIf"], [1, "admin-vazio"], ["role", "region", "aria-label", "Lista de usu\u00E1rios", 1, "tabela-container"], ["aria-label", "Usu\u00E1rios cadastrados", 1, "tabela"], ["scope", "col"], [4, "ngFor", "ngForOf"], [1, "usuario-cell"], ["aria-hidden", "true", 1, "usuario-avatar"], [1, "usuario-email"], [1, "data-texto"], [1, "btn-acao", "btn-acao--editar", 3, "click"], ["aria-label", "Navega\u00E7\u00E3o de p\u00E1ginas", 1, "paginacao"], ["aria-label", "P\u00E1gina anterior", 1, "paginacao__btn", 3, "click", "disabled"], ["class", "paginacao__btn", 3, "ativo", "click", 4, "ngFor", "ngForOf"], ["aria-label", "Pr\u00F3xima p\u00E1gina", 1, "paginacao__btn", 3, "click", "disabled"], [1, "paginacao__btn", 3, "click"]],
      template: function ListaUsuariosComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div")(3, "h1", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Usu\u00E1rios");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "p", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, ListaUsuariosComponent_div_7_Template, 4, 0, "div", 4)(8, ListaUsuariosComponent_div_8_Template, 2, 1, "div", 5)(9, ListaUsuariosComponent_div_9_Template, 2, 1, "div", 6)(10, ListaUsuariosComponent_div_10_Template, 55, 20, "div", 7)(11, ListaUsuariosComponent_div_11_Template, 4, 3, "div", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.resultado ? ctx.resultado.totalItens + " usu\u00E1rios cadastrados" : "Carregando...", " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.carregando);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.erro && !ctx.usuarioEmEdicao);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.sucesso);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.usuarioEmEdicao);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.carregando && ctx.resultado);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_5__.DatePipe, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.ReactiveFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControlName],
      styles: ["@charset \"UTF-8\";\n.admin-page[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 24px;\n}\n\n.admin-page-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  gap: 16px;\n  flex-wrap: wrap;\n}\n\n.admin-page-titulo[_ngcontent-%COMP%] {\n  font-size: 1.4rem;\n  font-weight: 700;\n  color: #1a1f2e;\n  margin: 0;\n}\n\n.admin-page-subtitulo[_ngcontent-%COMP%] {\n  font-size: 0.88rem;\n  color: #666;\n  margin: 4px 0 0;\n}\n\n.admin-card[_ngcontent-%COMP%] {\n  background: #ffffff;\n  border-radius: 12px;\n  border: 1px solid #e8ecf0;\n  padding: 22px;\n  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.05);\n}\n\n.admin-loading[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 12px;\n  padding: 48px;\n  color: #666;\n  font-size: 0.9rem;\n}\n.admin-loading__spinner[_ngcontent-%COMP%] {\n  width: 36px;\n  height: 36px;\n  border: 3px solid #e2e8f0;\n  border-top-color: #4f9cf9;\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_admin-spin 0.8s linear infinite;\n}\n\n@keyframes _ngcontent-%COMP%_admin-spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n.admin-alert[_ngcontent-%COMP%] {\n  padding: 13px 18px;\n  border-radius: 8px;\n  font-size: 0.88rem;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.admin-alert--erro[_ngcontent-%COMP%] {\n  background: rgba(239, 68, 68, 0.07);\n  color: #ec1e1e;\n  border: 1px solid rgba(239, 68, 68, 0.18);\n}\n.admin-alert--sucesso[_ngcontent-%COMP%] {\n  background: rgba(34, 197, 94, 0.08);\n  color: #147739;\n  border: 1px solid rgba(34, 197, 94, 0.2);\n}\n\n.admin-vazio[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 48px;\n  color: #888;\n  font-size: 0.92rem;\n  background: #ffffff;\n  border-radius: 10px;\n  border: 1px dashed #d0d7e0;\n}\n.admin-vazio[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], .admin-vazio[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  color: #4f9cf9;\n}\n\n.btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 9px 18px;\n  border-radius: 8px;\n  font-size: 0.86rem;\n  font-weight: 600;\n  cursor: pointer;\n  border: none;\n  text-decoration: none;\n  transition: opacity 0.2s, transform 0.15s, box-shadow 0.2s;\n  line-height: 1.2;\n}\n.btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.55;\n  cursor: not-allowed;\n  transform: none !important;\n}\n.btn[_ngcontent-%COMP%]:focus-visible {\n  outline: 2px solid #4f9cf9;\n  outline-offset: 2px;\n}\n.btn--primario[_ngcontent-%COMP%] {\n  background: #4f9cf9;\n  color: #ffffff;\n  box-shadow: 0 1px 4px rgba(79, 156, 249, 0.3);\n}\n.btn--primario[_ngcontent-%COMP%]:hover:not(:disabled) {\n  opacity: 0.9;\n  transform: translateY(-1px);\n}\n.btn--secundario[_ngcontent-%COMP%] {\n  background: #f4f6fa;\n  color: #333;\n  border: 1px solid #dde2ea;\n}\n.btn--secundario[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #eaedf2;\n}\n.btn--perigo[_ngcontent-%COMP%] {\n  background: #ef4444;\n  color: #ffffff;\n}\n.btn--perigo[_ngcontent-%COMP%]:hover:not(:disabled) {\n  opacity: 0.88;\n}\n\n.btn-acao[_ngcontent-%COMP%] {\n  width: 32px;\n  height: 32px;\n  border-radius: 6px;\n  border: 1px solid #e8ecf0;\n  background: #f8faff;\n  cursor: pointer;\n  font-size: 0.9rem;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  transition: background 0.15s, border-color 0.15s;\n  text-decoration: none;\n}\n.btn-acao[_ngcontent-%COMP%]:hover {\n  border-color: #c0cbda;\n  background: #f0f4ff;\n}\n.btn-acao[_ngcontent-%COMP%]:focus-visible {\n  outline: 2px solid #4f9cf9;\n  outline-offset: 1px;\n}\n.btn-acao[_ngcontent-%COMP%]:disabled {\n  opacity: 0.4;\n  cursor: not-allowed;\n}\n.btn-acao--excluir[_ngcontent-%COMP%]:hover {\n  background: rgba(239, 68, 68, 0.08);\n  border-color: rgba(239, 68, 68, 0.3);\n}\n.btn-acao--editar[_ngcontent-%COMP%]:hover {\n  background: rgba(79, 156, 249, 0.08);\n  border-color: rgba(79, 156, 249, 0.3);\n}\n.btn-acao--aulas[_ngcontent-%COMP%]:hover {\n  background: rgba(34, 197, 94, 0.08);\n  border-color: rgba(34, 197, 94, 0.3);\n}\n\n.acoes[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 6px;\n  align-items: center;\n}\n\n.tabela-container[_ngcontent-%COMP%] {\n  background: #ffffff;\n  border-radius: 12px;\n  border: 1px solid #e8ecf0;\n  overflow: auto;\n  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.04);\n}\n\n.tabela[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n  font-size: 0.86rem;\n}\n.tabela[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%] {\n  background: #f8faff;\n  border-bottom: 1px solid #e8ecf0;\n}\n.tabela[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  padding: 11px 16px;\n  text-align: left;\n  font-size: 0.78rem;\n  font-weight: 600;\n  color: #555;\n  text-transform: uppercase;\n  letter-spacing: 0.4px;\n  white-space: nowrap;\n}\n.tabela[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n  border-bottom: 1px solid #f0f3f7;\n  transition: background 0.12s;\n}\n.tabela[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n.tabela[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover {\n  background: #f8faff;\n}\n.tabela[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 12px 16px;\n  color: #333;\n  vertical-align: middle;\n}\n\n.curso-thumb[_ngcontent-%COMP%] {\n  width: 44px;\n  height: 44px;\n  border-radius: 6px;\n  object-fit: cover;\n  flex-shrink: 0;\n  border: 1px solid #e8ecf0;\n}\n\n.curso-info[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n.curso-info[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 0.87rem;\n  color: #1a1f2e;\n}\n\n.curso-desc[_ngcontent-%COMP%] {\n  font-size: 0.76rem;\n  color: #888;\n  margin: 2px 0 0;\n  max-width: 260px;\n}\n\n.badge[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 3px 9px;\n  border-radius: 10px;\n  font-size: 0.74rem;\n  font-weight: 600;\n  white-space: nowrap;\n}\n.badge--verde[_ngcontent-%COMP%] {\n  background: rgba(34, 197, 94, 0.1);\n  color: #147739;\n}\n.badge--cinza[_ngcontent-%COMP%] {\n  background: rgba(148, 163, 184, 0.14);\n  color: #5c6f8a;\n}\n.badge--laranja[_ngcontent-%COMP%] {\n  background: rgba(245, 158, 11, 0.12);\n  color: #945f06;\n}\n.badge--neutro[_ngcontent-%COMP%] {\n  background: #eef2f7;\n  color: #555;\n}\n.badge--categoria[_ngcontent-%COMP%] {\n  background: rgba(167, 139, 250, 0.1);\n  color: #5d29f6;\n}\n\n.admin-form[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 18px;\n}\n\n.form-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));\n  gap: 16px;\n}\n\n.form-grupo[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n}\n.form-grupo--flex2[_ngcontent-%COMP%] {\n  grid-column: span 2;\n}\n\n.form-label[_ngcontent-%COMP%] {\n  font-size: 0.83rem;\n  font-weight: 600;\n  color: #444;\n}\n.form-label[_ngcontent-%COMP%]   span[aria-label=obrigat\u00F3rio][_ngcontent-%COMP%] {\n  color: #ef4444;\n  margin-left: 2px;\n}\n\n.form-input[_ngcontent-%COMP%] {\n  padding: 9px 12px;\n  border: 1.5px solid #dde2ea;\n  border-radius: 8px;\n  font-size: 0.88rem;\n  color: #1a1f2e;\n  background: #fff;\n  transition: border-color 0.2s, box-shadow 0.2s;\n  width: 100%;\n  box-sizing: border-box;\n}\n.form-input[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #4f9cf9;\n  box-shadow: 0 0 0 3px rgba(79, 156, 249, 0.12);\n}\n.form-input.invalido[_ngcontent-%COMP%] {\n  border-color: #ef4444;\n}\n.form-input.invalido[_ngcontent-%COMP%]:focus {\n  box-shadow: 0 0 0 3px rgba(239, 68, 68, 0.1);\n}\n\n.form-textarea[_ngcontent-%COMP%] {\n  resize: vertical;\n  min-height: 80px;\n  font-family: inherit;\n}\n\n.form-select[_ngcontent-%COMP%] {\n  appearance: auto;\n  cursor: pointer;\n}\n\n.form-erro[_ngcontent-%COMP%] {\n  font-size: 0.78rem;\n  color: #ef4444;\n  font-weight: 500;\n}\n\n.form-dica[_ngcontent-%COMP%] {\n  font-size: 0.76rem;\n  color: #888;\n  line-height: 1.4;\n}\n\n.form-checkbox[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 0.87rem;\n  cursor: pointer;\n  color: #333;\n}\n.form-checkbox[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%] {\n  width: 16px;\n  height: 16px;\n  cursor: pointer;\n  accent-color: #4f9cf9;\n}\n\n.form-acoes[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 12px;\n  justify-content: flex-end;\n  padding-top: 8px;\n  border-top: 1px solid #f0f3f7;\n}\n\n.modal-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.45);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 200;\n  padding: 16px;\n}\n\n.modal[_ngcontent-%COMP%] {\n  background: #ffffff;\n  border-radius: 12px;\n  padding: 28px;\n  max-width: 380px;\n  width: 100%;\n  box-shadow: 0 8px 40px rgba(0, 0, 0, 0.18);\n}\n.modal__texto[_ngcontent-%COMP%] {\n  font-size: 0.92rem;\n  color: #333;\n  line-height: 1.5;\n  margin: 0 0 20px;\n}\n.modal__acoes[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 10px;\n  justify-content: flex-end;\n}\n\n.paginacao[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 6px;\n  justify-content: center;\n  flex-wrap: wrap;\n  margin-top: 8px;\n}\n.paginacao__btn[_ngcontent-%COMP%] {\n  min-width: 34px;\n  height: 34px;\n  padding: 0 10px;\n  border-radius: 7px;\n  border: 1px solid #dde2ea;\n  background: #ffffff;\n  color: #333;\n  font-size: 0.84rem;\n  font-weight: 500;\n  cursor: pointer;\n  transition: background 0.15s, border-color 0.15s, color 0.15s;\n}\n.paginacao__btn[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #f0f6ff;\n  border-color: #4f9cf9;\n  color: #4f9cf9;\n}\n.paginacao__btn.ativo[_ngcontent-%COMP%] {\n  background: #4f9cf9;\n  border-color: #4f9cf9;\n  color: #ffffff;\n}\n.paginacao__btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.4;\n  cursor: not-allowed;\n}\n.paginacao__btn[_ngcontent-%COMP%]:focus-visible {\n  outline: 2px solid #4f9cf9;\n  outline-offset: 2px;\n}\n\n.usuario-cell[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n\n.usuario-avatar[_ngcontent-%COMP%] {\n  width: 36px;\n  height: 36px;\n  border-radius: 50%;\n  overflow: hidden;\n  background: rgba(79, 156, 249, 0.12);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n}\n.usuario-avatar[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n.usuario-avatar__inicial[_ngcontent-%COMP%] {\n  font-size: 0.95rem;\n  font-weight: 700;\n  color: #4f9cf9;\n}\n.usuario-avatar--modal[_ngcontent-%COMP%] {\n  width: 52px;\n  height: 52px;\n}\n.usuario-avatar--modal[_ngcontent-%COMP%]   .usuario-avatar__inicial[_ngcontent-%COMP%] {\n  font-size: 1.3rem;\n}\n\n.usuario-email[_ngcontent-%COMP%] {\n  font-size: 0.83rem;\n  color: #666;\n}\n\n.modal--medio[_ngcontent-%COMP%] {\n  max-width: 480px;\n  width: 100%;\n}\n\n.modal__cabecalho[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 18px;\n}\n\n.modal__titulo[_ngcontent-%COMP%] {\n  font-size: 1.05rem;\n  font-weight: 700;\n  color: #1a1f2e;\n  margin: 0;\n}\n\n.modal__fechar[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  cursor: pointer;\n  font-size: 1.1rem;\n  color: #888;\n  padding: 4px 8px;\n  border-radius: 6px;\n  line-height: 1;\n  transition: background 0.15s, color 0.15s;\n}\n.modal__fechar[_ngcontent-%COMP%]:hover {\n  background: #f1f5f9;\n  color: #333;\n}\n.modal__fechar[_ngcontent-%COMP%]:focus-visible {\n  outline: 2px solid #4f9cf9;\n}\n\n.modal__info-usuario[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 14px;\n  padding: 14px;\n  background: #f8fafc;\n  border-radius: 10px;\n  margin-bottom: 20px;\n}\n\n.modal__usuario-email[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n  color: #334155;\n  margin: 0 0 2px;\n  font-weight: 500;\n}\n\n.modal__usuario-data[_ngcontent-%COMP%] {\n  font-size: 0.78rem;\n  color: #888;\n  margin: 0;\n}\n\n.modal__acoes[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  gap: 10px;\n  margin-top: 8px;\n}"]
    });
  }
  return ListaUsuariosComponent;
})();

/***/ })

}]);