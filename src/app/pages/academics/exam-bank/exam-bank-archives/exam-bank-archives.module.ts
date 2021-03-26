import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExamBankArchivesRoutingModule } from './exam-bank-archives-routing.module';
import { ExamBankArchivesComponent } from './exam-bank-archives.component';
import { AppLoadingBubbleModule } from 'src/app/modules/app-loading-bubble';
import { ExamRevisionModeComponent } from './exam-revision-mode/exam-revision-mode.component';
import { ExamViewModeComponent } from './exam-view-mode/exam-view-mode.component';
import { ViewExamComponent } from './view-exam/view-exam.component';
import { ViewQuestionRevisionModeComponent } from './view-question-revision-mode/view-question-revision-mode.component';
import { Number2AlphabetModule } from 'src/app/shared/number-2-alphabet/number-2-alphabet.module';
import { AppCheckboxModule } from 'src/app/shared/checkbox/checkbox.module';
import { FormsModule } from '@angular/forms';
import {MathModule} from '../../../../shared/math/math.module';
import { ReactiveComponentModule } from '@ngrx/component';


@NgModule({
  declarations: [
    ExamBankArchivesComponent,
    ExamRevisionModeComponent,
    ExamViewModeComponent,
    ViewExamComponent,
    ViewQuestionRevisionModeComponent
  ],
  imports: [
    CommonModule,
    ExamBankArchivesRoutingModule,
    AppLoadingBubbleModule,
    Number2AlphabetModule,
    AppCheckboxModule,
    FormsModule,
    MathModule,
    ReactiveComponentModule
  ]
})
export class ExamBankArchivesModule { }
