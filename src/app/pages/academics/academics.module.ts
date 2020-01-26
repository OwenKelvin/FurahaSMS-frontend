import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AcademicsRoutingModule } from './academics-routing.module';
import { CreateUnitCategoriesComponent } from './create-unit-categories/create-unit-categories.component';
import { EditUnitCategoryComponent } from './edit-unit-category/edit-unit-category.component';
import { EditUnitComponent } from './edit-unit/edit-unit.component';
import { CreateUnitComponent } from './create-unit/create-unit.component';
import { CreateClassLevelCategoryComponent } from './create-class-level-category/create-class-level-category.component';
import { EditClassLevelCategoryComponent } from './edit-class-level-category/edit-class-level-category.component';
import { EditClassLevelComponent } from './edit-class-level/edit-class-level.component';
import { ViewClassLevelComponent } from './view-class-level/view-class-level.component';
import { CreateClassLevelComponent } from './create-class-level/create-class-level.component';
import { AcademicYearComponent } from './academic-year/academic-year.component';
import { CreateAcademicYearComponent } from './create-academic-year/create-academic-year.component';
import { ViewAcademicYearComponent } from './view-academic-year/view-academic-year.component';
import { AcademicYearArchivesComponent } from './academic-year-archives/academic-year-archives.component';
import { ViewAcademicYearInfoComponent } from './view-academic-year-info/view-academic-year-info.component';
import { AcademicYearFinancialPlanComponent } from './academic-year-financial-plan/academic-year-financial-plan.component';
import { AcademicYearSubjectUnitsComponent } from './academic-year-subject-units/academic-year-subject-units.component';
import { AcademicsCurriculumComponent } from './academics-curriculum/academics-curriculum.component';
import {
  AcademicsCurriculumUnitCategoriesComponent
} from './academics-curriculum-unit-categories/academics-curriculum-unit-categories.component';
import { AcademicsCurriculumUnitsComponent } from './academics-curriculum-units/academics-curriculum-units.component';
import {
  AcademicsCurriculumClassLevelCategoriesComponent
} from './academics-curriculum-class-level-categories/academics-curriculum-class-level-categories.component';
import { AcademicsCurriculumClassLevelsComponent } from './academics-curriculum-class-levels/academics-curriculum-class-levels.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ErrorModule } from '../../components/error/error.module';
import { AppInputModule } from 'src/app/modules/app-input.module';
import { AppViewItemsModule } from 'src/app/modules/app-view-items.module';
import { AppCrudModule } from 'src/app/modules/app-crud.module';
import { AppDashboardLinksModule } from 'src/app/modules/app-dashboard-links';
import { AppLoadingBubbleModule } from 'src/app/modules/app-loading-bubble';
import { AppLayoutModule } from 'src/app/modules/app-layout.module';
import { AcademicsComponent } from './academics.component';
import { ViewUnitCategoryComponent } from './view-unit-category/view-unit-category.component';
import { ViewUnitComponent } from './view-unit/view-unit.component';
import { ViewClassLevelCategoryComponent } from './view-class-level-category/view-class-level-category.component';
import { AcademicYearUnitAllocationComponent } from './academic-year-unit-allocation/academic-year-unit-allocation.component';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { TabErrorStateModule } from 'src/app/modules/app-tab-error.module';
import { NgSelectModule } from '@ng-select/ng-select';


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
    AcademicYearComponent,
    CreateAcademicYearComponent,
    ViewAcademicYearComponent,
    AcademicYearArchivesComponent,
    ViewAcademicYearInfoComponent,
    AcademicYearFinancialPlanComponent,
    AcademicYearSubjectUnitsComponent,
    AcademicsCurriculumComponent,
    AcademicsCurriculumUnitCategoriesComponent,
    AcademicsCurriculumUnitsComponent,
    AcademicsCurriculumClassLevelCategoriesComponent,
    AcademicsCurriculumClassLevelsComponent,
    AcademicYearUnitAllocationComponent,
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
