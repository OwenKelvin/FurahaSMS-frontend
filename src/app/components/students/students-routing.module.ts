import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from 'src/app/guards/auth.guard';
import { LayoutComponent } from '../layout/layout.component';
import { ViewStudentComponent } from '../view-student/view-student.component';
import { ViewStudentInfoComponent } from '../view-student-info/view-student-info.component';

const routes: Routes = [
  {
    path: '',
    canActivate: [AuthGuard],
    component: LayoutComponent,
    children: [
      {
        path: 'students',
        children: [
          {
            path: ':id',
            component: ViewStudentComponent,
            children: [
              {
                path: '',
                pathMatch: 'full',
                redirectTo: 'info'
              },
              {
                path: 'info',
                component: ViewStudentInfoComponent
              }
            ]
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
