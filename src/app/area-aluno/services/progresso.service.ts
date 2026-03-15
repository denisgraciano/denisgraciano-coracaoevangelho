// src/app/area-aluno/services/progresso.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { ProgressoCurso, ProgressoAula, CursoAluno, Certificado } from '../models/area-aluno.models';
import { AuthService } from './auth.service';

const PROGRESSO_KEY_PREFIX = 'ce_progresso_';
const CERTIFICADOS_KEY = 'ce_certificados';

@Injectable({ providedIn: 'root' })
export class ProgressoService {

  // Cache reativo em memória, chaveado por cursoId
  private progressoMap = new Map<string, BehaviorSubject<ProgressoCurso>>();

  constructor(private authService: AuthService) {}

  // ─── Leitura ─────────────────────────────────────────────

  obterProgresso(cursoId: string): Observable<ProgressoCurso> {
    return this.getOuCriarSubject(cursoId).asObservable();
  }

  obterProgressoSnapshot(cursoId: string): ProgressoCurso {
    return this.getOuCriarSubject(cursoId).getValue();
  }

  listarProgressosTodos(): ProgressoCurso[] {
    // Lê todas as chaves do localStorage que pertencem ao usuário atual
    const uid = this.authService.usuarioAtual?.id ?? 'anonimo';
    return Object.keys(localStorage)
      .filter(k => k.startsWith(`${PROGRESSO_KEY_PREFIX}${uid}_`))
      .map(k => {
        try { return JSON.parse(localStorage.getItem(k)!) as ProgressoCurso; }
        catch { return null; }
      })
      .filter((p): p is ProgressoCurso => p !== null);
  }

  // ─── Mutação ─────────────────────────────────────────────

  /**
   * Marca uma aula como concluída e recalcula percentual.
   * Se o curso atingir 100%, marca dataConclusao automaticamente.
   */
  marcarAulaConcluida(curso: CursoAluno, aulaId: string): void {
    const progresso = { ...this.obterProgressoSnapshot(curso.id) };

    // Atualiza ou insere o registro da aula
    const idx = progresso.aulasProgresso.findIndex(a => a.aulaId === aulaId);
    const registro: ProgressoAula = {
      aulaId,
      concluida: true,
      dataConlusao: new Date().toISOString(),
    };

    if (idx >= 0) {
      progresso.aulasProgresso[idx] = registro;
    } else {
      progresso.aulasProgresso = [...progresso.aulasProgresso, registro];
    }

    // Recalcula percentual
    const concluidas = progresso.aulasProgresso.filter(a => a.concluida).length;
    progresso.percentualConcluido = Math.round((concluidas / curso.totalAulas) * 100);

    // Seta data de conclusão na primeira vez que chega a 100%
    if (progresso.percentualConcluido === 100 && !progresso.dataConclusao) {
      progresso.dataConclusao = new Date().toISOString();
    }

    this.persistirEEmitir(curso.id, progresso);
  }

  emitirCertificado(curso: CursoAluno): Certificado | null {
    const progresso = this.obterProgressoSnapshot(curso.id);
    if (progresso.percentualConcluido < 100) return null;

    const certificado: Certificado = {
      id: `${curso.id}_${Date.now()}`,
      cursoId: curso.id,
      cursoTitulo: curso.titulo,
      alunoNome: this.authService.usuarioAtual?.nome ?? 'Aluno',
      dataEmissao: new Date().toISOString(),
      cargaHoraria: curso.aulas.reduce((acc, a) => acc + a.duracaoMinutos, 0) / 60,
    };

    // Salva na lista de certificados
    const todos = this.listarCertificados();
    todos.push(certificado);
    localStorage.setItem(CERTIFICADOS_KEY, JSON.stringify(todos));

    // Marca certificado emitido no progresso
    const atualizado = { ...progresso, certificadoEmitido: true };
    this.persistirEEmitir(curso.id, atualizado);

    return certificado;
  }

  listarCertificados(): Certificado[] {
    try {
      const raw = localStorage.getItem(CERTIFICADOS_KEY);
      return raw ? (JSON.parse(raw) as Certificado[]) : [];
    } catch { return []; }
  }

  // ─── Privados ────────────────────────────────────────────

  private getOuCriarSubject(cursoId: string): BehaviorSubject<ProgressoCurso> {
    if (!this.progressoMap.has(cursoId)) {
      const persistido = this.lerStorage(cursoId);
      this.progressoMap.set(cursoId, new BehaviorSubject<ProgressoCurso>(persistido));
    }
    return this.progressoMap.get(cursoId)!;
  }

  private lerStorage(cursoId: string): ProgressoCurso {
    const uid = this.authService.usuarioAtual?.id ?? 'anonimo';
    const key = `${PROGRESSO_KEY_PREFIX}${uid}_${cursoId}`;
    try {
      const raw = localStorage.getItem(key);
      if (raw) return JSON.parse(raw) as ProgressoCurso;
    } catch { /* fallthrough */ }
    // Estado inicial zerado
    return { cursoId, aulasProgresso: [], percentualConcluido: 0, certificadoEmitido: false };
  }

  private persistirEEmitir(cursoId: string, progresso: ProgressoCurso): void {
    const uid = this.authService.usuarioAtual?.id ?? 'anonimo';
    const key = `${PROGRESSO_KEY_PREFIX}${uid}_${cursoId}`;
    localStorage.setItem(key, JSON.stringify(progresso));
    this.getOuCriarSubject(cursoId).next(progresso);
  }
}