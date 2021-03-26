import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CrudComponent } from './crud.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ErrorModule } from '../error/error.module';
import { AppInputModule } from '../input/app-input.module';
import { AppValidateSubmitButtonsModule } from '../validate-submit-buttons/validate-submit-buttons.module';
import { EditorModule } from '@tinymce/tinymce-angular';
import { AppLoadingBubbleModule } from 'src/app/modules/app-loading-bubble';
import { ReactiveComponentModule } from '@ngrx/component';


@NgModule({
  declarations: [
    CrudComponent
  ],
  exports: [
    CrudComponent
  ],

  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AppInputModule,
    AppValidateSubmitButtonsModule,
    EditorModule,
    AppLoadingBubbleModule,
    ReactiveComponentModule
  ]
})
export class AppCrudModule { }
