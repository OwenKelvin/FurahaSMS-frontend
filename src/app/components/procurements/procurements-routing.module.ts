import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from '../layout/layout.component';
import { ProcurementsComponent } from './procurements.component';
import { AuthGuard } from 'src/app/guards/auth.guard';


const routes: Routes = [
  {
    path: 'procurements',
    canActivate: [AuthGuard],
    component: LayoutComponent,
    data: {
      breadcrumb: ['Procurements']
    },
    children: [
      {
        path: '',
        pathMatch: 'full',
        component: ProcurementsComponent,
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
export class ProcurementsRoutingModule { }
