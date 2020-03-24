import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ELearningCoursesRoutingModule } from './e-learning-courses-routing.module';
import { ELearningCoursesComponent } from './e-learning-courses.component';
import { ELearningCourseModule } from '../e-learning-course/e-learning-course.module';
import { AppLoadingBubbleModule } from 'src/app/modules/app-loading-bubble';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [ELearningCoursesComponent],
  imports: [
    CommonModule,
    ELearningCoursesRoutingModule,
    ELearningCourseModule,
    AppLoadingBubbleModule,
    FormsModule
  ]
})
export class ELearningCoursesModule { }
