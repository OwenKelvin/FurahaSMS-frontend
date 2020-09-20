import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FinancialPlanComponent } from './financial-plan.component';
import {
  ViewAcademicYearFinancialPlanComponent
} from './view-academic-year-financial-plan/view-academic-year-financial-plan.component';
import {
  AcademicYearFinancialPlanComponent
} from './academic-year-financial-plan/academic-year-financial-plan.component';
import {
  EditAcademicYearFinancialPlanComponent
} from './edit-academic-year-financial-plan/edit-academic-year-financial-plan.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: FinancialPlanComponent,
    data: {
      breadcrumb: null
    }
  },
  {
    path: 'academic-year',
    data: {
      breadcrumb: 'Academic Years'
    },
    children: [
      {
        path: ':id',
        component: AcademicYearFinancialPlanComponent,
        data: {
          breadcrumb: false
        },
        children: [
          {
            path: '',
            pathMatch: 'full',
            redirectTo: 'view',
          },
          {
            path: 'view',
            data: {
              breadcrumb: 'View'
            },
            component: ViewAcademicYearFinancialPlanComponent
          },
          {
            path: 'edit',
            data: {
              breadcrumb: 'Edit'
            },
            component: EditAcademicYearFinancialPlanComponent
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
export class FinancialPlanRoutingModule { }
