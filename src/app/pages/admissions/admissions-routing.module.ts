import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdmissionsComponent } from './admissions.component';

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
    loadChildren: () => import('./student-admissions/student-admissions.module').then(m => m.StudentAdmissionsModule),
    data: {
      breadcrumb: 'Students'
    },
  },
  {
    path: 'staff',
    loadChildren: () => import('./staff-admissions/staff-admissions.module').then(m => m.StaffAdmissionsModule),
    data: {
      breadcrumb: 'Staff'
    },
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdmissionsRoutingModule { }
