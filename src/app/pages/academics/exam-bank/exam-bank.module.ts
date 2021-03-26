import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExamBankRoutingModule } from './exam-bank-routing.module';
import { ExamBankDashboardComponent } from './exam-bank-dashboard/exam-bank-dashboard.component';
import { AppLinksModule } from 'src/app/shared/links/links.module';
import { StoreModule } from '@ngrx/store';
import * as fromExamPaper from './store/reducers/exam-paper.reducer';
import { EffectsModule } from '@ngrx/effects';
import { ExamPaperEffects } from './store/effects/exam-paper.effects';
import { AppLoadingBubbleModule } from 'src/app/modules/app-loading-bubble';
import { ReactiveComponentModule } from '@ngrx/component';


@NgModule({
  declarations: [
    ExamBankDashboardComponent,
  ],
  imports: [
    CommonModule,
    ExamBankRoutingModule,
    AppLinksModule,
    StoreModule.forFeature(fromExamPaper.examPaperFeatureKey, fromExamPaper.reducer),
    EffectsModule.forFeature([ExamPaperEffects]),
    AppLoadingBubbleModule,
    ReactiveComponentModule
  ]
})
export class ExamBankModule { }
