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
    path: 'team',
    loadComponent: () => import('../features/pages/team/team.component').then(m => m.TeamComponent)
  },
  {
    path: 'young-generation',
    loadComponent: () => import('../features/pages/young_generation/young_generation.component').then(m => m.YoungGenerationComponent)
  },
  {
    path: '**',
    redirectTo: ''
  }
];
