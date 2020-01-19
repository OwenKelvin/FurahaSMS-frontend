import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GuestGuard } from '../guards/guest.guard';
import { AuthGuard } from '../guards/auth.guard';
import { LayoutComponent } from '../components/layout/layout.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    canActivate: [GuestGuard],
    loadChildren: () => import('../components/home/home.module').then(m => m.HomeModule)
  },
  {
    path: '',
    canActivate: [AuthGuard],
    component: LayoutComponent,
    data: {
      breadcrumb: null
    },
    children: [
      {
        path: 'dashboard',
        loadChildren: () => import('../components/dashboard/dashboard.module').then(m => m.DashboardModule),
        data: {
          breadcrumb: 'Dashboard'
        }
      },
      {
        path: 'login',
        loadChildren: () => import('../components/login/login.module').then(m => m.LoginModule)
      },
      {
        path: 'procurements',
        loadChildren: () => import('./procurements/procurements.module').then(m => m.ProcurementsModule),
        data: {
          breadcrumb: 'Procurements'
        }
      },
      {
        path: 'admissions',
        loadChildren: () => import('../components/admissions/admissions.module').then(m => m.AdmissionsModule),
        data: {
          breadcrumb: 'Admissions'
        }
      },
      {
        path: 'library',
        loadChildren: () => import('./library/library.module').then(m => m.LibraryModule),
        data: {
          breadcrumb: 'Library'
        }
      },
      {
        path: 'academics',
        loadChildren: () => import('./academics/academics.module').then(m => m.AcademicsModule),
        data: {
          breadcrumb: 'Academics'
        }
      },
      {
        path: 'accounts',
        loadChildren: () => import('../components/accounts/accounts.module').then(m => m.AccountsModule),
        data: {
          breadcrumb: 'Accounts'
        }
      },
      {
        path: 'sports',
        loadChildren: () => import('../components/sports/sports.module').then(m => m.SportsModule),
        data: {
          breadcrumb: 'Sports'
        }
      },
      {
        path: 'school-management',
        loadChildren: () => import('../components/management/management.module').then(m => m.SchoolManagementModule),
        data: {
          breadcrumb: 'Management'
        }
      },
      {
        path: 'time-table',
        loadChildren: () => import('../components/time-table/time-table.module').then(m => m.TimeTableModule),
        data: {
          breadcrumb: 'TimeTable'
        }
      },
      {
        path: 'reports',
        loadChildren: () => import('../components/reports/reports.module').then(m => m.ReportsModule),
        data: {
          breadcrumb: 'Reports'
        }
      }
    ]
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
