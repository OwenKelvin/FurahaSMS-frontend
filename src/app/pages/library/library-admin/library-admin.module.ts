import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LibraryAdminRoutingModule } from './library-admin-routing.module';
import { LibraryAdminComponent } from './library-admin.component';
import { LibraryAdminUsersComponent } from './library-admin-users/library-admin-users.component';
import { CreateTagComponent } from './library-admin-tags/create-tag/create-tag.component';
import { EditTagComponent } from './library-admin-tags/edit-tag/edit-tag.component';
import { ViewTagComponent } from './library-admin-tags/view-tag/view-tag.component';
import { LibraryAdminTagsComponent } from './library-admin-tags/library-admin-tags.component';
import { AppLoadingBubbleModule } from 'src/app/modules/app-loading-bubble';
import { AppLinksModule } from 'src/app/shared/links/links.module';
import { AppViewItemsModule } from 'src/app/modules/app-view-items.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppInputModule } from 'src/app/components/input/app-input.module';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { AppSelectLibraryClassModule } from '../modules/select-library-class.module';
import { EditorModule } from '@tinymce/tinymce-angular';
import { AppValidateSubmitButtonsModule } from 'src/app/components/validate-submit-buttons/validate-submit-buttons.module';
import { ReactiveComponentModule } from '@ngrx/component';


@NgModule({
  declarations: [
    LibraryAdminComponent,
    LibraryAdminUsersComponent,
    CreateTagComponent,
    EditTagComponent,
    ViewTagComponent,
    LibraryAdminTagsComponent,
  ],
  imports: [
    CommonModule,
    LibraryAdminRoutingModule,
    AppLoadingBubbleModule,
    AppLinksModule,
    AppViewItemsModule,
    FormsModule,
    ReactiveFormsModule,
    AppInputModule,
    TabsModule.forRoot(),
    AppSelectLibraryClassModule,
    EditorModule,
    AppValidateSubmitButtonsModule,
    ReactiveComponentModule
  ]
})
export class LibraryAdminModule { }
