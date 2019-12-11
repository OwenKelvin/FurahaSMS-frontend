import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from '../layout/layout.component';
import { SportsComponent } from './sports.component';
import { AuthGuard } from 'src/app/guards/auth.guard';


const routes: Routes = [
  {
    path: '',
    canActivate: [AuthGuard],
    component: LayoutComponent,
    children: [
      {
        path: 'sports',
        children: [
          {
            path: '',
            pathMatch: 'full',
            component: SportsComponent
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
export class SportsRoutingModule { }
