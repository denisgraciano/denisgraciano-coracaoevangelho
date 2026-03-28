// src/app/area-admin/layout/admin-layout.component.ts
import { Component, OnDestroy, OnInit } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { AuthService } from '../../area-aluno/services/auth.service';

interface MenuItem {
  label: string;
  icon: string;
  route: string;
  ariaLabel: string;
}

@Component({
  selector: 'app-admin-layout',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive, CommonModule],
  templateUrl: './admin-layout.component.html',
  styleUrls: ['./admin-layout.component.scss'],
})
export class AdminLayoutComponent implements OnInit, OnDestroy {
  private destroy$ = new Subject<void>();

  nomeAdmin = '';
  sidebarAberta = true;

  readonly menus: MenuItem[] = [
    { label: 'Dashboard',        icon: '📊', route: '/admin',              ariaLabel: 'Ir para o dashboard' },
    { label: 'Cursos',           icon: '🎓', route: '/admin/cursos',       ariaLabel: 'Gerenciar cursos' },
    { label: 'Matrículas',       icon: '📋', route: '/admin/matriculas',   ariaLabel: 'Ver matrículas' },
    { label: 'Pedidos',          icon: '🙏', route: '/admin/pedidos',      ariaLabel: 'Ver pedidos de vibração' },
    { label: 'Usuários',         icon: '👥', route: '/admin/usuarios',     ariaLabel: 'Gerenciar usuários' },
  ];

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.authService.usuario$
      .pipe(takeUntil(this.destroy$))
      .subscribe(u => {
        this.nomeAdmin = u?.nome ?? 'Admin';
      });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  toggleSidebar(): void {
    this.sidebarAberta = !this.sidebarAberta;
  }

  logout(): void {
    this.authService.logout();
  }
}