import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdmissionsComponent } from './admissions.component';
import { StudentAdmissionComponent } from './student-admission/student-admission.component';
import { TeachingStaffAdmissionComponent } from './teaching-staff-admission/teaching-staff-admission.component';
import { SupportStaffAdmissionComponent } from './support-staff-admission/support-staff-admission.component';
import { CreateStudentComponent } from './create-student/create-student.component';
import { CanDeactivateGuard } from 'src/app/guards/can-deactivate.guard';
import { StudentAdmissionsEditComponent } from './student-admissions-edit/student-admissions-edit.component';


const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: AdmissionsComponent,
    data: {
      breadcrumb: null
        }
  },
  {
    path: 'students',
    data: {
      breadcrumb: 'Students'
        },
    children: [
      {
        path: '',
        pathMatch: 'full',
        component: StudentAdmissionComponent,
        data: {
          breadcrumb: null
            },
      },
      {
        path: 'create',
        component: CreateStudentComponent,
        canDeactivate: [CanDeactivateGuard],
        data: {
          breadcrumb: 'Create Student'
            },
      },
      {
        path: 'edit',
        component: StudentAdmissionsEditComponent,
        data: {
          breadcrumb: 'Edit Student'
            },
      }
    ]
  },
  {
    path: 'staff/teachers',
    pathMatch: 'full',
    component: TeachingStaffAdmissionComponent,
    data: {
      breadcrumb: 'Teaching Staff'
        },
  },
  {
    path: 'staff/support',
    pathMatch: 'full',
    component: SupportStaffAdmissionComponent,
    data: {
      breadcrumb: 'Support Staff'
        },
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdmissionsRoutingModule { }
