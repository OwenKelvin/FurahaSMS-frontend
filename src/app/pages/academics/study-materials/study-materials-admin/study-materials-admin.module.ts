import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudyMaterialsAdminRoutingModule } from './study-materials-admin-routing.module';
import { StudyMaterialsAdminComponent } from './study-materials-admin.component';
import { RouterModule } from '@angular/router';
import { CreateStudyMaterialComponent } from './create-study-material/create-study-material.component';
import { AppCheckboxModule } from 'src/app/shared/checkbox/checkbox.module';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddStudyMaterialsTitleModule } from './add-study-materials-title/add-study-materials-title.module';
import { AppInputModule } from 'src/app/components/input/app-input.module';
import { ReactiveComponentModule } from '@ngrx/component';

@NgModule({
  declarations: [StudyMaterialsAdminComponent, CreateStudyMaterialComponent],
  imports: [
    CommonModule,
    StudyMaterialsAdminRoutingModule,
    RouterModule,
    AppCheckboxModule,
    PdfViewerModule,
    FormsModule,
    ReactiveFormsModule,
    AddStudyMaterialsTitleModule,
    AppInputModule,
    ReactiveComponentModule
  ]
})
export class StudyMaterialsAdminModule { }
