import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ViewStudentComponent } from './view-student/view-student.component';
import { ViewStudentInfoComponent } from './view-student-info/view-student-info.component';
import { ViewStudentGuardiansComponent } from './view-student-guardians/view-student-guardians.component';
import { ViewStudentAcademicsComponent } from './view-student-academics/view-student-academics.component';
import { CreateStudentGuardianComponent } from './create-student-guardian/create-student-guardian.component';
import { CreateStudentAcademicsComponent } from './create-student-academics/create-student-academics.component';

const routes: Routes = [

  {
    path: ':id/guardians/create',
    component: CreateStudentGuardianComponent
  },
  {
    path: ':id/academics/create',
    component: CreateStudentAcademicsComponent
  },
  {
    path: ':id',
    component: ViewStudentComponent,
    data: {
      breadcrumb: null
    },
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'info',
        data: {
          breadcrumb: 'General Info'
        },
      },
      {
        path: 'info',
        component: ViewStudentInfoComponent
      },
      {
        path: 'guardians',
        children: [
          {
            path: '',
            pathMatch: 'full',
            component: ViewStudentGuardiansComponent
          }

        ]
      },
      {
        path: 'academics',
        component: ViewStudentAcademicsComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentsRoutingModule { }
