import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ELearningAdminComponent } from './e-learning-admin.component';


const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: ELearningAdminComponent,
    data: {
      breadcrumb: null
    }
  },
  {
    path: 'create-course',
    data: {
      breadcrumb: 'Create Course'
    },
    loadChildren: () => import('./e-learning-create-course/e-learning-create-course.module')
      .then(m => m.ELearningCreateCourseModule)
  },
  {
    path: 'courses',
    data: {
      breadcrumb: null
    },
    loadChildren: () => import('./e-learning-edit-course/e-learning-edit-course.module')
      .then(m => m.ELearningEditCourseModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ELearningAdminRoutingModule { }
