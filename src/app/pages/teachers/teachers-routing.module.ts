import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ViewTeacherComponent } from './view-teacher/view-teacher.component';
import { TeachersDashboardComponent } from './teachers-dashboard/teachers-dashboard.component';
import { ViewTeacherInfoComponent } from './view-teacher-info/view-teacher-info.component';
import { ViewTeacherSubjectsComponent } from './view-teacher-subjects/view-teacher-subjects.component';


const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: TeachersDashboardComponent,
    data: {
      breadcrumb: null
    }
  },
  {
    path: ':id',
    component: ViewTeacherComponent,
    data: {
      breadcrumb: 'View'
    },
    children: [
      {
        path: '',
        redirectTo: 'info',
        pathMatch: 'full'
      },
      {
        path: 'info',
        component: ViewTeacherInfoComponent,
        data: {
          breadcrumb: 'Info'
        },
      },
      {
        path: 'subjects',
        component: ViewTeacherSubjectsComponent,
        data: {
          breadcrumb: 'Subjects'
        },
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TeachersRoutingModule { }
