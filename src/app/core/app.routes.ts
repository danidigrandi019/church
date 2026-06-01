import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('../features/pages/home/components/home.component').then(m => m.HomeComponent)
  },
  {
    path: 'history',
    loadComponent: () => import('../features/pages/history/components/history.component').then(m => m.HistoryComponent)
  },
  {
    path: '**',
    redirectTo: ''
  }
];
