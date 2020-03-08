import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StudyMaterialsComponent } from './study-materials.component';


const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: StudyMaterialsComponent,
    data: {
      breadcrumb: null
    }
  },
  {
    path: 'archives',
    loadChildren: () => import('../study-materials/study-materials-archive/study-materials-archive.module')
      .then(m => m.StudyMaterialsArchiveModule),
    data: {
      breadcrumb: 'Archives'
    }
  },
  {
    path: 'admin',
    loadChildren: () => import('../study-materials/study-materials-admin/study-materials-admin.module')
      .then(m => m.StudyMaterialsAdminModule),
    data: {
      breadcrumb: 'Admin'
    }
  },
  {
    path: ':id',
    loadChildren: () => import('../study-materials/study-material/study-material.module')
    .then(m => m.StudyMaterialModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudyMaterialsRoutingModule { }
