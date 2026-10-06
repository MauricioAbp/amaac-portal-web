import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

interface NavigationItem {
  readonly label: string;
  readonly icon: string;
  readonly route?: string;
  readonly badge?: string;
}

interface NavigationGroup {
  readonly label: string;
  readonly items: readonly NavigationItem[];
}

@Component({
  selector: 'app-shell',
  imports: [RouterLink, RouterLinkActive, RouterOutlet],
  templateUrl: './app-shell.html',
  styleUrl: './app-shell.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppShell {
  protected readonly isNavigationOpen = signal(false);
  protected readonly navigation: readonly NavigationGroup[] = [
    { label: 'Principal', items: [{ label: 'Dashboard', icon: 'dashboard' }] },
    {
      label: 'Selección y miembros',
      items: [
        { label: 'Postulaciones', icon: 'how_to_reg', badge: '18' },
        { label: 'Entrevistas', icon: 'calendar_month' },
        { label: 'Miembros', icon: 'group' }
      ]
    },
    {
      label: 'Gestión institucional',
      items: [
        { label: 'Campañas y actividades', icon: 'campaign' },
        { label: 'Iniciativas', icon: 'handshake' },
        { label: 'Noticias y eventos', icon: 'newspaper' },
        { label: 'Donaciones', icon: 'volunteer_activism' }
      ]
    },
    {
      label: 'Administración',
      items: [
        { label: 'Usuarios y roles', icon: 'manage_accounts' },
        { label: 'Mi cuenta y seguridad', icon: 'account_circle', route: '/cuenta' }
      ]
    }
  ];

  protected closeNavigation(): void {
    this.isNavigationOpen.set(false);
  }

  protected toggleNavigation(): void {
    this.isNavigationOpen.update((isOpen) => !isOpen);
  }
}
