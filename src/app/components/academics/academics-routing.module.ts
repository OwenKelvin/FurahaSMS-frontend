import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from '../layout/layout.component';
import { AcademicsComponent } from './academics.component';
import { AuthGuard } from 'src/app/guards/auth.guard';
import { AcademicYearComponent } from '../academic-year/academic-year.component';
import { CreateAcademicYearComponent } from '../create-academic-year/create-academic-year.component';
import { ViewAcademicYearComponent } from '../view-academic-year/view-academic-year.component';


const routes: Routes = [
  {
    path: 'academics',
    canActivate: [AuthGuard],
    component: LayoutComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        component: AcademicsComponent
      },
      {
        path: 'academic-year',
        children: [
          {
            path: '',
            pathMatch: 'full',
            component: AcademicsComponent
          },
          {
            path: 'create',
            pathMatch: 'full',
            component: CreateAcademicYearComponent
          },
          {
            path: ':id',
            children: [
              {
                path: '',
                pathMatch: 'full',
                component: ViewAcademicYearComponent
              }
            ]
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
export class AcademicsRoutingModule { }
