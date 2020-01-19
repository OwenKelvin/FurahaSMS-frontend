import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SchoolManagementComponent } from './management.component';


const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: SchoolManagementComponent,
    data: {
      breadcrumb: null
    },
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SchoolManagementRoutingModule { }
