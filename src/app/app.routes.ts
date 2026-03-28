// src/app/app.routes.ts
import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LivroEspiritosComponent } from './livro-espiritos/livro-espiritos.component';
import { AgendaComponent } from './agenda/components/palestra/agenda.component';
import { PalestrasRealizadasComponent } from './palestra/components/palestras-realizadas.component';
import { SobreComponent } from './sobre/sobre.component';
import { DetalhesCursoComponent } from './detalhes-curso/detalhes-curso.component';
import { InscricaoCursoComponent } from './inscricao-curso/inscricao-curso.component';
import { PedidoVibracoesComponent } from './pedido-vibracoes/pedido-vibracoes.component';
import { ObrasBasicasComponent } from './obras-basicas/obras-basicas.component';
import { BlogComponent } from './blog/blog.component';
import { authGuard } from './area-aluno/guards/auth.guard';
import { adminGuard } from './area-admin/guards/admin.guard';

export const routes: Routes = [
  // ── Rotas públicas ─────────────────────────────────────────
  { path: '', component: HomeComponent },
  { path: 'livro-dos-espiritos', component: LivroEspiritosComponent },
  { path: 'agenda', component: AgendaComponent },
  { path: 'palestra', component: PalestrasRealizadasComponent },
  { path: 'palestras-realizadas', component: PalestrasRealizadasComponent },
  { path: 'obras-basicas', component: ObrasBasicasComponent },
  { path: 'sobre', component: SobreComponent },
  { path: 'curso/:id', component: DetalhesCursoComponent },
  { path: 'inscricao/:id', component: InscricaoCursoComponent },
  { path: 'pedidos-vibracoes', component: PedidoVibracoesComponent },
  { path: 'blog', component: BlogComponent },

  // ── Login ───────────────────────────────────────────────────
  {
    path: 'login',
    loadComponent: () =>
      import('./area-aluno/login/login.component').then(m => m.LoginComponent),
  },

  // ── Área do Aluno ───────────────────────────────────────────
  {
    path: 'area-aluno',
    canActivate: [authGuard],
    children: [
      {
        path: '',
        loadComponent: () =>
          import('./area-aluno/dashboard/dashboard.component').then(m => m.DashboardComponent),
      },
      {
        path: 'player/:cursoId/:aulaId',
        loadComponent: () =>
          import('./area-aluno/player-aula/player-aula.component').then(m => m.PlayerAulaComponent),
      },
      {
        path: 'certificado/:cursoId',
        loadComponent: () =>
          import('./area-aluno/certificado/certificado.component').then(m => m.CertificadoComponent),
      },
      {
        path: 'perfil',
        loadComponent: () =>
          import('./area-aluno/perfil-aluno/perfil-aluno.component')
            .then(m => m.PerfilAlunoComponent),
      },
    ],
  },

  // ── Área Admin (role: admin) ────────────────────────────────
  {
    path: 'admin',
    canActivate: [adminGuard],
    loadComponent: () =>
      import('./area-admin/layout/admin-layout.component').then(m => m.AdminLayoutComponent),
    children: [
      {
        path: '',
        loadComponent: () =>
          import('./area-admin/dashboard/admin-dashboard.component')
            .then(m => m.AdminDashboardComponent),
      },
      {
        path: 'cursos',
        loadComponent: () =>
          import('./area-admin/cursos/lista-cursos/lista-cursos.component')
            .then(m => m.ListaCursosComponent),
      },
      {
        path: 'cursos/novo',
        loadComponent: () =>
          import('./area-admin/cursos/form-curso/form-curso.component')
            .then(m => m.FormCursoComponent),
      },
      {
        path: 'cursos/:id/editar',
        loadComponent: () =>
          import('./area-admin/cursos/form-curso/form-curso.component')
            .then(m => m.FormCursoComponent),
      },
      {
        path: 'cursos/:id/aulas',
        loadComponent: () =>
          import('./area-admin/cursos/gestao-aulas/gestao-aulas.component')
            .then(m => m.GestaoAulasComponent),
      },
      {
        path: 'matriculas',
        loadComponent: () =>
          import('./area-admin/matriculas/lista-matriculas.component')
            .then(m => m.ListaMatriculasComponent),
      },
      {
        path: 'pedidos',
        loadComponent: () =>
          import('./area-admin/pedidos/lista-pedidos.component')
            .then(m => m.ListaPedidosComponent),
      },
      {
        path: 'usuarios',
        loadComponent: () =>
          import('./area-admin/usuarios/lista-usuarios.component')
            .then(m => m.ListaUsuariosComponent),
      },
    ],
  },

  { path: '**', redirectTo: '' },
];