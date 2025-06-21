import { Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { LivroDosEspiritosComponent } from './livro-dos-espiritos.component';
import { AgendaComponent } from './agenda/components/palestra/agenda.component';
import { PalestrasRealizadasComponent } from './palestras-realizadas.component';
import { SobreComponent } from './sobre.component';


export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'livro-dos-espiritos', component: LivroDosEspiritosComponent },
  { path: 'agenda', component: AgendaComponent },
  { path: 'palestra', component: PalestrasRealizadasComponent },
  { path: 'palestras-realizadas', component: PalestrasRealizadasComponent },
  { path: 'sobre', component: SobreComponent },
  { path: '**', redirectTo: '' }
];
