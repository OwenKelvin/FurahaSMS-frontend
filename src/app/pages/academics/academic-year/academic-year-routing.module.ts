import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AcademicYearComponent } from './academic-year.component';
import { CreateAcademicYearComponent } from './create-academic-year/create-academic-year.component';
import { AcademicYearArchivesComponent } from './academic-year-archives/academic-year-archives.component';
import { AcademicYearUnitAllocationComponent } from './academic-year-unit-allocation/academic-year-unit-allocation.component';
import { ViewAcademicYearComponent } from './view-academic-year/view-academic-year.component';
import { ViewAcademicYearInfoComponent } from './view-academic-year-info/view-academic-year-info.component';
import { AcademicYearFinancialPlanComponent } from './academic-year-financial-plan/academic-year-financial-plan.component';
import { AcademicYearSubjectUnitsComponent } from './academic-year-subject-units/academic-year-subject-units.component';
import { AcademicYearTimeTablesComponent } from './academic-year-time-tables/academic-year-time-tables.component';


const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: AcademicYearComponent,
    data: {
      breadcrumb: null
    },
  },
  {
    path: 'create',
    pathMatch: 'full',
    component: CreateAcademicYearComponent,
    data: {
      breadcrumb: 'New Academic Year'
    },
  },
  {
    path: 'archives',
    pathMatch: 'full',
    component: AcademicYearArchivesComponent,
    data: {
      breadcrumb: 'Archives'
    },
  },
  {
    path: 'subject-allocations',
    component: AcademicYearUnitAllocationComponent,
    data: {
      breadcrumb: 'Unit Allocations'
    },
  },
  {
    // matcher: digitsMatcher,
    path: ':id',
    component: ViewAcademicYearComponent,
    data: {
      breadcrumb: null
    },
    children: [
      {
        path: '',
        pathMatch: 'full',
        component: ViewAcademicYearInfoComponent,
        data: {
          breadcrumb: null
        },
      },
      {
        path: 'financial-plan',
        component: AcademicYearFinancialPlanComponent,
        data: {
          breadcrumb: 'Financial Plan'
        },
      },
      {
        path: 'time-table',
        component: AcademicYearTimeTablesComponent,
        data: {
          breadcrumb: 'Time Table'
        },
      },
      {
        path: 'unit-allocations',
        component: AcademicYearSubjectUnitsComponent,
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
export class AcademicYearRoutingModule { }
