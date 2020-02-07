import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AcademicsRoutingModule } from './academics-routing.module';
import { CreateUnitCategoriesComponent } from './curriculum/create-unit-categories/create-unit-categories.component';
import { EditUnitCategoryComponent } from './curriculum/edit-unit-category/edit-unit-category.component';
import { EditUnitComponent } from './curriculum/edit-unit/edit-unit.component';
import { CreateUnitComponent } from './curriculum/create-unit/create-unit.component';
import { CreateClassLevelCategoryComponent } from './curriculum/create-class-level-category/create-class-level-category.component';
import { EditClassLevelCategoryComponent } from './curriculum/edit-class-level-category/edit-class-level-category.component';
import { EditClassLevelComponent } from './curriculum/edit-class-level/edit-class-level.component';
import { ViewClassLevelComponent } from './curriculum/view-class-level/view-class-level.component';
import { CreateClassLevelComponent } from './curriculum/create-class-level/create-class-level.component';
import { AcademicYearComponent } from './academic-year/academic-year.component';
import { CreateAcademicYearComponent } from './academic-year/create-academic-year/create-academic-year.component';
import { ViewAcademicYearComponent } from './academic-year/view-academic-year/view-academic-year.component';
import { AcademicYearArchivesComponent } from './academic-year/academic-year-archives/academic-year-archives.component';
import { ViewAcademicYearInfoComponent } from './academic-year/view-academic-year-info/view-academic-year-info.component';
import { AcademicYearFinancialPlanComponent } from './academic-year/academic-year-financial-plan/academic-year-financial-plan.component';
import { AcademicYearSubjectUnitsComponent } from './academic-year/academic-year-subject-units/academic-year-subject-units.component';
import {
  AcademicsCurriculumUnitCategoriesComponent
} from './curriculum/academics-curriculum-unit-categories/academics-curriculum-unit-categories.component';
import { AcademicsCurriculumUnitsComponent } from './curriculum/academics-curriculum-units/academics-curriculum-units.component';
import {
  AcademicsCurriculumClassLevelCategoriesComponent
} from './curriculum/academics-curriculum-class-level-categories/academics-curriculum-class-level-categories.component';
import { AcademicsCurriculumClassLevelsComponent } from './curriculum/academics-curriculum-class-levels/academics-curriculum-class-levels.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ErrorModule } from '../../components/error/error.module';
import { AppInputModule } from 'src/app/modules/app-input.module';
import { AppViewItemsModule } from 'src/app/modules/app-view-items.module';
import { AppCrudModule } from 'src/app/modules/app-crud.module';
import { AppDashboardLinksModule } from 'src/app/modules/app-dashboard-links';
import { AppLoadingBubbleModule } from 'src/app/modules/app-loading-bubble';
import { AppLayoutModule } from 'src/app/modules/app-layout.module';
import { AcademicsComponent } from './academics.component';
import { ViewUnitCategoryComponent } from './curriculum/view-unit-category/view-unit-category.component';
import { ViewUnitComponent } from './curriculum/view-unit/view-unit.component';
import { ViewClassLevelCategoryComponent } from './curriculum/view-class-level-category/view-class-level-category.component';
import { AcademicYearUnitAllocationComponent } from './academic-year/academic-year-unit-allocation/academic-year-unit-allocation.component';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { TabErrorStateModule } from 'src/app/modules/app-tab-error.module';
import { NgSelectModule } from '@ng-select/ng-select';
import { AcademicsCurriculumComponent } from './curriculum/academics-curriculum/academics-curriculum.component';


@NgModule({
  declarations: [
    AcademicsComponent,
    CreateUnitCategoriesComponent,
    EditUnitCategoryComponent,
    ViewUnitCategoryComponent,
    ViewUnitComponent,
    EditUnitComponent,
    CreateUnitComponent,
    CreateClassLevelCategoryComponent,
    ViewClassLevelCategoryComponent,
    EditClassLevelCategoryComponent,
    EditClassLevelComponent,
    ViewClassLevelComponent,
    CreateClassLevelComponent,
    // AcademicYearComponent,
    // CreateAcademicYearComponent,
    // ViewAcademicYearComponent,
    // AcademicYearArchivesComponent,
    // ViewAcademicYearInfoComponent,
    // AcademicYearFinancialPlanComponent,
    // AcademicYearSubjectUnitsComponent,
    AcademicsCurriculumComponent,
    AcademicsCurriculumUnitCategoriesComponent,
    AcademicsCurriculumUnitsComponent,
    AcademicsCurriculumClassLevelCategoriesComponent,
    AcademicsCurriculumClassLevelsComponent,
    // AcademicYearUnitAllocationComponent,
  ],
  imports: [
    CommonModule,
    AcademicsRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    ErrorModule,
    AppInputModule,
    AppViewItemsModule,
    AppCrudModule,
    AppDashboardLinksModule,
    AppLoadingBubbleModule,
    AppLayoutModule,
    TabsModule.forRoot(),
    TabErrorStateModule,
    NgSelectModule
  ]
})
export class AcademicsModule { }
