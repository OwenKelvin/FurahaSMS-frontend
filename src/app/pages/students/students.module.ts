import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentsRoutingModule } from './students-routing.module';
import { CreateStudentGuardianComponent } from '../admissions/create-student-guardian/create-student-guardian.component';
import { ViewStudentComponent } from '../admissions/view-student/view-student.component';
import { ViewStudentInfoComponent } from '../admissions/view-student-info/view-student-info.component';
import { ViewStudentGuardiansComponent } from '../admissions/view-student-guardians/view-student-guardians.component';
import { ViewStudentAcademicsComponent } from '../admissions/view-student-academics/view-student-academics.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppInputModule } from 'src/app/modules/app-input.module';
import { AppTelInputModule } from 'src/app/modules/app-tel-input.module';
import { AppOrdinalModule } from 'src/app/modules/app-ordinal.module';
import { AppLoadingBubbleModule } from 'src/app/modules/app-loading-bubble';
import { CreateStudentAcademicsComponent } from './create-student-academics/create-student-academics.component';


@NgModule({
  declarations: [
    CreateStudentGuardianComponent,
    ViewStudentComponent,
    ViewStudentInfoComponent,
    ViewStudentGuardiansComponent,
    ViewStudentAcademicsComponent,
    CreateStudentAcademicsComponent
  ],
  imports: [
    CommonModule,
    StudentsRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AppInputModule,
    AppTelInputModule,
    AppOrdinalModule,
    AppLoadingBubbleModule
  ]
})
export class StudentsModule { }
