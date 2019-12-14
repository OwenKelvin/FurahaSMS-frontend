import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from '../layout/layout.component';
import { SportsComponent } from '../sports/sports.component';


const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    data: {
      breadcrumb: 'Home'
    },
    children: [
      {
        path: 'sports',
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
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SportsRoutingModule { }
