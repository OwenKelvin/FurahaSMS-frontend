import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentPaymentRoutingModule } from './student-payment-routing.module';
import { StudentPaymentComponent } from './student-payment.component';


@NgModule({
  declarations: [StudentPaymentComponent],
  imports: [
    CommonModule,
    StudentPaymentRoutingModule
  ]
})
export class StudentPaymentModule { }
