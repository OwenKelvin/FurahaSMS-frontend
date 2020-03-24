import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ELearningEditCourseRoutingModule } from './e-learning-edit-course-routing.module';
import { ELearningEditCourseComponent } from './e-learning-edit-course.component';
import { AppLoadingBubbleModule } from 'src/app/modules/app-loading-bubble';
import { ModalModule } from 'ngx-bootstrap/modal';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppInputModule } from 'src/app/modules/app-input.module';
import { ELearningTopicObjectivesModule } from '../../e-learning-topic-objectives/e-learning-topic-objectives.module';
import { ELearningTopicMaterialsModule } from '../../e-learning-topic-materials/e-learning-topic-materials.module';


@NgModule({
  declarations: [ELearningEditCourseComponent],
  imports: [
    CommonModule,
    ELearningEditCourseRoutingModule,
    AppLoadingBubbleModule,
    ModalModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    AppInputModule,
    ELearningTopicObjectivesModule,
    ELearningTopicMaterialsModule
  ]
})
export class ELearningEditCourseModule { }
