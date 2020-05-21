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
  },
  {
    path: 'my-schedules',
    data: {
      breadcrumb: 'My Schedules'
    },
    loadChildren: () => import('./my-schedules/my-schedules.module').then(m => m.MySchedulesModule)
  },
  {
    path: 'admin',
    data: {
      breadcrumb: 'Admin'
    },
    loadChildren: () => import('./time-table-admin/time-table-admin.module').then(m => m.TimeTableAdminModule)
  },
  {
    path: 'academic-years',
    data: {
      breadcrumb: 'Academic Years'
    },
    loadChildren: () => import('./academic-years/academic-years.module').then(m => m.AcademicYearsModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TimeTableRoutingModule { }
