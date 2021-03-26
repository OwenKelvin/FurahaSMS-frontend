import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {OnlineAssessmentRoutingModule} from './online-assessment-routing.module';
import { TakeOnlineExamDashboardComponent } from './take-online-exam-dashboard/take-online-exam-dashboard.component';
import {DurationModule} from '../../../../../shared/duration/duration.module';
import {RouterModule} from '@angular/router';
import {AppLoadingBubbleModule} from '../../../../../modules/app-loading-bubble';
import { TakeOnlineTestComponent } from './take-online-test/take-online-test.component';
import { ReactiveComponentModule } from '@ngrx/component';



@NgModule({
  declarations: [TakeOnlineExamDashboardComponent, TakeOnlineTestComponent],
  imports: [
    CommonModule,
    OnlineAssessmentRoutingModule,
    DurationModule,
    RouterModule,
    AppLoadingBubbleModule,
    ReactiveComponentModule
  ]
})
export class OnlineAssessmentModule { }
