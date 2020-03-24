import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ELearningEditCourseRoutingModule } from './e-learning-edit-course-routing.module';
import { ELearningEditCourseComponent } from './e-learning-edit-course.component';
import { AppLoadingBubbleModule } from 'src/app/modules/app-loading-bubble';
import { ModalModule } from 'ngx-bootstrap/modal';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppInputModule } from 'src/app/modules/app-input.module';


@NgModule({
  declarations: [ELearningEditCourseComponent],
  imports: [
    CommonModule,
    ELearningEditCourseRoutingModule,
    AppLoadingBubbleModule,
    ModalModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    AppInputModule
  ]
})
export class ELearningEditCourseModule { }
