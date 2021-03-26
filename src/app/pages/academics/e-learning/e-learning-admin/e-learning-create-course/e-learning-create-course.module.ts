import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ELearningCreateCourseRoutingModule} from './e-learning-create-course-routing.module';
import {ELearningCreateCourseComponent} from './e-learning-create-course.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AppInputModule} from 'src/app/components/input/app-input.module';
import {EditorModule} from '@tinymce/tinymce-angular';
import {AppLoadingBubbleModule} from 'src/app/modules/app-loading-bubble';
import {ModalModule} from 'ngx-bootstrap/modal';
import {AppValidateSubmitButtonsModule} from 'src/app/components/validate-submit-buttons/validate-submit-buttons.module';
import {AppStarLabelRequiredModule} from '../../../../../components/label-star-required/app-star-label-required';
import {SortableModule} from 'ngx-bootstrap/sortable';
import {ELearningTopicObjectivesModule} from '../../e-learning-topic-objectives/e-learning-topic-objectives.module';
import {NgSelectModule} from '@ng-select/ng-select';
import { ReactiveComponentModule } from '@ngrx/component';


@NgModule({
  declarations: [ELearningCreateCourseComponent],
  imports: [
    CommonModule,
    ELearningCreateCourseRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AppInputModule,
    EditorModule,
    AppLoadingBubbleModule,
    ModalModule.forRoot(),
    AppValidateSubmitButtonsModule,
    AppStarLabelRequiredModule,
    SortableModule.forRoot(),
    ELearningTopicObjectivesModule,
    NgSelectModule,
    ReactiveComponentModule
  ],
  exports: [
    ELearningCreateCourseComponent
  ]
})
export class ELearningCreateCourseModule {
}
