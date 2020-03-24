import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ELearningCoursesComponent } from './e-learning-courses.component';
import { ELearningCourseItemComponent } from './e-learning-course-item/e-learning-course-item.component';
import { ELearningCourseViewComponent } from './e-learning-course-view/e-learning-course-view.component';


const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: ELearningCoursesComponent,
    data: {
      breadcrumb: null
    }
  },
  {
    path: ':id',
    data: {
      breadcrumb: null
    },
    component: ELearningCourseItemComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'view'
      },
      {
        path: 'view',
        data: {
          breadcrumb: 'View Course'
        },
        component: ELearningCourseViewComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ELearningCoursesRoutingModule { }
