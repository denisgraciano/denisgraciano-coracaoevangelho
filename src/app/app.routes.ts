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

export const routes: Routes = [
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
  { path: '**', redirectTo: '' }
];
