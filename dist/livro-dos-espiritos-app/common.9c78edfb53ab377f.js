"use strict";
(self["webpackChunklivro_dos_espiritos_app"] = self["webpackChunklivro_dos_espiritos_app"] || []).push([[76],{

/***/ 1851:
/*!******************************************************!*\
  !*** ./src/app/area-admin/services/admin.service.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AdminService: () => (/* binding */ AdminService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 1626);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 6354);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../environments/environment */ 5312);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7705);





const BASE = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl;
let AdminService = /*#__PURE__*/(() => {
  class AdminService {
    http;
    constructor(http) {
      this.http = http;
    }
    // ── Categorias ────────────────────────────────────────────────
    getCategorias() {
      return this.http.get(`${BASE}/api/categorias`).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_1__.map)(r => r.data));
    }
    // ── Cursos ────────────────────────────────────────────────────
    getCursos() {
      return this.http.get(`${BASE}/api/cursos`).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_1__.map)(r => r.data));
    }
    getCurso(id) {
      return this.http.get(`${BASE}/api/cursos/${id}`).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_1__.map)(r => r.data));
    }
    criarCurso(payload) {
      return this.http.post(`${BASE}/api/admin/cursos`, payload).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_1__.map)(r => r.data));
    }
    atualizarCurso(id, payload) {
      return this.http.put(`${BASE}/api/admin/cursos/${id}`, payload).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_1__.map)(r => r.data));
    }
    excluirCurso(id) {
      return this.http.delete(`${BASE}/api/admin/cursos/${id}`);
    }
    // ── Aulas ─────────────────────────────────────────────────────
    criarAula(cursoId, payload) {
      return this.http.post(`${BASE}/api/admin/cursos/${cursoId}/aulas`, payload).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_1__.map)(r => r.data));
    }
    atualizarAula(cursoId, aulaId, payload) {
      return this.http.put(`${BASE}/api/admin/cursos/${cursoId}/aulas/${aulaId}`, payload).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_1__.map)(r => r.data));
    }
    excluirAula(cursoId, aulaId) {
      return this.http.delete(`${BASE}/api/admin/cursos/${cursoId}/aulas/${aulaId}`);
    }
    // ── Matrículas ────────────────────────────────────────────────
    getMatriculas(pagina = 1, tamanho = 20) {
      const params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpParams().set('pagina', pagina).set('tamanho', tamanho);
      return this.http.get(`${BASE}/api/admin/matriculas`, {
        params
      }).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_1__.map)(r => r.data));
    }
    // ── Pedidos de Vibração ───────────────────────────────────────
    // Endpoint real conforme Swagger: /api/admin/pedidos-vibracao
    getPedidosVibracao(pagina = 1, tamanho = 20) {
      const params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpParams().set('pagina', pagina).set('tamanho', tamanho);
      return this.http.get(`${BASE}/api/admin/pedidos-vibracao`, {
        params
      }).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_1__.map)(r => r.data));
    }
    /**
     * Conta pedidos NÃO lidos para o card do dashboard.
     *
     * Estratégia: busca uma página grande (tamanho=500) e conta os items com
     * lido=false no cliente — sem depender de filtro no backend.
     * Funciona corretamente enquanto o total de pedidos for razoável.
     * Quando o backend implementar ?lido=false, basta trocar a implementação
     * abaixo para usar o totalItens diretamente.
     */
    getPedidosNaoLidos() {
      const params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpParams().set('pagina', 1).set('tamanho', 500);
      return this.http.get(`${BASE}/api/admin/pedidos-vibracao`, {
        params
      }).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_1__.map)(r => r.data?.items.filter(p => !p.lido).length ?? 0));
    }
    /**
     * Marca um pedido como lido.
     * Endpoint: PATCH /api/admin/pedidos-vibracao/{id}/lido
     */
    marcarPedidoLido(id) {
      return this.http.patch(`${BASE}/api/admin/pedidos-vibracao/${id}/lido`, {});
    }
    // ── Usuários ──────────────────────────────────────────────────
    getUsuarios(pagina = 1, tamanho = 20) {
      const params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpParams().set('pagina', pagina).set('tamanho', tamanho);
      return this.http.get(`${BASE}/api/admin/usuarios`, {
        params
      }).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_1__.map)(r => r.data));
    }
    /**
     * Edita nome, email, avatarUrl e role de um usuário.
     * Endpoint: PUT /api/admin/usuarios/{id}
     */
    editarUsuario(id, payload) {
      return this.http.put(`${BASE}/api/admin/usuarios/${id}`, payload).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_1__.map)(r => r.data));
    }
    static ɵfac = function AdminService_Factory(t) {
      return new (t || AdminService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient));
    };
    static ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
      token: AdminService,
      factory: AdminService.ɵfac,
      providedIn: 'root'
    });
  }
  return AdminService;
})();

/***/ }),

/***/ 4332:
/*!**********************************************************!*\
  !*** ./src/app/area-aluno/services/progresso.service.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProgressoService: () => (/* binding */ ProgressoService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 4412);
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auth.service */ 5722);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7705);




