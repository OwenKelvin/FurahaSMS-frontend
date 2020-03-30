import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ELearningCourseStudyMaterialComponent } from './e-learning-course-study-material.component';


const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: ELearningCourseStudyMaterialComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ELearningCourseStudyMaterialRoutingModule { }
