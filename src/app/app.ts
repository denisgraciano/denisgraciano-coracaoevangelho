import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { NavMenuComponent } from './nav-menu/nav-menu.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, NavMenuComponent],
  template: `
    <div class="app-container">
      <app-nav-menu></app-nav-menu>
      <router-outlet></router-outlet>
      <footer class="app-footer">
        <p>Videira Espirita - Desenvolvido com ❤️</p>
      </footer>
    </div>
  `,
  styles: [`
    .app-container {
      display: flex;
      flex-direction: column;
      min-height: 100vh;
    }
    
    .app-footer {
      background-color: var(--primary-dark);
      color: var(--white-color);
      text-align: center;
      padding: 1rem;
      margin-top: auto;
    }
  `]
})
export class AppComponent { }
