import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LibraryRoutingModule } from './library-routing.module';
import { LibraryComponent } from './library.component';
import { LibrarySearchCatalogueComponent } from './components/library-search-catalogue/library-search-catalogue.component';
import { LibraryMyAccountComponent } from './components/library-my-account/library-my-account.component';
import { LibraryAdminComponent } from './components/library-admin/library-admin.component';
import { AppDashboardLinksModule } from 'src/app/modules/app-dashboard-links';
import { AppLayoutModule } from 'src/app/modules/app-layout.module';
import { LibraryAdminUsersComponent } from './components/library-admin/library-admin-users/library-admin-users.component';
import { LibraryAdminBooksComponent } from './components/library-admin/library-admin-books/library-admin-books.component';
import { LibraryAdminAuthorsComponent } from './components/library-admin/library-admin-authors/library-admin-authors.component';
import { LibraryAdminPublishersComponent } from './components/library-admin/library-admin-publishers/library-admin-publishers.component';
import { EditBookComponent } from './components/library-admin/library-admin-books/edit-book/edit-book.component';
import { AddBookComponent } from './components/library-admin/library-admin-books/add-book/add-book.component';
import { ViewBookComponent } from './components/library-admin/library-admin-books/view-book/view-book.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppInputModule } from 'src/app/modules/app-input.module';
import { AppViewItemsModule } from 'src/app/modules/app-view-items.module';
import { CreateAuthorComponent } from './components/library-admin/library-admin-authors/create-author/create-author.component';
import { ViewAuthorComponent } from './components/library-admin/library-admin-authors/view-author/view-author.component';
import { AppLoadingBubbleModule } from 'src/app/modules/app-loading-bubble';
import { EditAuthorComponent } from './components/library-admin/library-admin-authors/edit-author/edit-author.component';


@NgModule({
  declarations: [
    LibraryComponent,
    LibrarySearchCatalogueComponent,
    LibraryMyAccountComponent,
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
  ],
  imports: [
    CommonModule,
    LibraryRoutingModule,
    AppDashboardLinksModule,
    AppLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    AppInputModule,
    AppViewItemsModule,
    AppLoadingBubbleModule,


  ]
})
export class LibraryModule { }
