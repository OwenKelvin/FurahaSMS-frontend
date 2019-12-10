import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageUnderMaintenanceComponent } from './../page-under-maintenance/page-under-maintenance.component';
import { LayoutComponent } from './../layout/layout.component';


const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'page-under-maintenance',
        component: PageUnderMaintenanceComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ErrorRoutingModule { }
