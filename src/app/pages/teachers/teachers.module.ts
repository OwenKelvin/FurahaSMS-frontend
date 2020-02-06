import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TeachersRoutingModule } from './teachers-routing.module';
import { TeachersDashboardComponent } from './teachers-dashboard/teachers-dashboard.component';
import { ViewTeacherComponent } from './view-teacher/view-teacher.component';
import { AppUserProfileModule } from 'src/app/components/user-profile/user-profile.module';
import { AppLoadingBubbleModule } from 'src/app/modules/app-loading-bubble';
import { ViewTeacherInfoComponent } from './view-teacher-info/view-teacher-info.component';
import { ViewTeacherSubjectsComponent } from './view-teacher-subjects/view-teacher-subjects.component';


@NgModule({
  declarations: [TeachersDashboardComponent, ViewTeacherComponent, ViewTeacherInfoComponent, ViewTeacherSubjectsComponent],
  imports: [
    CommonModule,
    TeachersRoutingModule,
    AppUserProfileModule,
    AppLoadingBubbleModule,
  ]
})
export class TeachersModule { }
