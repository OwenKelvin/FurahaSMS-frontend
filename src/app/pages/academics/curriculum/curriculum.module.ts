import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CurriculumRoutingModule } from './curriculum-routing.module';
import { CreateUnitCategoriesComponent } from './create-unit-categories/create-unit-categories.component';
import { EditUnitCategoryComponent } from './edit-unit-category/edit-unit-category.component';
import { ViewUnitCategoryComponent } from './view-unit-category/view-unit-category.component';
import { ViewUnitComponent } from './view-unit/view-unit.component';
import { EditUnitComponent } from './edit-unit/edit-unit.component';
import { CreateUnitComponent } from './create-unit/create-unit.component';
import { CreateClassLevelCategoryComponent } from './create-class-level-category/create-class-level-category.component';
import { ViewClassLevelCategoryComponent } from './view-class-level-category/view-class-level-category.component';
import { EditClassLevelCategoryComponent } from './edit-class-level-category/edit-class-level-category.component';
import { EditClassLevelComponent } from './edit-class-level/edit-class-level.component';
import { ViewClassLevelComponent } from './view-class-level/view-class-level.component';
import { CreateClassLevelComponent } from './create-class-level/create-class-level.component';
import { AcademicsCurriculumComponent } from './academics-curriculum/academics-curriculum.component';
import {
  AcademicsCurriculumUnitCategoriesComponent
} from './academics-curriculum-unit-categories/academics-curriculum-unit-categories.component';
import { AcademicsCurriculumUnitsComponent } from './academics-curriculum-units/academics-curriculum-units.component';
import {
  AcademicsCurriculumClassLevelCategoriesComponent
} from './academics-curriculum-class-level-categories/academics-curriculum-class-level-categories.component';
import { AcademicsCurriculumClassLevelsComponent } from './academics-curriculum-class-levels/academics-curriculum-class-levels.component';
import { AppInputModule } from 'src/app/components/input/app-input.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppLoadingBubbleModule } from 'src/app/modules/app-loading-bubble';
import { AppLinksModule } from 'src/app/shared/links/links.module';
import { ErrorModule } from 'src/app/components/error/error.module';
import { TabErrorStateModule } from 'src/app/modules/app-tab-error.module';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { AppViewItemsModule } from 'src/app/modules/app-view-items.module';
import { AppCrudModule } from 'src/app/components/crud/app-crud.module';
import { NgSelectModule } from '@ng-select/ng-select';
import { AppValidateSubmitButtonsModule } from 'src/app/components/validate-submit-buttons/validate-submit-buttons.module';
import { EditorModule } from '@tinymce/tinymce-angular';
import { ReactiveComponentModule } from '@ngrx/component';


@NgModule({
  declarations: [
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
    AcademicsCurriculumComponent,
    AcademicsCurriculumUnitCategoriesComponent,
    AcademicsCurriculumUnitsComponent,
    AcademicsCurriculumClassLevelCategoriesComponent,
    AcademicsCurriculumClassLevelsComponent,
  ],
  imports: [
    CommonModule,
    CurriculumRoutingModule,
    AppInputModule,
    FormsModule,
    ReactiveFormsModule,
    AppLoadingBubbleModule,
    AppLinksModule,
    ErrorModule,
    TabErrorStateModule,
    TabsModule.forRoot(),
    AppViewItemsModule,
    AppCrudModule,
    NgSelectModule,
    AppValidateSubmitButtonsModule,
    EditorModule,
    ReactiveComponentModule
  ]
})
export class CurriculumModule { }
