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
      }
    ]
  },
];
