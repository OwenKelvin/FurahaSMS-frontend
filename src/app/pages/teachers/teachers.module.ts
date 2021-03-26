import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TeachersRoutingModule } from './teachers-routing.module';
import { TeachersDashboardComponent } from './teachers-dashboard/teachers-dashboard.component';
import { ViewTeacherComponent } from './view-teacher/view-teacher.component';
import { AppUserProfileModule } from 'src/app/components/user-profile/user-profile.module';
import { AppLoadingBubbleModule } from 'src/app/modules/app-loading-bubble';
import { ViewTeacherInfoComponent } from './view-teacher-info/view-teacher-info.component';
import { ViewTeacherSubjectsComponent } from './view-teacher-subjects/view-teacher-subjects.component';
import { StoreModule } from '@ngrx/store';
import * as fromTeacherProfile from './store/reducers/teacher-profile.reducer';
import { EffectsModule } from '@ngrx/effects';
import { TeacherProfileEffects } from './store/effects/teacher-profile.effects';
import { ReactiveComponentModule } from '@ngrx/component';


@NgModule({
  declarations: [TeachersDashboardComponent, ViewTeacherComponent, ViewTeacherInfoComponent, ViewTeacherSubjectsComponent],
  imports: [
    CommonModule,
    TeachersRoutingModule,
    AppUserProfileModule,
    AppLoadingBubbleModule,
    StoreModule.forFeature(fromTeacherProfile.teacherProfileFeatureKey, fromTeacherProfile.reducer),
    EffectsModule.forFeature([TeacherProfileEffects]),
    ReactiveComponentModule,
  ]
})
export class TeachersModule { }
