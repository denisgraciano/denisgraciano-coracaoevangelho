# CLAUDE.md — Coração do Evangelho

This file provides guidance for AI assistants working in this repository.

## Project Overview

**Coração do Evangelho** is an Angular 17 single-page application (SPA) for a Spiritist educational platform. It serves courses, lectures, blog content, and a student area with progress tracking and certificates.

- **App name:** livro-dos-espiritos-app
- **Framework:** Angular 17 (standalone components, no NgModules)
- **Language:** TypeScript 5.2 (strict mode)
- **Styling:** SCSS with CSS custom properties
- **State management:** RxJS BehaviorSubject + localStorage (no NgRx)

---

## Development Commands

```bash
npm start          # Dev server at http://localhost:4200 (hot reload)
npm run build      # Production build → dist/livro-dos-espiritos-app/
npm run watch      # Dev build in watch mode
npm test           # Unit tests with Karma + Jasmine
```

No additional setup is required beyond `npm install`.

---

## Project Structure

```
src/
├── app/
│   ├── home/                  # Landing page (featured courses, lectures)
│   ├── livro-espiritos/       # Book of Spirits Q&A module (daily question)
│   ├── blog/                  # Spiritual blog articles
│   ├── agenda/                # Upcoming lectures/events
│   ├── palestra/              # Past lectures
│   ├── obras-basicas/         # Foundational Spiritist works library
│   ├── pedido-vibracoes/      # Prayer/vibration request form
│   ├── detalhes-curso/        # Course detail view
│   ├── inscricao-curso/       # Course enrollment form
│   ├── area-aluno/            # Protected student area (lazy-loaded)
│   │   ├── guards/            # authGuard — protects area-aluno routes
│   │   ├── services/          # AuthService, PerfilService, ProgressoService
│   │   ├── models/            # TypeScript interfaces (CursoAluno, Aula, etc.)
│   │   └── mocks/             # Mock data for development
│   ├── nav-menu/              # Navigation bar component
│   ├── shared/                # Reusable components (share buttons, etc.)
│   ├── services/              # Shared services (CepService, PalestrasService, etc.)
│   ├── app.ts                 # Root component with <router-outlet>
│   ├── app.routes.ts          # Route definitions
│   └── app.config.ts          # App-level providers (HttpClient, Router)
├── assets/
│   ├── palestras.json               # Upcoming lectures data
│   ├── palestras-realizadas.json    # Past lectures data
│   ├── temas.json                   # Lecture themes
│   ├── blog.json                    # Blog posts (HTML content included)
│   ├── perguntas_respostas.json     # Questions from Book of Spirits
│   ├── sobre-mim.json               # About the instructor
│   ├── sobre.json                   # About the platform
│   └── obras-basicas.json           # Foundational works
├── environments/
│   ├── environment.ts               # Dev: http://localhost:59180/api
│   └── Environment.prod.ts          # Prod: https://api.coracaoevangelho.com.br/api
├── styles.scss                      # Global CSS variables and utility classes
├── main.ts                          # Bootstrap entry point
└── index.html                       # HTML shell
```

---

## Architecture & Key Conventions

### Standalone Components (Angular 17)
All components use the standalone pattern — **no NgModules**. Every component declares its own `imports` array.

```typescript
@Component({
  selector: 'app-example',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.scss']
})
```

### Services
All services use `providedIn: 'root'` for tree-shaking. No need to add them to any module.

```typescript
@Injectable({ providedIn: 'root' })
export class ExampleService { }
```

### RxJS Subscription Management
Use the `takeUntil` + `Subject` pattern to avoid memory leaks:

```typescript
private destroy$ = new Subject<void>();

ngOnInit() {
  this.service.data$.pipe(takeUntil(this.destroy$)).subscribe(...)
}

ngOnDestroy() {
  this.destroy$.next();
  this.destroy$.complete();
}
```

### Routing
Routes are defined in `src/app/app.routes.ts`. The student area uses lazy loading:

