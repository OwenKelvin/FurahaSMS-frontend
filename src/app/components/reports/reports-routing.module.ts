import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from '../layout/layout.component';
import { ReportsComponent } from './reports.component';
import { AuthGuard } from 'src/app/guards/auth.guard';


const routes: Routes = [
  {
    path: '',
    canActivate: [AuthGuard],
    component: LayoutComponent,
    data: {
      breadcrumb: 'Home'
    },
    children: [
      {
        path: 'reports',
        data: {
          breadcrumb: 'Reports'
        },
        children: [
          {
            path: '',
            pathMatch: 'full',
            component: ReportsComponent,
            data: {
              breadcrumb: null
            },
          }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReportsRoutingModule { }
