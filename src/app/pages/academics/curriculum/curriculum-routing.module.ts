import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AcademicsCurriculumComponent } from './academics-curriculum/academics-curriculum.component';
import {
  AcademicsCurriculumUnitCategoriesComponent
} from './academics-curriculum-unit-categories/academics-curriculum-unit-categories.component';
import { CreateUnitCategoriesComponent } from './create-unit-categories/create-unit-categories.component';
import { ViewUnitCategoryComponent } from './view-unit-category/view-unit-category.component';
import { EditUnitCategoryComponent } from './edit-unit-category/edit-unit-category.component';
import { AcademicsCurriculumUnitsComponent } from './academics-curriculum-units/academics-curriculum-units.component';
import { CreateUnitComponent } from './create-unit/create-unit.component';
import { ViewUnitComponent } from './view-unit/view-unit.component';
import { EditUnitComponent } from './edit-unit/edit-unit.component';
import {
  AcademicsCurriculumClassLevelCategoriesComponent
} from './academics-curriculum-class-level-categories/academics-curriculum-class-level-categories.component';
import { CreateClassLevelCategoryComponent } from './create-class-level-category/create-class-level-category.component';
import { ViewClassLevelCategoryComponent } from './view-class-level-category/view-class-level-category.component';
import { EditClassLevelCategoryComponent } from './edit-class-level-category/edit-class-level-category.component';
import { AcademicsCurriculumClassLevelsComponent } from './academics-curriculum-class-levels/academics-curriculum-class-levels.component';
import { CreateClassLevelComponent } from './create-class-level/create-class-level.component';
import { ViewClassLevelComponent } from './view-class-level/view-class-level.component';
import { EditClassLevelComponent } from './edit-class-level/edit-class-level.component';


const routes: Routes = [
  {
    path: 'semesters',
    loadChildren: () => import('./semester/semester.module').then(m => m.SemesterModule),
    data: {
      breadcrumb: 'Semesters/ Terms'
    },
  },
  {
    path: 'class-level-units',
    loadChildren: () => import('./class-level-unit-level-allocation/class-level-unit-level-allocation.module')
      .then(m => m.ClassLevelUnitLevelAllocationModule),
    data: {
      breadcrumb: 'Class Level - Unit Level Allocations'
    },
  },
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
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CurriculumRoutingModule { }