```typescript
{ path: 'area-aluno', loadComponent: () => import('./area-aluno/...'), canActivate: [authGuard] }
```

The `authGuard` in `src/app/area-aluno/guards/auth.guard.ts` checks `AuthService.isLoggedIn()` and redirects to `/login` if not authenticated.

### File Naming
- Components: `feature-name.component.ts` / `.html` / `.scss` / `.spec.ts`
- Services: `feature-name.service.ts`
- Models/interfaces: `feature-name.model.ts` or files inside `models/` directory
- Component selectors: `app-feature-name` (kebab-case)

---

## Environments & API

| Environment | API Base URL |
|-------------|-------------|
| Development | `http://localhost:59180/api` |
| Production  | `https://api.coracaoevangelho.com.br/api` |

Environment files are in `src/environments/`. Angular's build system swaps them automatically with `--configuration production`.

**External API:** ViaCEP (`https://viacep.com.br/ws/{cep}/json`) for Brazilian postal code lookups, used in the enrollment form.

---

## Authentication

Authentication is **currently mocked** for development:

- Any valid email + password `"123456"` logs in
- The logged-in user is stored in `localStorage` under the key `ce_usuario_logado` (base64-encoded user ID)
- User profile is stored under `ce_perfil_[userId]`
- `AuthService` exposes a `BehaviorSubject<boolean>` (`isLoggedIn$`) for reactive auth state

**Production:** Backend integration is planned at `/api/` endpoints. The `PedidoVibracaoService` is the only service currently making real HTTP calls (`POST /api/pedidos-vibracao`).

---

## Global Styling

CSS custom properties are defined in `src/styles.scss`:

```scss
:root {
  --primary-color: #0047AB;
  --primary-light: #4F7CAC;
  --primary-dark: #003380;
  --accent-color: #E0E8F5;
  --white-color: #FFFFFF;
  --text-color: #333333;
  --background-color: #F8FAFF;
  --card-background: #FFFFFF;
  --shadow-color: rgba(0, 71, 171, 0.1);
}
```

- Font: **Roboto** (Google Fonts)
- Responsive: 16px desktop / 14px mobile
- Component styles use BEM-inspired class naming with dash separators
- Utility classes: `mt-1` through `mt-4`, `mb-1` through `mb-4`, `text-center`, `fade-in`

---

## TypeScript Configuration

Strict mode is fully enabled in `tsconfig.json`:

- `strict: true`
- `noImplicitOverride: true`
- `noPropertyAccessFromIndexSignature: true`
- `noImplicitReturns: true`
- `noFallthroughCasesInSwitch: true`
- Angular: `strictInjectionParameters`, `strictInputAccessModifiers`, `strictTemplates`

All new code must pass these checks. Run `npm run build` to verify before committing.

---

## Static Content / Data Files

Much of the app content is driven by JSON files in `src/assets/`. When adding or modifying content (blog posts, lectures, questions), edit the relevant JSON file. The components load these via `HttpClient` or direct Angular asset imports.

---

## Deployment

| File | Target |
|------|--------|
| `static.json` | Heroku / static hosting — rewrites all paths to `index.html` for SPA routing |
| `web.config` | Azure / IIS — URL rewriting rules for SPA routing |

The production build output is in `dist/livro-dos-espiritos-app/`.

---

## Key Models (TypeScript Interfaces)

Located in `src/app/area-aluno/models/`:

| Interface | Description |
|-----------|-------------|
| `Usuario` | Logged-in user |
| `PerfilAluno` | Student profile (address, bio, etc.) |
| `CursoAluno` | Course with enrolled status |
| `Aula` | Individual lesson within a course |
| `ProgressoAula` | Lesson-level progress |
| `ProgressoCurso` | Course-level progress |
| `Certificado` | Completion certificate |
| `Palestra` | Lecture (past or upcoming) |
| `PedidoVibracao` | Prayer/vibration request payload |
