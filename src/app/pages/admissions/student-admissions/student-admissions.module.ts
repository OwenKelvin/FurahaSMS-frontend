import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentAdmissionsRoutingModule } from './student-admissions-routing.module';
import { StudentAdmissionsEditComponent } from './student-admissions-edit/student-admissions-edit.component';
import { StudentSearchComponent } from 'src/app/components/student-search/student-search.component';
import { CreateStudentComponent } from './create-student/create-student.component';
import { EditStudentComponent } from './edit-student/edit-student.component';
import { StudentAdmissionComponent } from './student-admission/student-admission.component';
import { AppLoadingBubbleModule } from 'src/app/modules/app-loading-bubble';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppInputModule } from 'src/app/modules/app-input.module';
import { AppStarLabelRequiredModule } from 'src/app/modules/app-star-label-required';
import { AppDashboardLinksModule } from 'src/app/modules/app-dashboard-links';
import { AppRecentlyCreatedStudent } from './students-recently-created/students-recently-created.module';


@NgModule({
  declarations: [
    StudentAdmissionsEditComponent,
    StudentSearchComponent,
    
    CreateStudentComponent,
    EditStudentComponent,
    StudentAdmissionComponent,
  ],
  imports: [
    CommonModule,
    StudentAdmissionsRoutingModule,
    AppLoadingBubbleModule,
    FormsModule,
    ReactiveFormsModule,
    AppInputModule,
    AppStarLabelRequiredModule,
    AppDashboardLinksModule,
    AppRecentlyCreatedStudent
  ]
})
export class StudentAdmissionsModule { }
