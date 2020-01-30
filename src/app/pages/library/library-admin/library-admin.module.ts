import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LibraryAdminRoutingModule } from './library-admin-routing.module';
import { LibraryAdminComponent } from './library-admin.component';
import { LibraryAdminUsersComponent } from './library-admin-users/library-admin-users.component';
import { LibraryAdminBooksComponent } from './library-admin-books/library-admin-books.component';
import { LibraryAdminAuthorsComponent } from './library-admin-authors/library-admin-authors.component';
import { LibraryAdminPublishersComponent } from './library-admin-publishers/library-admin-publishers.component';
import { EditBookComponent } from './library-admin-books/edit-book/edit-book.component';
import { AddBookComponent } from './library-admin-books/add-book/add-book.component';
import { ViewBookComponent } from './library-admin-books/view-book/view-book.component';
import { CreateAuthorComponent } from './library-admin-authors/create-author/create-author.component';
import { ViewAuthorComponent } from './library-admin-authors/view-author/view-author.component';
import { EditAuthorComponent } from './library-admin-authors/edit-author/edit-author.component';
import { CreatePublisherComponent } from './library-admin-publishers/create-publisher/create-publisher.component';
import { ViewPublisherComponent } from './library-admin-publishers/view-publisher/view-publisher.component';
import { EditPublisherComponent } from './library-admin-publishers/edit-publisher/edit-publisher.component';
import { CreateTagComponent } from './library-admin-tags/create-tag/create-tag.component';
import { EditTagComponent } from './library-admin-tags/edit-tag/edit-tag.component';
import { ViewTagComponent } from './library-admin-tags/view-tag/view-tag.component';
import { LibraryAdminTagsComponent } from './library-admin-tags/library-admin-tags.component';
import { AppLoadingBubbleModule } from 'src/app/modules/app-loading-bubble';
import { AppDashboardLinksModule } from 'src/app/modules/app-dashboard-links';
import { AppViewItemsModule } from 'src/app/modules/app-view-items.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppInputModule } from 'src/app/modules/app-input.module';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { AppSelectLibraryClassModule } from '../modules/select-library-class.module';


@NgModule({
  declarations: [
    LibraryAdminComponent,
    LibraryAdminUsersComponent,
    LibraryAdminBooksComponent,
    LibraryAdminAuthorsComponent,
    LibraryAdminPublishersComponent,
    EditBookComponent,
    AddBookComponent,
    ViewBookComponent,
    CreateAuthorComponent,
    ViewAuthorComponent,
    EditAuthorComponent,
    CreatePublisherComponent,
    ViewPublisherComponent,
    EditPublisherComponent,
    CreateTagComponent,
    EditTagComponent,
    ViewTagComponent,
    LibraryAdminTagsComponent,
  ],
  imports: [
    CommonModule,
    LibraryAdminRoutingModule,
    AppLoadingBubbleModule,
    AppDashboardLinksModule,
    AppViewItemsModule,
    FormsModule,
    ReactiveFormsModule,
    AppInputModule,
    TabsModule.forRoot(),
    AppSelectLibraryClassModule
  ]
})
export class LibraryAdminModule { }
