import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExamBankAdminRoutingModule } from './exam-bank-admin-routing.module';
import { ExamBankAdminComponent } from './exam-bank-admin.component';


@NgModule({
  declarations: [ExamBankAdminComponent],
  imports: [
    CommonModule,
    ExamBankAdminRoutingModule
  ]
})
export class ExamBankAdminModule { }
