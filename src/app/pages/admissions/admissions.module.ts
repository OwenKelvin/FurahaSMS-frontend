import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdmissionsRoutingModule } from './admissions-routing.module';
import { ViewStudentComponent } from './view-student/view-student.component';
import { ViewStudentInfoComponent } from './view-student-info/view-student-info.component';
import { StudentAdmissionsEditComponent } from './student-admissions-edit/student-admissions-edit.component';
import { StudentSearchComponent } from '../../components/student-search/student-search.component';
import { StudentsRecentlyCreatedComponent } from './students-recently-created/students-recently-created.component';
import { AppLoadingBubbleModule } from 'src/app/modules/app-loading-bubble';
import { CreateStudentComponent } from './create-student/create-student.component';
import { EditStudentComponent } from './edit-student/edit-student.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppInputModule } from 'src/app/modules/app-input.module';
import { AppStarLabelRequiredModule } from 'src/app/modules/app-star-label-required';
import { ViewStudentGuardiansComponent } from './view-student-guardians/view-student-guardians.component';
import { ViewStudentAcademicsComponent } from './view-student-academics/view-student-academics.component';
import { CreateStudentGuardianComponent } from './create-student-guardian/create-student-guardian.component';
import { AppOrdinalModule } from 'src/app/modules/app-ordinal.module';
import { AppTelInputModule } from 'src/app/modules/app-tel-input.module';
import { AppLayoutModule } from 'src/app/modules/app-layout.module';
import { AdmissionsComponent } from './admissions.component';
import { AppDashboardLinksModule } from 'src/app/modules/app-dashboard-links';
import { StudentAdmissionComponent } from './student-admission/student-admission.component';
import { TeachingStaffAdmissionComponent } from './teaching-staff-admission/teaching-staff-admission.component';
import { SupportStaffAdmissionComponent } from './support-staff-admission/support-staff-admission.component';


@NgModule({
  declarations: [
    ViewStudentComponent,
    ViewStudentInfoComponent,
    StudentAdmissionsEditComponent,
    StudentSearchComponent,
    StudentsRecentlyCreatedComponent,
    CreateStudentComponent,
    EditStudentComponent,
    ViewStudentGuardiansComponent,
    ViewStudentAcademicsComponent,
    CreateStudentGuardianComponent,
    AdmissionsComponent,
    StudentAdmissionComponent,
    TeachingStaffAdmissionComponent,
    SupportStaffAdmissionComponent,
  ],
  imports: [
    CommonModule,
    AdmissionsRoutingModule,
    AppLoadingBubbleModule,
    FormsModule,
    ReactiveFormsModule,
    AppInputModule,
    AppStarLabelRequiredModule,
    AppOrdinalModule,
    AppTelInputModule,
    AppLayoutModule,
    AppDashboardLinksModule
  ]
})
export class AdmissionsModule { }
