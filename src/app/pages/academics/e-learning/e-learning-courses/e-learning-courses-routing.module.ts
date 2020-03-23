import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ELearningCoursesComponent } from './e-learning-courses.component';


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
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ELearningCoursesRoutingModule { }
