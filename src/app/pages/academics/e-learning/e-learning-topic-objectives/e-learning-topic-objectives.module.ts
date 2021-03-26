import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ELearningTopicObjectivesComponent } from './e-learning-topic-objectives.component';
import {ReactiveFormsModule} from '@angular/forms';
import {AppValidateSubmitButtonsModule} from '../../../../components/validate-submit-buttons/validate-submit-buttons.module';
import {AppInputModule} from '../../../../components/input/app-input.module';
import { ReactiveComponentModule } from '@ngrx/component';



@NgModule({
  declarations: [ELearningTopicObjectivesComponent],
  exports: [ELearningTopicObjectivesComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AppValidateSubmitButtonsModule,
    AppInputModule,
    ReactiveComponentModule
  ]
})
export class ELearningTopicObjectivesModule { }
