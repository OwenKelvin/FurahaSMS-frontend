import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentPaymentRoutingModule } from './student-payment-routing.module';
import { StudentPaymentComponent } from './student-payment.component';
import { AppRecentlyCreatedStudent } from '../../admissions/student-admissions/students-recently-created/students-recently-created.module';
import { StudentPaymentStatementComponent } from './student-payment-statement/student-payment-statement.component';
import { AppLoadingBubbleModule } from 'src/app/modules/app-loading-bubble';


@NgModule({
  declarations: [StudentPaymentComponent, StudentPaymentStatementComponent],
  imports: [
    CommonModule,
    StudentPaymentRoutingModule,
    AppRecentlyCreatedStudent,
    AppLoadingBubbleModule
  ]
})
export class StudentPaymentModule { }
