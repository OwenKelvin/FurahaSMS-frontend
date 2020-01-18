import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from '../layout/layout.component';
import { TimeTableComponent } from './time-table.component';
import { AuthGuard } from 'src/app/guards/auth.guard';


const routes: Routes = [
  {

    path: '',
    canActivate: [AuthGuard],
    component: LayoutComponent,
    data: {
      breadcrumb: 'Time table'
    },
    children: [
      {
        path: '',
        pathMatch: 'full',
        component: TimeTableComponent,
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
export class TimeTableRoutingModule { }
