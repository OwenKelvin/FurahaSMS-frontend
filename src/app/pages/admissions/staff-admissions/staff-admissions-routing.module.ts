import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TeachingStaffAdmissionComponent } from './teaching-staff-admission/teaching-staff-admission.component';
import { SupportStaffAdmissionComponent } from './support-staff-admission/support-staff-admission.component';
import { CreateTeacherComponent } from './create-teacher/create-teacher.component';
import { CreateStaffComponent } from './support-staff-admission/create-staff/create-staff.component';


const routes: Routes = [
  {
    path: 'teachers',
    data: {
      breadcrumb: 'Teaching Staff'
    },
    children: [
      {
        path: '',
        pathMatch: 'full',
        component: TeachingStaffAdmissionComponent,
      },
      {
        path: 'create',
        component: CreateTeacherComponent,
        data: {
          breadcrumb: 'New Teaching Staff'
        },
      },
      {
        path: 'edit',
        component: CreateTeacherComponent,
        data: {
          breadcrumb: 'Edit Teaching Staff'
        },
      }
    ]
  },
  {
    path: 'support',
    data: {
      breadcrumb: null
    },
    children: [
      {
        path: '',
        pathMatch: 'full',
        component: SupportStaffAdmissionComponent,
        data: {
          breadcrumb: 'Support Staff'
        },
      },
      {
        path: ':id',
        data: {
          breadcrumb: null
        },
        children: [
          {
            path: 'create',
            component: CreateStaffComponent,
            data: {
              breadcrumb: 'Create'
            }
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
export class StaffRoutingModule { }
