import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StudyMaterialsAdminComponent } from './study-materials-admin.component';
import { CreateStudyMaterialComponent } from './create-study-material/create-study-material.component';


const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: StudyMaterialsAdminComponent,
    data: {
      breadcrumb: null
    }
  },
  {
    path: 'create',
    component: CreateStudyMaterialComponent,
    data: {
      breadcrumb: 'Create'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudyMaterialsAdminRoutingModule { }
