import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './../layout/layout.component';
import { AdmissionsComponent } from './admissions.component';
import { StudentAdmissionComponent } from '../student-admission/student-admission.component';
import { TeachingStaffAdmissionComponent } from '../teaching-staff-admission/teaching-staff-admission.component';
import { SupportStaffAdmissionComponent } from '../support-staff-admission/support-staff-admission.component';
import { CreateStudentComponent } from '../create-student/create-student.component';
import { AuthGuard } from 'src/app/guards/auth.guard';
import { CanDeactivateGuard } from 'src/app/guards/can-deactivate.guard';
import { StudentAdmissionsEditComponent } from '../student-admissions-edit/student-admissions-edit.component';


const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: 'admissions',
        children: [
          {
            path: '',
            pathMatch: 'full',
            component: AdmissionsComponent
          },
          {
            path: 'students',
            children: [
              {
                path: '',
                pathMatch: 'full',
                component: StudentAdmissionComponent,
              },
              {
                path: 'create',
                component: CreateStudentComponent,
                canDeactivate: [CanDeactivateGuard]
              },
              {
                path: 'edit',
                component: StudentAdmissionsEditComponent,
              }
            ]
          },
          {
            path: 'staff/teachers',
            pathMatch: 'full',
            component: TeachingStaffAdmissionComponent
          },
          {
            path: 'staff/support',
            pathMatch: 'full',
            component: SupportStaffAdmissionComponent
          }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdmissionsRoutingModule { }
