import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ELearningCreateCourseComponent } from './e-learning-create-course.component';


const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: ELearningCreateCourseComponent,
    data: {
      breadcrumb: null
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ELearningCreateCourseRoutingModule { }
