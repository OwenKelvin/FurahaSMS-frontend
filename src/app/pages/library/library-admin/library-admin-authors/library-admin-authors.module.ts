import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppInputModule } from 'src/app/modules/app-input.module';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { AppSelectLibraryClassModule } from '../../modules/select-library-class.module';
import { EditorModule } from '@tinymce/tinymce-angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppDashboardLinksModule } from 'src/app/modules/app-dashboard-links';
import { LibraryAdminAuthorsRoutingModule } from './library-admin-authors-routing.module';
import { CreateAuthorComponent } from './create-author/create-author.component';
import { ViewAuthorComponent } from './view-author/view-author.component';
import { EditAuthorComponent } from './edit-author/edit-author.component';
import { LibraryAdminAuthorsComponent } from './library-admin-authors.component';
import { AppViewItemsModule } from 'src/app/modules/app-view-items.module';
import { AppLoadingBubbleModule } from 'src/app/modules/app-loading-bubble';

@NgModule({
  declarations: [
    CreateAuthorComponent,
    ViewAuthorComponent,
    EditAuthorComponent,
    LibraryAdminAuthorsComponent,
  ],
  imports: [
    CommonModule,
    LibraryAdminAuthorsRoutingModule,
    AppInputModule,
    TabsModule.forRoot(),
    AppSelectLibraryClassModule,
    EditorModule,
    FormsModule,
    ReactiveFormsModule,
    AppDashboardLinksModule,
    AppViewItemsModule,
    AppLoadingBubbleModule
  ]
})
export class LibraryAdminAuthorsModule { }
