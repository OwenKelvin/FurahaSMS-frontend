import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ExamBankAdminComponent } from './exam-bank-admin.component';


const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: ExamBankAdminComponent,
    data: {
      breadcrumb: null
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExamBankAdminRoutingModule { }
