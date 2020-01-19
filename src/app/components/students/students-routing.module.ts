import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from 'src/app/guards/auth.guard';
import { LayoutComponent } from '../layout/layout.component';
import { ViewStudentComponent } from '../../pages/admissions/view-student/view-student.component';
import { ViewStudentInfoComponent } from '../../pages/admissions/view-student-info/view-student-info.component';
import { ViewStudentGuardiansComponent } from '../../pages/admissions/view-student-guardians/view-student-guardians.component';
import { ViewStudentAcademicsComponent } from '../../pages/admissions/view-student-academics/view-student-academics.component';
import { CreateStudentGuardianComponent } from '../../pages/admissions/create-student-guardian/create-student-guardian.component';

const routes: Routes = [
  {

    path: 'students',
    canActivate: [AuthGuard],
    component: LayoutComponent,
    data: {
      breadcrumb: 'Students'
    },
    children: [
      {
        path: ':id/guardians/create',
        component: CreateStudentGuardianComponent
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
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentsRoutingModule { }
