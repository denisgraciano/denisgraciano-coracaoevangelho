import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-nav-menu',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <nav class="nav-menu">
      <div class="nav-container">
        <div class="nav-logo">
          <h2>Centro Espírita</h2>
        </div>
        <ul class="nav-links">
          <li><a routerLink="/" routerLinkActive="active" [routerLinkActiveOptions]="{exact: true}">Home</a></li>
          <li><a routerLink="/livro-dos-espiritos" routerLinkActive="active">Livro dos Espíritos</a></li>
          <li><a routerLink="/agenda" routerLinkActive="active">Agenda de Palestras</a></li>
          <li><a routerLink="/palestras-realizadas" routerLinkActive="active">Palestras</a></li>
          <li><a routerLink="/sobre" routerLinkActive="active">Sobre</a></li>
        </ul>
      </div>
    </nav>
  `,
  styles: [`
    .nav-menu {
      background-color: var(--primary-color);
      color: var(--white-color);
      box-shadow: 0 2px 4px var(--shadow-color);
      position: sticky;
      top: 0;
      z-index: 100;
    }
    
    .nav-container {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0.5rem 1.5rem;
      max-width: 1200px;
      margin: 0 auto;
    }
    
    .nav-logo h2 {
      margin: 0;
      font-size: 1.3rem;
    }
    
    .nav-links {
      display: flex;
      list-style: none;
      margin: 0;
      padding: 0;
      gap: 1.5rem;
    }
    
    .nav-links a {
      color: var(--white-color);
      text-decoration: none;
      padding: 0.5rem 0;
      font-weight: 500;
      position: relative;
      transition: color 0.3s;
    }
    
    .nav-links a:hover {
      color: var(--accent-color);
    }
    
    .nav-links a.active {
      color: var(--accent-color);
    }
    
    .nav-links a.active::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 2px;
      background-color: var(--accent-color);
    }
    
    @media (max-width: 768px) {
      .nav-container {
        flex-direction: column;
        padding: 0.5rem;
      }
      
      .nav-logo {
        margin-bottom: 0.5rem;
      }
      
      .nav-links {
        width: 100%;
        justify-content: center;
        flex-wrap: wrap;
        gap: 1rem;
      }
    }
    
    @media (max-width: 480px) {
      .nav-links {
        flex-direction: column;
        align-items: center;
      }
      
      .nav-links li {
        width: 100%;
        text-align: center;
      }
      
      .nav-links a {
        display: block;
        padding: 0.5rem;
      }
    }
  `]
})
export class NavMenuComponent { }
