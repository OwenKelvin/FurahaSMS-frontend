import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppInputModule } from 'src/app/components/input/app-input.module';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { AppSelectLibraryClassModule } from '../../modules/select-library-class.module';
import { EditorModule } from '@tinymce/tinymce-angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppLinksModule } from 'src/app/shared/links/links.module';
import { LibraryAdminTagsRoutingModule } from './library-admin-tags-routing.module';
import { AppValidateSubmitButtonsModule } from 'src/app/components/validate-submit-buttons/validate-submit-buttons.module';
import { ReactiveComponentModule } from '@ngrx/component';

@NgModule({
  declarations: [

  ],
  imports: [
    CommonModule,
    LibraryAdminTagsRoutingModule,
    AppInputModule,
    TabsModule.forRoot(),
    AppSelectLibraryClassModule,
    EditorModule,
    FormsModule,
    ReactiveFormsModule,
    AppLinksModule,
    AppValidateSubmitButtonsModule,
    ReactiveComponentModule
  ]
})
export class LibraryAdminTagsModule { }
