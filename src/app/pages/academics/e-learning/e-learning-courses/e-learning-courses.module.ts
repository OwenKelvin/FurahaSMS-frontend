import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ELearningCoursesRoutingModule} from './e-learning-courses-routing.module';
import {ELearningCoursesComponent} from './e-learning-courses.component';
import {ELearningCourseModule} from '../e-learning-course/e-learning-course.module';
import {AppLoadingBubbleModule} from 'src/app/modules/app-loading-bubble';
import {FormsModule} from '@angular/forms';
import {ELearningCourseItemComponent} from './e-learning-course-item/e-learning-course-item.component';
import {ELearningCourseViewComponent} from './e-learning-course-view/e-learning-course-view.component';
import {ELearningTopicMaterialsModule} from '../e-learning-topic-materials/e-learning-topic-materials.module';
import {ELearningTopicObjectivesModule} from '../e-learning-topic-objectives/e-learning-topic-objectives.module';
import {ModalModule} from 'ngx-bootstrap/modal';
import {TopicOnlineAssessmentListModule} from '../topic-online-assessment-list/topic-online-assessment-list.module';
import { ReactiveComponentModule } from '@ngrx/component';

@NgModule({
  declarations: [
    ELearningCoursesComponent,
    ELearningCourseItemComponent,
    ELearningCourseViewComponent,

  ],
  imports: [
    CommonModule,
    ELearningCoursesRoutingModule,
    ELearningCourseModule,
    AppLoadingBubbleModule,
    FormsModule,
    ELearningTopicMaterialsModule,
    ELearningTopicObjectivesModule,
    ModalModule.forRoot(),
    TopicOnlineAssessmentListModule,
    ReactiveComponentModule
  ]
})
export class ELearningCoursesModule {
}
