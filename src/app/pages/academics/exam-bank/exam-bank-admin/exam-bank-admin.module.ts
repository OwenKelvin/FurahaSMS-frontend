import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExamBankAdminRoutingModule } from './exam-bank-admin-routing.module';
import { ExamBankAdminComponent } from './exam-bank-admin.component';
import { CreateExamComponent } from './create-exam/create-exam.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppInputModule } from 'src/app/modules/app-input.module';
import { AdminExamPaperViewComponent } from './admin-exam-paper-view/admin-exam-paper-view.component';
import { AdminExamPaperComponent } from './admin-exam-paper/admin-exam-paper.component';
import { AppLoadingBubbleModule } from 'src/app/modules/app-loading-bubble';
import { AdminExamPaperEditComponent } from './admin-exam-paper-edit/admin-exam-paper-edit.component';
import { ModalModule } from 'ngx-bootstrap/modal';


@NgModule({
  declarations: [
    ExamBankAdminComponent,
    CreateExamComponent,
    AdminExamPaperViewComponent,
    AdminExamPaperComponent,
    AdminExamPaperEditComponent
  ],
  imports: [
    CommonModule,
    ExamBankAdminRoutingModule,
    HttpClientModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    AppInputModule,
    AppLoadingBubbleModule,
    ModalModule.forRoot()
  ]
})
export class ExamBankAdminModule { }
