import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ELearningCourseComponent } from './e-learning-course.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [ELearningCourseComponent],
  exports: [ELearningCourseComponent],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class ELearningCourseModule { }