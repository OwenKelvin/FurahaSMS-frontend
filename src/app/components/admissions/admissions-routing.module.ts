import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './../layout/layout.component';
import { AdmissionsComponent } from './admissions.component';
import { StudentAdmissionComponent } from '../student-admission/student-admission.component';
import { TeachingStaffAdmissionComponent } from '../teaching-staff-admission/teaching-staff-admission.component';
import { SupportStaffAdmissionComponent } from '../support-staff-admission/support-staff-admission.component';


const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
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
            pathMatch: 'full',
            component: StudentAdmissionComponent
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
