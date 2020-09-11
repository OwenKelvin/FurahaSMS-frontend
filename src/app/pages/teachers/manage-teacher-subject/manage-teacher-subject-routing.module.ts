import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ManageTeacherSubjectComponent} from './manage-teacher-subject.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: ManageTeacherSubjectComponent,
    data: {
      breadcrumb: 'Manage'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManageTeacherSubjectRoutingModule { }
