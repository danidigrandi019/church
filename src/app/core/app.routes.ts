import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('../features/pages/home/home.component').then(m => m.HomeComponent)
  },
  {
    path: 'history',
    loadComponent: () => import('../features/pages/about_us/history/history.component').then(m => m.HistoryComponent)
  },
  {
    path: 'team',
    loadComponent: () => import('../features/pages/about_us/team/team.component').then(m => m.TeamComponent)
  },
  {
    path: 'young-generation',
    loadComponent: () => import('../features/pages/ambiance/young_generation/young_generation.component').then(m => m.YoungGenerationComponent)
  },
  {
    path: 'kids',
    loadComponent: () => import('../features/pages/ambiance/kids/kids.component').then(m => m.KidsComponent)
  },
  {
    path: 'events',
    loadComponent: () => import('../features/pages/events/events.component').then(m => m.EventsComponent)
  },
  {
    path: 'donate',
    loadComponent: () => import('../features/pages/donate/donate.component').then(m => m.DonateComponent)
  },
  {
    path: '**',
    redirectTo: ''
  }
];
