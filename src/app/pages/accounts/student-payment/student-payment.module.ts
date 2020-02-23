import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentPaymentRoutingModule } from './student-payment-routing.module';
import { StudentPaymentComponent } from './student-payment.component';
import { AppRecentlyCreatedStudent } from '../../admissions/student-admissions/students-recently-created/students-recently-created.module';


@NgModule({
  declarations: [StudentPaymentComponent],
  imports: [
    CommonModule,
    StudentPaymentRoutingModule,
    AppRecentlyCreatedStudent
  ]
})
export class StudentPaymentModule { }
