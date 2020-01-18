import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';;
import { DashboardComponent } from './dashboard/dashboard.component';
import { LayoutComponent } from './layout/layout.component';
import { AuthGuard } from './../guards/auth.guard';
import { GuestGuard } from './../guards/guest.guard';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    canActivate: [GuestGuard],
    loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
  },
  
  {
    path: 'dashboard',
    loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then(m => m.LoginModule)
  },
  {
    path: 'procurements',
    loadChildren: () => import('./procurements/procurements.module').then(m => m.ProcurementsModule)
  },
  {
    path: 'admissions',
    loadChildren: () => import('./admissions/admissions.module').then(m => m.AdmissionsModule)
  },
  {
    path: 'library',
    loadChildren: () => import('./library/library.module').then(m => m.LibraryModule)
  },
  {
    path: 'academics',
    loadChildren: () => import('./academics/academics.module').then(m => m.AcademicsModule)
  },
  {
    path: 'accounts',
    loadChildren: () => import('./accounts/accounts.module').then(m => m.AccountsModule)
  },
  {
    path: 'sports',
    loadChildren: () => import('./sports/sports.module').then(m => m.SportsModule)
  },
  {
    path: 'school-management',
    loadChildren: () => import('./management/management.module').then(m => m.SchoolManagementModule)
  },
  {
    path: 'time-table',
    loadChildren: () => import('./time-table/time-table.module').then(m => m.TimeTableModule)
  },
  {
    path: 'reports',
    loadChildren: () => import('./reports/reports.module').then(m => m.ReportsModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComponentsRoutingModule { }
