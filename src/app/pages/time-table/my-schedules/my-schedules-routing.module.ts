import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MySchedulesComponent } from './my-schedules.component';


const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: MySchedulesComponent,
    data: {
      breadcrumb: null
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MySchedulesRoutingModule { }
