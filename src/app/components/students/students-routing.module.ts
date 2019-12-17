import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from 'src/app/guards/auth.guard';
import { LayoutComponent } from '../layout/layout.component';
import { ViewStudentComponent } from '../view-student/view-student.component';
import { ViewStudentInfoComponent } from '../view-student-info/view-student-info.component';
import { ViewStudentGuardiansComponent } from '../view-student-guardians/view-student-guardians.component';
import { ViewStudentAcademicsComponent } from '../view-student-academics/view-student-academics.component';

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
            component: ViewStudentGuardiansComponent
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
