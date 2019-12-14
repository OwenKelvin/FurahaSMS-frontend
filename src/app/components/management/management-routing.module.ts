import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from '../layout/layout.component';
import { SchoolManagementComponent } from './management.component';
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
        path: 'school-management',
        data: {
          breadcrumb: 'Management'
        },
        children: [
          {
            path: '',
            pathMatch: 'full',
            component: SchoolManagementComponent,
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
export class SchoolManagementRoutingModule { }
