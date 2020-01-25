import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AcademicsComponent } from './academics.component';
import { AcademicYearComponent } from './academic-year/academic-year.component';
import { CreateAcademicYearComponent } from './create-academic-year/create-academic-year.component';
import { ViewAcademicYearComponent } from './view-academic-year/view-academic-year.component';
import { ViewAcademicYearInfoComponent } from './view-academic-year-info/view-academic-year-info.component';
import { AcademicYearFinancialPlanComponent } from './academic-year-financial-plan/academic-year-financial-plan.component';
import { AcademicYearSubjectUnitsComponent } from './academic-year-subject-units/academic-year-subject-units.component';
import { AcademicsCurriculumComponent } from './academics-curriculum/academics-curriculum.component';
import { AcademicYearArchivesComponent } from './academic-year-archives/academic-year-archives.component';
import {
  AcademicsCurriculumUnitCategoriesComponent
} from './academics-curriculum-unit-categories/academics-curriculum-unit-categories.component';
import {
  AcademicsCurriculumUnitsComponent
} from './academics-curriculum-units/academics-curriculum-units.component';
import {
  AcademicsCurriculumClassLevelCategoriesComponent
} from './academics-curriculum-class-level-categories/academics-curriculum-class-level-categories.component';
import {
  AcademicsCurriculumClassLevelsComponent
} from './academics-curriculum-class-levels/academics-curriculum-class-levels.component';
import { CreateUnitCategoriesComponent } from './create-unit-categories/create-unit-categories.component';
import { EditUnitComponent } from './edit-unit/edit-unit.component';
import { EditClassLevelCategoryComponent } from './edit-class-level-category/edit-class-level-category.component';
import { CreateClassLevelComponent } from './create-class-level/create-class-level.component';
import { ViewClassLevelComponent } from './view-class-level/view-class-level.component';
import { EditClassLevelComponent } from './edit-class-level/edit-class-level.component';
import { ViewUnitCategoryComponent } from './view-unit-category/view-unit-category.component';
import { EditUnitCategoryComponent } from './edit-unit-category/edit-unit-category.component';
import { ViewUnitComponent } from './view-unit/view-unit.component';
import { CreateClassLevelCategoryComponent } from './create-class-level-category/create-class-level-category.component';
import { ViewClassLevelCategoryComponent } from './view-class-level-category/view-class-level-category.component';
import { CreateUnitComponent } from './create-unit/create-unit.component';
import { AcademicYearUnitAllocationComponent } from './academic-year-unit-allocation/academic-year-unit-allocation.component';


const routes: Routes = [
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
        data: {
          breadcrumb: 'Unit Categories'
        },
        children: [
          {
            path: '',
            pathMatch: 'full',
            component: AcademicsCurriculumUnitCategoriesComponent,
            data: {
              breadcrumb: null
            }
          },
          {
            path: 'create',
            component: CreateUnitCategoriesComponent
          },
          {
            path: ':id',
            data: {
              breadcrumb: null
            },
            children: [
              {
                path: '',
                pathMatch: 'full',
                redirectTo: 'view'
              },
              {
                path: 'view',
                component: ViewUnitCategoryComponent,
                data: {
                  breadcrumb: null
                },
              },
              {
                path: 'edit',
                component: EditUnitCategoryComponent,
                data: {
                  breadcrumb: null
                },
              }
            ]
          }
        ]
      },
      {
        path: 'units',

        data: {
          breadcrumb: 'Units'
        },
        children: [
          {
            path: '',
            pathMatch: 'full',
            component: AcademicsCurriculumUnitsComponent,
            data: {
              breadcrumb: null
            }
          },
          {
            path: 'create',
            component: CreateUnitComponent
          },
          {
            path: ':id',
            data: {
              breadcrumb: null
            },
            children: [
              {
                path: '',
                pathMatch: 'full',
                redirectTo: 'view'
              },
              {
                path: 'view',
                component: ViewUnitComponent,
                data: {
                  breadcrumb: null
                },
              },
              {
                path: 'edit',
                component: EditUnitComponent,
                data: {
                  breadcrumb: null
                },
              }
            ]
          }
        ]

      },
      {
        path: 'class-level-categories',
        data: {
          breadcrumb: 'Class Level Categories'
        },
        children: [
          {
            path: '',
            pathMatch: 'full',
            component: AcademicsCurriculumClassLevelCategoriesComponent,
            data: {
              breadcrumb: null
            }
          },
          {
            path: 'create',
            component: CreateClassLevelCategoryComponent
          },
          {
            path: ':id',
            data: {
              breadcrumb: null
            },
            children: [
              {
                path: '',
                pathMatch: 'full',
                redirectTo: 'view'
              },
              {
                path: 'view',
                component: ViewClassLevelCategoryComponent,
                data: {
                  breadcrumb: null
                },
              },
              {
                path: 'edit',
                component: EditClassLevelCategoryComponent,
                data: {
                  breadcrumb: null
                },
              }
            ]
          }
        ]
      },
      {
        path: 'class-levels',
        data: {
          breadcrumb: 'Class Levels'
        },
        children: [
          {
            path: '',
            pathMatch: 'full',
            component: AcademicsCurriculumClassLevelsComponent,
            data: {
              breadcrumb: null
            }
          },
          {
            path: 'create',
            component: CreateClassLevelComponent
          },
          {
            path: ':id',
            data: {
              breadcrumb: null
            },
            children: [
              {
                path: '',
                pathMatch: 'full',
                redirectTo: 'view'
              },
              {
                path: 'view',
                component: ViewClassLevelComponent,
                data: {
                  breadcrumb: null
                },
              },
              {
                path: 'edit',
                component: EditClassLevelComponent,
                data: {
                  breadcrumb: null
                },
              }
            ]
          }
        ]
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AcademicsRoutingModule { }
