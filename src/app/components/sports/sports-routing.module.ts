import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from '../layout/layout.component';
import { SportsComponent } from './sports.component';
import { AuthGuard } from 'src/app/guards/auth.guard';


const routes: Routes = [
  {
    path: 'sports',
    canActivate: [AuthGuard],
    component: LayoutComponent,
    data: {
      breadcrumb: 'Sports'
    },
    children: [
      {
        path: '',
        pathMatch: 'full',
        component: SportsComponent,
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
export class SportsRoutingModule { }
