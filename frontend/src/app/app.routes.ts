import { Routes } from '@angular/router';
import { AppShell } from './layout/app-shell/app-shell';
import { PublicShell } from './layout/public-shell/public-shell';

export const routes: Routes = [
  {
    path: '',
    component: PublicShell,
    children: [
      {
        path: '',
        pathMatch: 'full',
        loadComponent: () => import('./features/home/home-page').then((module) => module.HomePage)
      }
    ]
  },
  {
    path: 'cuenta',
    component: AppShell,
    children: [
      {
        path: '',
        loadComponent: () => import('./features/account/account-page').then((module) => module.AccountPage)
      }
    ]
  },
  // TODO(routing): reemplazar este redirect temporal por una ruta explícita a NotFoundPage.
  { path: '**', redirectTo: '' }
];
