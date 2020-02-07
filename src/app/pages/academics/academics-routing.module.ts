import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AcademicsComponent } from './academics.component';
import { AcademicYearComponent } from './academic-year/academic-year.component';
import { CreateAcademicYearComponent } from './academic-year/create-academic-year/create-academic-year.component';
import { ViewAcademicYearComponent } from './academic-year/view-academic-year/view-academic-year.component';
import { ViewAcademicYearInfoComponent } from './academic-year/view-academic-year-info/view-academic-year-info.component';
import { AcademicYearFinancialPlanComponent } from './academic-year/academic-year-financial-plan/academic-year-financial-plan.component';
import { AcademicYearSubjectUnitsComponent } from './academic-year/academic-year-subject-units/academic-year-subject-units.component';
import { AcademicYearArchivesComponent } from './academic-year/academic-year-archives/academic-year-archives.component';
import {
  AcademicsCurriculumUnitCategoriesComponent
} from './curriculum/academics-curriculum-unit-categories/academics-curriculum-unit-categories.component';
import {
  AcademicsCurriculumUnitsComponent
} from './curriculum/academics-curriculum-units/academics-curriculum-units.component';
import {
  AcademicsCurriculumClassLevelCategoriesComponent
} from './curriculum/academics-curriculum-class-level-categories/academics-curriculum-class-level-categories.component';
import {
  AcademicsCurriculumClassLevelsComponent
} from './curriculum/academics-curriculum-class-levels/academics-curriculum-class-levels.component';
import { CreateUnitCategoriesComponent } from './curriculum/create-unit-categories/create-unit-categories.component';
import { EditUnitComponent } from './curriculum/edit-unit/edit-unit.component';
import { EditClassLevelCategoryComponent } from './curriculum/edit-class-level-category/edit-class-level-category.component';
import { CreateClassLevelComponent } from './curriculum/create-class-level/create-class-level.component';
import { ViewClassLevelComponent } from './curriculum/view-class-level/view-class-level.component';
import { EditClassLevelComponent } from './curriculum/edit-class-level/edit-class-level.component';
import { ViewUnitCategoryComponent } from './curriculum/view-unit-category/view-unit-category.component';
import { EditUnitCategoryComponent } from './curriculum/edit-unit-category/edit-unit-category.component';
import { ViewUnitComponent } from './curriculum/view-unit/view-unit.component';
import { CreateClassLevelCategoryComponent } from './curriculum/create-class-level-category/create-class-level-category.component';
import { ViewClassLevelCategoryComponent } from './curriculum/view-class-level-category/view-class-level-category.component';
import { CreateUnitComponent } from './curriculum/create-unit/create-unit.component';
import { AcademicYearUnitAllocationComponent } from './academic-year/academic-year-unit-allocation/academic-year-unit-allocation.component';
import { AcademicsCurriculumComponent } from './curriculum/academics-curriculum/academics-curriculum.component';


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
    loadChildren: () => import('./academic-year/academic-year.module')
      .then(m => m.AcademicYearModule)
    // children: [
    //   {
    //     path: '',
    //     pathMatch: 'full',
    //     component: AcademicYearComponent,
    //     data: {
    //       breadcrumb: null
    //     },
    //   },
    //   {
    //     path: 'create',
    //     pathMatch: 'full',
    //     component: CreateAcademicYearComponent,
    //     data: {
    //       breadcrumb: 'New Academic Year'
    //     },
    //   },
    //   {
    //     path: 'archives',
    //     pathMatch: 'full',
    //     component: AcademicYearArchivesComponent,
    //     data: {
    //       breadcrumb: 'Archives'
    //     },
    //   },
    //   {
    //     path: 'subject-allocations',
    //     component: AcademicYearUnitAllocationComponent,
    //     data: {
    //       breadcrumb: 'Unit Allocations'
    //     },
    //   },
    //   {
    //     // matcher: digitsMatcher,
    //     path: ':id',
    //     component: ViewAcademicYearComponent,
    //     data: {
    //       breadcrumb: null
    //     },
    //     children: [
    //       {
    //         path: '',
    //         pathMatch: 'full',
    //         component: ViewAcademicYearInfoComponent,
    //         data: {
    //           breadcrumb: null
    //         },
    //       },
    //       {
    //         path: 'financial-plan',
    //         component: AcademicYearFinancialPlanComponent,
    //         data: {
    //           breadcrumb: 'Financial Plan'
    //         },
    //       },
    //       {
    //         path: 'unit-allocations',
    //         component: AcademicYearSubjectUnitsComponent,
    //         data: {
    //           breadcrumb: null
    //         },
    //       }
    //     ]
    //   }
    // ]
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
  }, {
    path: 'exam-bank',
    loadChildren: () => import('../academics/exam-bank/exam-bank.module').then(m => m.ExamBankModule),
    data: {
      breadcrumb: 'Exam Bank'
    },
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AcademicsRoutingModule { }
