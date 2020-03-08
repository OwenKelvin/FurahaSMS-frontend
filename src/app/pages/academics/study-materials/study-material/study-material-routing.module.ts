import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ViewStudyMaterialComponent } from './view-study-material/view-study-material.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'view'
  },
  {
    path: 'view',
    component: ViewStudyMaterialComponent,
    data: {
      breadcrumb: 'View Study Material'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudyMaterialRoutingModule { }
