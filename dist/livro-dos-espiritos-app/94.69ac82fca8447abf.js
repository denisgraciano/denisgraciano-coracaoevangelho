"use strict";
(self["webpackChunklivro_dos_espiritos_app"] = self["webpackChunklivro_dos_espiritos_app"] || []).push([[94],{

/***/ 8094:
/*!*************************************************************!*\
  !*** ./src/app/area-admin/layout/admin-layout.component.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AdminLayoutComponent: () => (/* binding */ AdminLayoutComponent)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 7901);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 177);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 8530);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 6977);
/* harmony import */ var _area_aluno_services_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../area-aluno/services/auth.service */ 5722);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7705);








const _c0 = a0 => ({
  exact: a0
});
function AdminLayoutComponent_li_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li", 22)(1, "a", 23)(2, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const menu_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", menu_r1.route)("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](5, _c0, menu_r1.route === "/admin"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("aria-label", menu_r1.ariaLabel);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](menu_r1.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](menu_r1.label);
  }
}
let AdminLayoutComponent = /*#__PURE__*/(() => {
  class AdminLayoutComponent {
    authService;
    destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__.Subject();
    nomeAdmin = '';
    sidebarAberta = true;
    menus = [{
      label: 'Dashboard',
      icon: '📊',
      route: '/admin',
      ariaLabel: 'Ir para o dashboard'
    }, {
      label: 'Cursos',
      icon: '🎓',
      route: '/admin/cursos',
      ariaLabel: 'Gerenciar cursos'
    }, {
      label: 'Matrículas',
      icon: '📋',
      route: '/admin/matriculas',
      ariaLabel: 'Ver matrículas'
    }, {
      label: 'Pedidos',
      icon: '🙏',
      route: '/admin/pedidos',
      ariaLabel: 'Ver pedidos de vibração'
    }, {
      label: 'Usuários',
      icon: '👥',
      route: '/admin/usuarios',
      ariaLabel: 'Gerenciar usuários'
    }];
    constructor(authService) {
      this.authService = authService;
    }
    ngOnInit() {
      this.authService.usuario$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.takeUntil)(this.destroy$)).subscribe(u => {
        this.nomeAdmin = u?.nome ?? 'Admin';
      });
    }
    ngOnDestroy() {
      this.destroy$.next();
      this.destroy$.complete();
    }
    toggleSidebar() {
      this.sidebarAberta = !this.sidebarAberta;
    }
    logout() {
      this.authService.logout();
    }
    static ɵfac = function AdminLayoutComponent_Factory(t) {
      return new (t || AdminLayoutComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_area_aluno_services_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService));
    };
    static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: AdminLayoutComponent,
      selectors: [["app-admin-layout"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵStandaloneFeature"]],
      decls: 37,
      vars: 5,
      consts: [[1, "admin-shell"], ["role", "navigation", "aria-label", "Menu administrativo", 1, "admin-sidebar"], [1, "admin-sidebar__logo"], ["aria-hidden", "true", 1, "admin-sidebar__logo-icon"], [1, "admin-sidebar__logo-text"], [1, "admin-sidebar__nav"], ["role", "list"], ["role", "listitem", 4, "ngFor", "ngForOf"], [1, "admin-sidebar__footer"], ["routerLink", "/area-aluno", "aria-label", "Ir para \u00E1rea do aluno", 1, "admin-sidebar__link", "admin-sidebar__link--secondary"], ["aria-hidden", "true"], [1, "admin-sidebar__label"], ["aria-label", "Sair do sistema", 1, "admin-sidebar__link", "admin-sidebar__link--danger", 3, "click"], [1, "admin-main"], ["role", "banner", 1, "admin-topbar"], ["aria-label", "Alternar menu lateral", 1, "admin-topbar__toggle", 3, "click"], [1, "admin-topbar__titulo"], [1, "admin-topbar__usuario"], ["aria-hidden", "true", 1, "admin-topbar__avatar"], [1, "admin-topbar__nome"], ["role", "img", "aria-label", "Administrador", 1, "admin-topbar__badge"], ["role", "main", "id", "conteudo-principal", 1, "admin-content"], ["role", "listitem"], ["routerLinkActive", "ativo", 1, "admin-sidebar__link", 3, "routerLink", "routerLinkActiveOptions"], ["aria-hidden", "true", 1, "admin-sidebar__icon"]],
      template: function AdminLayoutComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "aside", 1)(2, "div", 2)(3, "span", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "\u271D");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "span", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Admin Panel");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "nav", 5)(8, "ul", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, AdminLayoutComponent_li_9_Template, 6, 7, "li", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 8)(11, "a", 9)(12, "span", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "\uD83C\uDF93");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "span", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "\u00C1rea do Aluno");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "button", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AdminLayoutComponent_Template_button_click_16_listener() {
            return ctx.logout();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "span", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "\uD83D\uDEAA");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "span", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "Sair");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "div", 13)(22, "header", 14)(23, "button", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AdminLayoutComponent_Template_button_click_23_listener() {
            return ctx.toggleSidebar();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "span", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, "\u2630");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "span", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27, "Painel Administrativo");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "div", 17)(29, "span", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30, "\uD83D\uDC64");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "span", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](32);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "span", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](34, "Admin");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "main", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](36, "router-outlet");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("sidebar-fechada", !ctx.sidebarAberta);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.menus);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](14);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("aria-expanded", ctx.sidebarAberta);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.nomeAdmin);
        }
      },
      dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterOutlet, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterLink, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterLinkActive, _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf],
      styles: [".admin-shell[_ngcontent-%COMP%] {\n  display: flex;\n  min-height: 100vh;\n  background: #f4f6fa;\n}\n\n.admin-sidebar[_ngcontent-%COMP%] {\n  width: 240px;\n  background: #1a1f2e;\n  color: #c8cfe0;\n  display: flex;\n  flex-direction: column;\n  flex-shrink: 0;\n  transition: width 0.25s ease, transform 0.25s ease;\n  position: fixed;\n  top: 0;\n  left: 0;\n  height: 100vh;\n  z-index: 100;\n  overflow: hidden;\n}\n.admin-sidebar__logo[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 20px 18px;\n  border-bottom: 1px solid rgba(255, 255, 255, 0.08);\n  color: #ffffff;\n  font-weight: 700;\n  font-size: 1rem;\n  flex-shrink: 0;\n}\n.admin-sidebar__logo-icon[_ngcontent-%COMP%] {\n  font-size: 1.4rem;\n  color: #4f9cf9;\n}\n.admin-sidebar__nav[_ngcontent-%COMP%] {\n  flex: 1;\n  overflow-y: auto;\n  padding: 12px 0;\n}\n.admin-sidebar__nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n.admin-sidebar__link[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 11px 18px;\n  color: #c8cfe0;\n  text-decoration: none;\n  font-size: 0.88rem;\n  font-weight: 500;\n  border-radius: 0;\n  transition: background 0.25s ease, color 0.25s ease;\n  cursor: pointer;\n  border: none;\n  background: none;\n  width: 100%;\n  text-align: left;\n}\n.admin-sidebar__link[_ngcontent-%COMP%]:hover, .admin-sidebar__link[_ngcontent-%COMP%]:focus-visible {\n  background: rgba(255, 255, 255, 0.06);\n  color: #ffffff;\n  outline: 2px solid #4f9cf9;\n  outline-offset: -2px;\n}\n.admin-sidebar__link.ativo[_ngcontent-%COMP%] {\n  background: rgba(79, 156, 249, 0.15);\n  color: #4f9cf9;\n  border-left: 3px solid #4f9cf9;\n}\n.admin-sidebar__link--secondary[_ngcontent-%COMP%] {\n  color: #97a4c4;\n  font-size: 0.82rem;\n}\n.admin-sidebar__link--danger[_ngcontent-%COMP%] {\n  color: #f87171;\n}\n.admin-sidebar__link--danger[_ngcontent-%COMP%]:hover {\n  background: rgba(248, 113, 113, 0.1);\n  color: #f87171;\n}\n.admin-sidebar__icon[_ngcontent-%COMP%] {\n  font-size: 1.1rem;\n  width: 22px;\n  text-align: center;\n  flex-shrink: 0;\n}\n.admin-sidebar__label[_ngcontent-%COMP%] {\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.admin-sidebar__footer[_ngcontent-%COMP%] {\n  border-top: 1px solid rgba(255, 255, 255, 0.08);\n  padding: 8px 0;\n  flex-shrink: 0;\n}\n\n.admin-main[_ngcontent-%COMP%] {\n  flex: 1;\n  margin-left: 240px;\n  display: flex;\n  flex-direction: column;\n  min-height: 100vh;\n  transition: margin-left 0.25s ease;\n}\n\n.admin-topbar[_ngcontent-%COMP%] {\n  height: 56px;\n  background: #ffffff;\n  border-bottom: 1px solid #e8ecf0;\n  display: flex;\n  align-items: center;\n  padding: 0 20px;\n  gap: 14px;\n  position: sticky;\n  top: 0;\n  z-index: 50;\n  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.06);\n}\n.admin-topbar__toggle[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  cursor: pointer;\n  font-size: 1.3rem;\n  color: #555;\n  padding: 6px;\n  border-radius: 6px;\n  transition: background 0.2s;\n  line-height: 1;\n}\n.admin-topbar__toggle[_ngcontent-%COMP%]:hover {\n  background: #f4f6fa;\n}\n.admin-topbar__toggle[_ngcontent-%COMP%]:focus-visible {\n  outline: 2px solid #4f9cf9;\n}\n.admin-topbar__titulo[_ngcontent-%COMP%] {\n  font-size: 0.95rem;\n  font-weight: 600;\n  color: #333;\n  flex: 1;\n}\n.admin-topbar__usuario[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 0.85rem;\n  color: #555;\n}\n.admin-topbar__avatar[_ngcontent-%COMP%] {\n  font-size: 1.2rem;\n}\n.admin-topbar__nome[_ngcontent-%COMP%] {\n  font-weight: 500;\n}\n.admin-topbar__badge[_ngcontent-%COMP%] {\n  background: #4f9cf9;\n  color: #ffffff;\n  font-size: 0.68rem;\n  font-weight: 700;\n  padding: 2px 7px;\n  border-radius: 10px;\n  letter-spacing: 0.5px;\n  text-transform: uppercase;\n}\n\n.admin-content[_ngcontent-%COMP%] {\n  flex: 1;\n  padding: 28px 24px;\n  max-width: 1280px;\n  width: 100%;\n  margin: 0 auto;\n}\n\n.admin-shell.sidebar-fechada[_ngcontent-%COMP%]   .admin-sidebar[_ngcontent-%COMP%] {\n  width: 56px;\n}\n.admin-shell.sidebar-fechada[_ngcontent-%COMP%]   .admin-sidebar[_ngcontent-%COMP%]   .admin-sidebar__label[_ngcontent-%COMP%], .admin-shell.sidebar-fechada[_ngcontent-%COMP%]   .admin-sidebar[_ngcontent-%COMP%]   .admin-sidebar__logo-text[_ngcontent-%COMP%] {\n  display: none;\n}\n.admin-shell.sidebar-fechada[_ngcontent-%COMP%]   .admin-sidebar[_ngcontent-%COMP%]   .admin-sidebar__logo[_ngcontent-%COMP%] {\n  justify-content: center;\n  padding: 20px 10px;\n}\n.admin-shell.sidebar-fechada[_ngcontent-%COMP%]   .admin-sidebar[_ngcontent-%COMP%]   .admin-sidebar__link[_ngcontent-%COMP%] {\n  justify-content: center;\n  padding: 11px 0;\n}\n.admin-shell.sidebar-fechada[_ngcontent-%COMP%]   .admin-sidebar[_ngcontent-%COMP%]   .admin-sidebar__icon[_ngcontent-%COMP%] {\n  width: auto;\n}\n.admin-shell.sidebar-fechada[_ngcontent-%COMP%]   .admin-main[_ngcontent-%COMP%] {\n  margin-left: 56px;\n}\n\n@media (max-width: 768px) {\n  .admin-sidebar[_ngcontent-%COMP%] {\n    transform: translateX(-100%);\n    width: 240px !important;\n  }\n  .admin-shell[_ngcontent-%COMP%]:not(.sidebar-fechada)   .admin-sidebar[_ngcontent-%COMP%] {\n    transform: translateX(0);\n  }\n  .admin-main[_ngcontent-%COMP%] {\n    margin-left: 0 !important;\n  }\n  .admin-topbar__titulo[_ngcontent-%COMP%] {\n    display: none;\n  }\n}"]
    });
  }
  return AdminLayoutComponent;
})();

/***/ })

}]);