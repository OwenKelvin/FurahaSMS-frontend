import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ELearningEditCourseRoutingModule} from './e-learning-edit-course-routing.module';
import {ELearningEditCourseComponent} from './e-learning-edit-course.component';
import {AppLoadingBubbleModule} from 'src/app/modules/app-loading-bubble';
import {ModalModule} from 'ngx-bootstrap/modal';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AppInputModule} from 'src/app/components/input/app-input.module';
import {ELearningTopicObjectivesModule} from '../../e-learning-topic-objectives/e-learning-topic-objectives.module';
import {ELearningTopicMaterialsModule} from '../../e-learning-topic-materials/e-learning-topic-materials.module';
import {ELearningCreateCourseModule} from '../e-learning-create-course/e-learning-create-course.module';
import {EditCourseContentItemComponent} from './edit-course-content-item/edit-course-content-item.component';
import {DeleteCourseContentItemComponent} from './delete-course-content-item/delete-course-content-item.component';
import {AppValidateSubmitButtonsModule} from '../../../../../components/validate-submit-buttons/validate-submit-buttons.module';
import {AppFilesizeModule} from '../../../../../shared/filesize/filesize.module';
import {FileExtensionModule} from '../../../../../shared/file-extention/file-extension.module';
import { ManageOnlineAssessmentComponent } from './manage-online-assessment/manage-online-assessment.component';
import {DurationPickerModule} from 'ngx-duration-picker';
import {TopicOnlineAssessmentListModule} from '../../topic-online-assessment-list/topic-online-assessment-list.module';
import { ReactiveComponentModule } from '@ngrx/component';


@NgModule({
  declarations: [
    ELearningEditCourseComponent,
    EditCourseContentItemComponent,
    DeleteCourseContentItemComponent,
    ManageOnlineAssessmentComponent
  ],
  imports: [
    CommonModule,
    ELearningEditCourseRoutingModule,
    AppLoadingBubbleModule,
    ModalModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    AppInputModule,
    ELearningTopicObjectivesModule,
    ELearningTopicMaterialsModule,
    ELearningCreateCourseModule,
    AppValidateSubmitButtonsModule,
    AppFilesizeModule,
    FileExtensionModule,
    DurationPickerModule,
    TopicOnlineAssessmentListModule,
    ReactiveComponentModule
  ]
})
export class ELearningEditCourseModule {
}
