import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ELearningCreateCourseRoutingModule } from './e-learning-create-course-routing.module';
import { ELearningCreateCourseComponent } from './e-learning-create-course.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppInputModule } from 'src/app/modules/app-input.module';


@NgModule({
  declarations: [ELearningCreateCourseComponent],
  imports: [
    CommonModule,
    ELearningCreateCourseRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AppInputModule,
    
  ]
})
export class ELearningCreateCourseModule { }
