import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ELearningAdminRoutingModule} from './e-learning-admin-routing.module';
import {ELearningAdminComponent} from './e-learning-admin.component';
import {FormsModule} from '@angular/forms';
import {AppLoadingBubbleModule} from 'src/app/modules/app-loading-bubble';
import {ELearningAdminCourseComponent} from './e-learning-admin-course/e-learning-admin-course.component';
import {ELearningCourseModule} from '../e-learning-course/e-learning-course.module';
import {ELearningDeleteLearningOutcomeComponent} from './e-learning-delete-learning-outcome/e-learning-delete-learning-outcome.component';
import { ReactiveComponentModule } from '@ngrx/component';


@NgModule({
  declarations: [
    ELearningAdminComponent,
    ELearningAdminCourseComponent,
    ELearningDeleteLearningOutcomeComponent],
  imports: [
    CommonModule,
    ELearningAdminRoutingModule,
    FormsModule,
    AppLoadingBubbleModule,
    ELearningCourseModule,
    ReactiveComponentModule
  ]
})
export class ELearningAdminModule {
}
