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
    data: {
      breadcrumb: 'Academics'
    },
    children: [
      {
        path: '',
        pathMatch: 'full',
        component: AcademicsComponent,
        data: {
          breadcrumb: null
        },
      },
      {
        path: 'academic-year',
        data: {
          breadcrumb: 'Academic Year'
        },
        children: [
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
              breadcrumb: 'Academic Year Archives'
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
                  breadcrumb: null
                },
              },
              {
                path: 'units',
                component: AcademicYearSubjectUnitsComponent,
                data: {
                  breadcrumb: null
                },
              }
            ]
          }
        ]
      }, {
        path: 'curriculum',
        data: {
          breadcrumb: 'Curriculum'
        },
        children: [
          {
            path: '',
            pathMatch: 'full',
            component: AcademicsCurriculumComponent,
            data: {
              breadcrumb: null
            },
          },
          {
            path: 'unit-categories',
            component: AcademicsCurriculumUnitCategoriesComponent,
            data: {
              breadcrumb: 'Unit Categories'
            },
          },
          {
            path: 'units',
            component: AcademicsCurriculumUnitsComponent,
            data: {
              breadcrumb: 'Units'
            },
          },
          {
            path: 'class-level-categories',
            component: AcademicsCurriculumClassLevelCategoriesComponent,
            data: {
              breadcrumb: 'Class Level Categories'
            },
          },
          {
            path: 'class-levels',
            component: AcademicsCurriculumClassLevelsComponent,
            data: {
              breadcrumb: 'Class Levels'
            },
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
