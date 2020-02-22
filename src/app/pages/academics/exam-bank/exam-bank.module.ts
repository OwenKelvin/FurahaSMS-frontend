import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExamBankRoutingModule } from './exam-bank-routing.module';
import { ExamBankDashboardComponent } from './exam-bank-dashboard/exam-bank-dashboard.component';
import { AppDashboardLinksModule } from 'src/app/modules/app-dashboard-links';
import { StoreModule } from '@ngrx/store';
import * as fromExamPaper from './store/reducers/exam-paper.reducer';
import { EffectsModule } from '@ngrx/effects';
import { ExamPaperEffects } from './store/effects/exam-paper.effects';
import { AppLoadingBubbleModule } from 'src/app/modules/app-loading-bubble';


@NgModule({
  declarations: [
    ExamBankDashboardComponent,
  ],
  imports: [
    CommonModule,
    ExamBankRoutingModule,
    AppDashboardLinksModule,
    StoreModule.forFeature(fromExamPaper.examPaperFeatureKey, fromExamPaper.reducer),
    EffectsModule.forFeature([ExamPaperEffects]),
    AppLoadingBubbleModule
  ]
})
export class ExamBankModule { }
