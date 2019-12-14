import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageUnderMaintenanceComponent } from './../page-under-maintenance/page-under-maintenance.component';
import { PageNotFoundComponent } from './../page-not-found/page-not-found.component';
import { LayoutComponent } from './../layout/layout.component';


const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    data: {
      breadcrumb: 'Home'
    },
    children: [
      {
        path: 'page-under-maintenance',
        component: PageUnderMaintenanceComponent,
        data: {
          breadcrumb: null
        },
      },
      {
        path: '**',
        component: PageNotFoundComponent,
        data: {
          breadcrumb: null
        },
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ErrorRoutingModule { }
