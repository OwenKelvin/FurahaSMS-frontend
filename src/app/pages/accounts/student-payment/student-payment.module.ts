import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentPaymentRoutingModule } from './student-payment-routing.module';
import { StudentPaymentComponent } from './student-payment.component';
import { AppRecentlyCreatedStudent } from '../../admissions/student-admissions/students-recently-created/students-recently-created.module';
import { StudentPaymentStatementComponent } from './student-payment-statement/student-payment-statement.component';
import { AppLoadingBubbleModule } from 'src/app/modules/app-loading-bubble';
import { StudentPaymentFeeStructureComponent } from './student-payment-fee-structure/student-payment-fee-structure.component';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { NewPaymentReceiptComponent } from './new-payment-receipt/new-payment-receipt.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddCommaModule } from 'src/app/shared/add-comma/add-comma.module';
import { AppInputModule } from 'src/app/components/input/app-input.module';
import { AppValidateSubmitButtonsModule } from 'src/app/components/validate-submit-buttons/validate-submit-buttons.module';
import { ReactiveComponentModule } from '@ngrx/component';


@NgModule({
  declarations: [StudentPaymentComponent,
    StudentPaymentStatementComponent,
    StudentPaymentFeeStructureComponent,
    NewPaymentReceiptComponent],
  imports: [
    CommonModule,
    StudentPaymentRoutingModule,
    AppRecentlyCreatedStudent,
    AppLoadingBubbleModule,
    TabsModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    AddCommaModule,
    AppInputModule,
    AppValidateSubmitButtonsModule,
    ReactiveComponentModule
  ]
})
export class StudentPaymentModule { }
