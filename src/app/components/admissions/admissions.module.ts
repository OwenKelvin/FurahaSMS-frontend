import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdmissionsRoutingModule } from './admissions-routing.module';
import { ViewStudentComponent } from './view-student/view-student.component';
import { ViewStudentInfoComponent } from './view-student-info/view-student-info.component';
import { StudentAdmissionsEditComponent } from '../student-admissions-edit/student-admissions-edit.component';
import { StudentSearchComponent } from '../student-search/student-search.component';
import { StudentsRecentlyCreatedComponent } from '../students-recently-created/students-recently-created.component';
import { AppLoadingBubbleModule } from 'src/app/modules/app-loading-bubble';
import { CreateStudentComponent } from '../create-student/create-student.component';
import { EditStudentComponent } from '../edit-student/edit-student.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppInputModule } from 'src/app/modules/app-input.module';
import { AppStarLabelRequiredModule } from 'src/app/modules/app-star-label-required';


@NgModule({
  declarations: [
    ViewStudentComponent,
    ViewStudentInfoComponent,
    StudentAdmissionsEditComponent,
    StudentSearchComponent,
    StudentsRecentlyCreatedComponent,
    CreateStudentComponent,
    EditStudentComponent,
  ],
  imports: [
    CommonModule,
    AdmissionsRoutingModule,
    AppLoadingBubbleModule,
    FormsModule,
    ReactiveFormsModule,
    AppInputModule,
    AppStarLabelRequiredModule
  ]
})
export class AdmissionsModule { }
