import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentAdmissionsRoutingModule } from './student-admissions-routing.module';
import { StudentAdmissionsEditComponent } from './student-admissions-edit/student-admissions-edit.component';
import { StudentSearchModule } from 'src/app/components/student-search/student-search.module';
import { CreateStudentComponent } from './create-student/create-student.component';
import { EditStudentComponent } from './edit-student/edit-student.component';
import { StudentAdmissionComponent } from './student-admission/student-admission.component';
import { AppLoadingBubbleModule } from 'src/app/modules/app-loading-bubble';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppInputModule } from 'src/app/modules/app-input.module';
import { AppStarLabelRequiredModule } from 'src/app/modules/app-star-label-required';
import { AppLinksModule } from 'src/app/shared/links/links.module';
import { AppRecentlyCreatedStudent } from './students-recently-created/students-recently-created.module';



@NgModule({
  declarations: [
    StudentAdmissionsEditComponent,
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
    AppLinksModule,
    AppRecentlyCreatedStudent,
    StudentSearchModule
  ]
})
export class StudentAdmissionsModule { }
