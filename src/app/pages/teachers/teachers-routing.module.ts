import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ViewTeacherComponent} from './view-teacher/view-teacher.component';
import {TeachersDashboardComponent} from './teachers-dashboard/teachers-dashboard.component';
import {ViewTeacherInfoComponent} from './view-teacher-info/view-teacher-info.component';
import {ViewTeacherSubjectsComponent} from './view-teacher-subjects/view-teacher-subjects.component';


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
    path: ':id/subjects/manage',
    loadChildren: () => import('./manage-teacher-subject/manage-teacher-subject.module')
      .then(m => m.ManageTeacherSubjectModule),
    data: {
      breadcrumb: 'Subjects'
    },
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
        pathMatch: 'full',
        component: ViewTeacherSubjectsComponent,
        data: {
          breadcrumb: 'Subjects'
        },
      },
      {
        path: 'password-management',
        loadChildren: () => import('./../login/password-management/password-management.module')
          .then(m => m.PasswordManagementModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TeachersRoutingModule {
}
