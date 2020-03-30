import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StudyMaterialsArchiveComponent } from './study-materials-archive.component';


const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: StudyMaterialsArchiveComponent,
    data: {
      breadcrumb: null
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudyMaterialsArchiveRoutingModule { }
