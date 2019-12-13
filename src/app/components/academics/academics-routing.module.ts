import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from '../layout/layout.component';
import { AcademicsComponent } from './academics.component';
import { AuthGuard } from 'src/app/guards/auth.guard';
import { AcademicYearComponent } from '../academic-year/academic-year.component';
import { CreateAcademicYearComponent } from '../create-academic-year/create-academic-year.component';
import { ViewAcademicYearComponent } from '../view-academic-year/view-academic-year.component';
import { digitsMatcher } from '../matcher/digits.matcher';
import { ViewAcademicYearInfoComponent } from '../view-academic-year-info/view-academic-year-info.component';
import { PageNotFoundComponent } from '../page-not-found/page-not-found.component';
import { AcademicYearFinancialPlanComponent } from '../academic-year-financial-plan/academic-year-financial-plan.component';
import { AcademicYearSubjectUnitsComponent } from '../academic-year-subject-units/academic-year-subject-units.component';


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
            component: AcademicYearComponent
          },
          {
            path: 'create',
            pathMatch: 'full',
            component: CreateAcademicYearComponent
          },
          {
            // matcher: digitsMatcher,
            path: ':id',
            component: ViewAcademicYearComponent,
            children: [
              {
                path: '',
                pathMatch: 'full',
                component: ViewAcademicYearInfoComponent
              },
              {
                path: 'financial-plan',
                component: AcademicYearFinancialPlanComponent
              },
              {
                path: 'units',
                component: AcademicYearSubjectUnitsComponent
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
