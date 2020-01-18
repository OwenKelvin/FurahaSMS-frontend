import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LibraryRoutingModule } from './library-routing.module';
import { LibraryComponent } from './library.component';
import { LibrarySearchCatalogueComponent } from './library-search-catalogue/library-search-catalogue.component';
import { LibraryMyAccountComponent } from './library-my-account/library-my-account.component';
import { LibraryAdminComponent } from './library-admin/library-admin.component';
import { AppDashboardLinksModule } from 'src/app/modules/app-dashboard-links';
import { AppLayoutModule } from 'src/app/modules/app-layout.module';
import { LibraryAdminUsersComponent } from './library-admin-users/library-admin-users.component';
import { LibraryAdminBooksComponent } from './library-admin-books/library-admin-books.component';
import { LibraryAdminAuthorsComponent } from './library-admin-authors/library-admin-authors.component';
import { LibraryAdminPublishersComponent } from './library-admin-publishers/library-admin-publishers.component';


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
  ],
  imports: [
    CommonModule,
    LibraryRoutingModule,
    AppDashboardLinksModule,
    AppLayoutModule
  ]
})
export class LibraryModule { }
