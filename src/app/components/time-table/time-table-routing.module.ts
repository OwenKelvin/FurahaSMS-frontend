import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TimeTableComponent } from './time-table.component';


const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: TimeTableComponent,
    data: {
      breadcrumb: null
    },
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TimeTableRoutingModule { }