const PROGRESSO_KEY_PREFIX = 'ce_progresso_';
const CERTIFICADOS_KEY = 'ce_certificados';
let ProgressoService = /*#__PURE__*/(() => {
  class ProgressoService {
    authService;
    // Cache reativo em memória, chaveado por cursoId
    progressoMap = new Map();
    constructor(authService) {
      this.authService = authService;
    }
    // ─── Leitura ─────────────────────────────────────────────
    obterProgresso(cursoId) {
      return this.getOuCriarSubject(cursoId).asObservable();
    }
    obterProgressoSnapshot(cursoId) {
      return this.getOuCriarSubject(cursoId).getValue();
    }
    listarProgressosTodos() {
      // Lê todas as chaves do localStorage que pertencem ao usuário atual
      const uid = this.authService.usuarioAtual?.id ?? 'anonimo';
      return Object.keys(localStorage).filter(k => k.startsWith(`${PROGRESSO_KEY_PREFIX}${uid}_`)).map(k => {
        try {
          return JSON.parse(localStorage.getItem(k));
        } catch {
          return null;
        }
      }).filter(p => p !== null);
    }
    // ─── Mutação ─────────────────────────────────────────────
    /**
     * Marca uma aula como concluída e recalcula percentual.
     * Se o curso atingir 100%, marca dataConclusao automaticamente.
     */
    marcarAulaConcluida(curso, aulaId) {
      const progresso = {
        ...this.obterProgressoSnapshot(curso.id)
      };
      // Atualiza ou insere o registro da aula
      const idx = progresso.aulasProgresso.findIndex(a => a.aulaId === aulaId);
      const registro = {
        aulaId,
        concluida: true,
        dataConlusao: new Date().toISOString()
      };
      if (idx >= 0) {
        progresso.aulasProgresso[idx] = registro;
      } else {
        progresso.aulasProgresso = [...progresso.aulasProgresso, registro];
      }
      // Recalcula percentual
      const concluidas = progresso.aulasProgresso.filter(a => a.concluida).length;
      progresso.percentualConcluido = Math.round(concluidas / curso.totalAulas * 100);
      // Seta data de conclusão na primeira vez que chega a 100%
      if (progresso.percentualConcluido === 100 && !progresso.dataConclusao) {
        progresso.dataConclusao = new Date().toISOString();
      }
      this.persistirEEmitir(curso.id, progresso);
    }
    emitirCertificado(curso) {
      const progresso = this.obterProgressoSnapshot(curso.id);
      if (progresso.percentualConcluido < 100) return null;
      const certificado = {
        id: `${curso.id}_${Date.now()}`,
        cursoId: curso.id,
        cursoTitulo: curso.titulo,
        alunoNome: this.authService.usuarioAtual?.nome ?? 'Aluno',
        dataEmissao: new Date().toISOString(),
        cargaHoraria: curso.aulas.reduce((acc, a) => acc + a.duracaoMinutos, 0) / 60
      };
      // Salva na lista de certificados
      const todos = this.listarCertificados();
      todos.push(certificado);
      localStorage.setItem(CERTIFICADOS_KEY, JSON.stringify(todos));
      // Marca certificado emitido no progresso
      const atualizado = {
        ...progresso,
        certificadoEmitido: true
      };
      this.persistirEEmitir(curso.id, atualizado);
      return certificado;
    }
    listarCertificados() {
      try {
        const raw = localStorage.getItem(CERTIFICADOS_KEY);
        return raw ? JSON.parse(raw) : [];
      } catch {
        return [];
      }
    }
    // ─── Privados ────────────────────────────────────────────
    getOuCriarSubject(cursoId) {
      if (!this.progressoMap.has(cursoId)) {
        const persistido = this.lerStorage(cursoId);
        this.progressoMap.set(cursoId, new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject(persistido));
      }
      return this.progressoMap.get(cursoId);
    }
    lerStorage(cursoId) {
      const uid = this.authService.usuarioAtual?.id ?? 'anonimo';
      const key = `${PROGRESSO_KEY_PREFIX}${uid}_${cursoId}`;
      try {
        const raw = localStorage.getItem(key);
        if (raw) return JSON.parse(raw);
      } catch {/* fallthrough */}
      // Estado inicial zerado
      return {
        cursoId,
        aulasProgresso: [],
        percentualConcluido: 0,
        certificadoEmitido: false
      };
    }
    persistirEEmitir(cursoId, progresso) {
      const uid = this.authService.usuarioAtual?.id ?? 'anonimo';
      const key = `${PROGRESSO_KEY_PREFIX}${uid}_${cursoId}`;
      localStorage.setItem(key, JSON.stringify(progresso));
      this.getOuCriarSubject(cursoId).next(progresso);
    }
    static ɵfac = function ProgressoService_Factory(t) {
      return new (t || ProgressoService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService));
    };
    static ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
      token: ProgressoService,
      factory: ProgressoService.ɵfac,
      providedIn: 'root'
    });
  }
  return ProgressoService;
})();

/***/ })

}]);