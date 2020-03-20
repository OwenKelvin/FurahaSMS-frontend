import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ELearningCoursesRoutingModule } from './e-learning-courses-routing.module';
import { ELearningCoursesComponent } from './e-learning-courses.component';


@NgModule({
  declarations: [ELearningCoursesComponent],
  imports: [
    CommonModule,
    ELearningCoursesRoutingModule
  ]
})
export class ELearningCoursesModule { }
