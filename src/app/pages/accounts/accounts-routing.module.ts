import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccountsComponent } from './accounts.component';


const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: AccountsComponent,
    data: {
      breadcrumb: null
    },
  },
  {
    path: 'financial-plan',
    loadChildren: () => import('./financial-plan/financial-plan.module').then(m => m.FinancialPlanModule),
    data: {
      breadcrumb: 'Financial Plan'
    }
  },
  {
    path: 'student-fee-payment',
    loadChildren: () => import('./student-payment/student-payment.module').then(m => m.StudentPaymentModule),
    data: {
      breadcrumb: 'Student Payment'
    }
  },
  {
    path: 'admin',
    loadChildren: () => import('./accounts-admin/accounts-admin.module').then(m => m.AccountsAdminModule),
    data: {
      breadcrumb: 'Admin'
    }
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountsRoutingModule { }
