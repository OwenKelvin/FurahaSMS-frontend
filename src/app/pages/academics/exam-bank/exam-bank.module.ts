import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExamBankRoutingModule } from './exam-bank-routing.module';
import { ExamBankDashboardComponent } from './exam-bank-dashboard/exam-bank-dashboard.component';
import { AppDashboardLinksModule } from 'src/app/modules/app-dashboard-links';
import { ExamBankArchivesComponent } from './exam-bank-archives/exam-bank-archives.component';


@NgModule({
  declarations: [
    ExamBankDashboardComponent,
    ExamBankArchivesComponent
  ],
  imports: [
    CommonModule,
    ExamBankRoutingModule,
    AppDashboardLinksModule
  ]
})
export class ExamBankModule { }
