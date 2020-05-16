import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppInputModule } from 'src/app/modules/app-input.module';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { AppSelectLibraryClassModule } from '../../modules/select-library-class.module';
import { EditorModule } from '@tinymce/tinymce-angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppLinksModule } from 'src/app/shared/links/links.module';
import { LibraryAdminTagsRoutingModule } from './library-admin-tags-routing.module';

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
    AppLinksModule
  ]
})
export class LibraryAdminTagsModule { }
