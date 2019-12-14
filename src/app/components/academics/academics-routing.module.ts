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
import { AcademicYearFinancialPlanComponent } from '../academic-year-financial-plan/academic-year-financial-plan.component';
import { AcademicYearSubjectUnitsComponent } from '../academic-year-subject-units/academic-year-subject-units.component';
import { AcademicsCurriculumComponent } from '../academics-curriculum/academics-curriculum.component';
import { AcademicYearArchivesComponent } from '../academic-year-archives/academic-year-archives.component';
import {
  AcademicsCurriculumUnitCategoriesComponent
} from '../academics-curriculum-unit-categories/academics-curriculum-unit-categories.component';
import {
  AcademicsCurriculumUnitsComponent
} from '../academics-curriculum-units/academics-curriculum-units.component';
import {
  AcademicsCurriculumClassLevelCategoriesComponent
} from '../academics-curriculum-class-level-categories/academics-curriculum-class-level-categories.component';
import {
  AcademicsCurriculumClassLevelsComponent
} from '../academics-curriculum-class-levels/academics-curriculum-class-levels.component';


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
            path: 'archives',
            pathMatch: 'full',
            component: AcademicYearArchivesComponent
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
      }, {
        path: 'curriculum',
        children: [
          {
            path: '',
            pathMatch: 'full',
            component: AcademicsCurriculumComponent
          },
          {
            path: 'unit-categories',
            component: AcademicsCurriculumUnitCategoriesComponent
          },
          {
            path: 'units',
            component: AcademicsCurriculumUnitsComponent
          },
          {
            path: 'class-level-categories',
            component: AcademicsCurriculumClassLevelCategoriesComponent
          },
          {
            path: 'class-levels',
            component: AcademicsCurriculumClassLevelsComponent
          },
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
