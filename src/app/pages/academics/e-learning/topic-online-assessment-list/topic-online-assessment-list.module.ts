import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopicOnlineAssessmentListComponent } from './topic-online-assessment-list.component';
import {RouterModule} from '@angular/router';
import {DurationModule} from '../../../../shared/duration/duration.module';
import {FormsModule} from '@angular/forms';



@NgModule({
  declarations: [TopicOnlineAssessmentListComponent],
  exports: [
    TopicOnlineAssessmentListComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    DurationModule,
    FormsModule
  ]
})
export class TopicOnlineAssessmentListModule { }
