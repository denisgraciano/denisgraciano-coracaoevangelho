import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';

@Component({
  selector: 'app-nav-menu',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <nav class="navbar">
      <div class="nav-container">
        <div class="nav-logo">
          <a routerLink="/" class="logo-link">
            <span class="logo-text">Coração do Evangelho</span>
          </a>
        </div>
        
        <div class="nav-menu" [class.active]="menuAberto">
          <a routerLink="/" 
             routerLinkActive="active" 
             [routerLinkActiveOptions]="{exact: true}"
             class="nav-link"
             (click)="fecharMenu()">
            Home
          </a>
          
          <a routerLink="/livro-dos-espiritos" 
             routerLinkActive="active" 
             class="nav-link"
             (click)="fecharMenu()">
            Livro dos Espíritos
          </a>
          
          <a routerLink="/agenda" 
             routerLinkActive="active" 
             class="nav-link"
             (click)="fecharMenu()">
            Agenda de Palestras
          </a>
          
          <a routerLink="/pedidos-vibracoes" 
             routerLinkActive="active" 
             class="nav-link"
             (click)="fecharMenu()">
            Vibrações
          </a>          

          <a routerLink="/palestras-realizadas" 
             routerLinkActive="active" 
             class="nav-link"
             (click)="fecharMenu()">
            Palestras Realizadas
          </a>
          
          <a routerLink="/sobre" 
             routerLinkActive="active" 
             class="nav-link"
             (click)="fecharMenu()">
            Sobre
          </a>
        </div>
        
        <div class="nav-toggle" (click)="alternarMenu()">
          <span class="bar"></span>
          <span class="bar"></span>
          <span class="bar"></span>
        </div>
      </div>
    </nav>
  `,
  styles: [`
    .navbar {
      background: #2c5aa0;
      padding: 0;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
      position: sticky;
      top: 0;
      z-index: 1000;
    }
    
    .nav-container {
      max-width: 1200px;
      margin: 0 auto;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0 20px;
      height: 70px;
    }
    
    .nav-logo .logo-link {
      text-decoration: none;
      color: white;
    }
    
    .logo-text {
      font-size: 1.5em;
      font-weight: bold;
      color: white;
    }
    
    .nav-menu {
      display: flex;
      gap: 30px;
      align-items: center;
    }
    
    .nav-link {
      color: white;
      text-decoration: none;
      padding: 10px 15px;
      border-radius: 5px;
      transition: all 0.3s ease;
      font-weight: 500;
      position: relative;
    }
    
    .nav-link:hover {
      background: rgba(255, 255, 255, 0.1);
      transform: translateY(-2px);
    }
    
    .nav-link.active {
      background: rgba(255, 255, 255, 0.2);
      font-weight: bold;
    }
    
    .nav-link.active::after {
      content: '';
      position: absolute;
      bottom: -5px;
      left: 50%;
      transform: translateX(-50%);
      width: 30px;
      height: 3px;
      background: white;
      border-radius: 2px;
    }
    
    .nav-toggle {
      display: none;
      flex-direction: column;
      cursor: pointer;
      padding: 5px;
    }
    
    .bar {
      width: 25px;
      height: 3px;
      background: white;
      margin: 3px 0;
      transition: 0.3s;
      border-radius: 2px;
    }
    
    @media (max-width: 768px) {
      .nav-menu {
        position: fixed;
        left: -100%;
        top: 70px;
        flex-direction: column;
        background: #2c5aa0;
        width: 100%;
        text-align: center;
        transition: 0.3s;
        box-shadow: 0 10px 27px rgba(0, 0, 0, 0.05);
        padding: 20px 0;
        gap: 0;
      }
      
      .nav-menu.active {
        left: 0;
      }
      
      .nav-link {
        padding: 15px 20px;
        display: block;
        width: 100%;
        margin: 5px 0;
      }
      
      .nav-link.active::after {
        display: none;
      }
      
      .nav-toggle {
        display: flex;
      }
      
      .nav-toggle.active .bar:nth-child(2) {
        opacity: 0;
      }
      
      .nav-toggle.active .bar:nth-child(1) {
        transform: translateY(8px) rotate(45deg);
      }
      
      .nav-toggle.active .bar:nth-child(3) {
        transform: translateY(-8px) rotate(-45deg);
      }
    }
  `]
})
export class NavMenuComponent {
  menuAberto = false;

  constructor(private router: Router) { }

  alternarMenu() {
    this.menuAberto = !this.menuAberto;
  }

  fecharMenu() {
    this.menuAberto = false;
  }
}

