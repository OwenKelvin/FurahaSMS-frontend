import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StaffRoutingModule } from './staff-admissions-routing.module';
import { CreateTeacherComponent } from './create-teacher/create-teacher.component';
import { EditTeacherComponent } from './edit-teacher/edit-teacher.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppLoadingBubbleModule } from 'src/app/modules/app-loading-bubble';
import { TeachingStaffAdmissionComponent } from './teaching-staff-admission/teaching-staff-admission.component';
import { AppDashboardLinksModule } from 'src/app/modules/app-dashboard-links';
import { SupportStaffAdmissionComponent } from '../support-staff-admission/support-staff-admission.component';
import { AppInputModule } from 'src/app/modules/app-input.module';


@NgModule({
  declarations: [
    CreateTeacherComponent,
    EditTeacherComponent,
    TeachingStaffAdmissionComponent,
    SupportStaffAdmissionComponent

  ],
  imports: [
    CommonModule,
    StaffRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AppLoadingBubbleModule,
    AppDashboardLinksModule,
    AppInputModule
  ]
})
export class StaffAdmissionsModule { }