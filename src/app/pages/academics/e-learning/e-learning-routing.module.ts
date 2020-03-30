import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ELearningComponent } from './e-learning.component';


const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: ELearningComponent,
    data: {
      breadcrumb: null
    }
  },
  {
    path: 'admin',
    loadChildren: () => import('./e-learning-admin/e-learning-admin.module').then(m => m.ELearningAdminModule),
    data: {
      breadcrumb: 'Admin'
    }
  },
  {
    path: 'courses',
    loadChildren: () => import('./e-learning-courses/e-learning-courses.module').then(m => m.ELearningCoursesModule),
    data: {
      breadcrumb: 'Courses'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ELearningRoutingModule { }
