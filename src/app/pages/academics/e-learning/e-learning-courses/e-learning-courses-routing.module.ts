import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ELearningCoursesComponent} from './e-learning-courses.component';
import {ELearningCourseItemComponent} from './e-learning-course-item/e-learning-course-item.component';
import {ELearningCourseViewComponent} from './e-learning-course-view/e-learning-course-view.component';


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
      },
      {
        path: 'study-materials',
        data: {
          breadcrumb: null
        },
        children: [
          {
            path: ':id',
            data: {
              breadcrumb: 'Study Materials'
            },
            loadChildren:
              () => import('./../e-learning-courses/e-learning-course-study-material/e-learning-course-study-material.module')
                .then(m => m.ELearningCourseStudyMaterialModule)
          }
        ]
      },
      {
        path: 'assessments',
        loadChildren: () => import('./online-assessment/online-assessment.module').then(m => m.OnlineAssessmentModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ELearningCoursesRoutingModule {
}
