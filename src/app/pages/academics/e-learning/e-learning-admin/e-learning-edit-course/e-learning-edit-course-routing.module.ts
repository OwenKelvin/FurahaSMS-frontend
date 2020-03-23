import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ELearningEditCourseComponent } from './e-learning-edit-course.component';
import { ELearningAdminComponent } from '../e-learning-admin.component';
import { ELearningAdminCourseComponent } from '../e-learning-admin-course/e-learning-admin-course.component';


const routes: Routes = [
  {
    path: ':id',
    data: {
      breadcrumb: null
    },
    component: ELearningAdminCourseComponent,
    children: [
      {
        path: 'edit',
        component: ELearningEditCourseComponent,
        data: {
          breadcrumb: 'Edit Course'
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ELearningEditCourseRoutingModule { }
