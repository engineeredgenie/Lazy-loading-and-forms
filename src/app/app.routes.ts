import { Routes } from '@angular/router';
import {DashboardComponent} from './dashboard/dashboard.component';
import {FormsComponent} from './forms/forms.component';
import {TemplateFormComponent} from './forms/template-form/template-form.component';
import {ReactiveFormComponent} from './forms/reactive-form/reactive-form.component';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'dashboard'
  },
  {
    path: 'dashboard',
    //component: DashboardComponent,
    loadComponent: () => import('./dashboard/dashboard.component').then(m => m.DashboardComponent),
  },
  {
    path: 'forms',
    loadComponent: () => import('./forms/forms.component').then(m => m.FormsComponent),
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'template-form'
      },
      {
        path: 'template-form',
        loadComponent: () => import('./forms/template-form/template-form.component').then(m => m.TemplateFormComponent),
      },
      {
        path: 'reactive-form',
        loadComponent: () => import('./forms/reactive-form/reactive-form.component').then(m => m.ReactiveFormComponent),
      },
    ]
  },
  {
    path: 'signals',
    loadComponent: () => import('./signals/signals.component').then(m => m.SignalsComponent),
  },
  {
    path: 'observables',
    loadComponent: () => import('./observables/observables.component').then(m => m.ObservablesComponent),
  },
  {
    path: 'subjects',
    loadComponent: () => import('./subjects/subjects.component').then(m => m.SubjectsComponent),
  }
];
