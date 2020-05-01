import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StudentPaymentComponent } from './student-payment.component';
import { StudentPaymentStatementComponent } from './student-payment-statement/student-payment-statement.component';
import { StudentPaymentFeeStructureComponent } from './student-payment-fee-structure/student-payment-fee-structure.component';


const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: StudentPaymentComponent
  },
  {
    path: 'student',
    data: {
      breadcrumb: 'Student'
    },
    children: [
      {
        path: ':id/fee-structure',
        component: StudentPaymentFeeStructureComponent
      },
      {
        path: ':id',
        data: {
          breadcrumb: null
        },
        component: StudentPaymentStatementComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentPaymentRoutingModule { }
