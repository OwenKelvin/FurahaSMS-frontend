import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ExamBankDashboardComponent } from './exam-bank-dashboard/exam-bank-dashboard.component';
import { ExamBankArchivesComponent } from './exam-bank-archives/exam-bank-archives.component';


const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: ExamBankDashboardComponent,
    data: {
      breadcrumb: null
    },
  },
  {
    path: 'admin',
    loadChildren: () => import('./exam-bank-admin/exam-bank-admin.module').then(m => m.ExamBankAdminModule),
    data: {
      breadcrumb: 'Admin'
    },
  },
  {
    path: 'archives',
    loadChildren: () => import('./exam-bank-archives/exam-bank-archives.module').then(m => m.ExamBankArchivesModule),
    data: {
      breadcrumb: 'Archives'
    },
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExamBankRoutingModule { }
