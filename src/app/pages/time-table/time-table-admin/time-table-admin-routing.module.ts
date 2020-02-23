import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TimeTableAdminComponent } from './time-table-admin.component';


const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: TimeTableAdminComponent,
    data: {
      breadcrumb: null
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TimeTableAdminRoutingModule { }
