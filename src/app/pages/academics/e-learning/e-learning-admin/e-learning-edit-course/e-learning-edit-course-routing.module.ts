import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ELearningEditCourseComponent } from './e-learning-edit-course.component';
import { ELearningAdminCourseComponent } from '../e-learning-admin-course/e-learning-admin-course.component';
import {ELearningCreateCourseComponent} from '../e-learning-create-course/e-learning-create-course.component';


const routes: Routes = [
  {
    path: ':id',
    data: {
      breadcrumb: null
    },
    component: ELearningAdminCourseComponent,
    children: [
      {
        path: 'edit-contents',
        component: ELearningEditCourseComponent,
        data: {
          breadcrumb: 'Edit Course'
        }
      },
      {
        path: 'edit',
        component: ELearningCreateCourseComponent,
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
