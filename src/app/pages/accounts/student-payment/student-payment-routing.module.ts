import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StudentPaymentComponent } from './student-payment.component';


const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: StudentPaymentComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentPaymentRoutingModule { }
