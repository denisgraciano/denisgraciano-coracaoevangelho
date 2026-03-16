// src/app/area-aluno/services/perfil.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { PerfilAluno } from '../models/area-aluno.models';
import { AuthService } from './auth.service';

const PERFIL_KEY_PREFIX = 'ce_perfil_';

const PERFIL_VAZIO: Omit<PerfilAluno, 'id' | 'nome' | 'email'> = {
  nomeCompleto: '',
  telefone: '',
  cpf: '',
  dataNascimento: '',
  endereco: {
    cep: '', logradouro: '', numero: '',
    complemento: '', bairro: '', cidade: '', estado: '',
  },
  receberEmails: false,
  observacoes: '',
};

@Injectable({ providedIn: 'root' })
export class PerfilService {
  private perfilSubject: BehaviorSubject<PerfilAluno | null>;
  readonly perfil$: Observable<PerfilAluno | null>;

  constructor(private authService: AuthService) {
    this.perfilSubject = new BehaviorSubject<PerfilAluno | null>(
      this.lerStorage()
    );
    this.perfil$ = this.perfilSubject.asObservable();
  }

  get perfilAtual(): PerfilAluno | null {
    return this.perfilSubject.getValue();
  }

  /**
   * Salva o perfil completo, incluindo o avatar se fornecido.
   * Mescla com dados de sessão do AuthService para manter coerência.
   */
  salvar(dados: Partial<PerfilAluno>): void {
    const usuario = this.authService.usuarioAtual;
    if (!usuario) return;

    const atual = this.perfilAtual ?? {
      ...PERFIL_VAZIO,
      id: usuario.id,
      nome: usuario.nome,
      email: usuario.email,
    };

    const atualizado: PerfilAluno = { ...atual, ...dados };

    // Persiste no localStorage
    localStorage.setItem(this.chave(), JSON.stringify(atualizado));
    this.perfilSubject.next(atualizado);

    // Sincroniza nome e avatar no AuthService / localStorage de sessão
    if (dados.nomeCompleto) {
      const usuarioAtualizado = {
        ...usuario,
        nome: dados.nomeCompleto,
        avatarUrl: atualizado.avatarBase64 ?? usuario.avatarUrl,
      };
      localStorage.setItem('ce_usuario_logado', JSON.stringify(usuarioAtualizado));
    }
  }

  /**
   * Salva apenas o avatar (base64) sem tocar nos outros campos.
   * Chamado separadamente pelo seletor de imagem.
   */
  salvarAvatar(base64: string): void {
    this.salvar({ avatarBase64: base64 });
  }

  /**
   * Pré-popula o perfil com dados vindos de uma inscrição de curso.
   * Útil para que o aluno não precise redigitar dados já informados.
   */
  prePopularDaInscricao(dados: {
    nomeCompleto: string; email: string; telefone: string;
    cpf: string; dataNascimento: string; endereco: PerfilAluno['endereco'];
    receberEmails: boolean; observacoes?: string;
  }): void {
    // Só preenche se o perfil ainda não tem dados (primeira inscrição)
    if (this.perfilAtual?.nomeCompleto) return;
    this.salvar(dados);
  }

  private lerStorage(): PerfilAluno | null {
    const usuario = this.authService.usuarioAtual;
    if (!usuario) return null;
    try {
      const raw = localStorage.getItem(this.chave());
      return raw ? (JSON.parse(raw) as PerfilAluno) : null;
    } catch {
      return null;
    }
  }

  private chave(): string {
    return `${PERFIL_KEY_PREFIX}${this.authService.usuarioAtual?.id ?? 'anonimo'}`;
  }
}