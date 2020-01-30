import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LibraryRoutingModule } from './library-routing.module';
import { LibraryComponent } from './library.component';
import { LibrarySearchCatalogueComponent } from './components/library-search-catalogue/library-search-catalogue.component';
import { LibraryMyAccountComponent } from './components/library-my-account/library-my-account.component';
// import { LibraryAdminComponent } from './library-admin/library-admin.component';
import { AppDashboardLinksModule } from 'src/app/modules/app-dashboard-links';
import { AppLayoutModule } from 'src/app/modules/app-layout.module';
// import { LibraryAdminUsersComponent } from './library-admin/library-admin-users/library-admin-users.component';
// import { LibraryAdminBooksComponent } from './library-admin/library-admin-books/library-admin-books.component';
// import { LibraryAdminAuthorsComponent } from './library-admin/library-admin-authors/library-admin-authors.component';
// import { LibraryAdminPublishersComponent } from './library-admin/library-admin-publishers/library-admin-publishers.component';
// import { EditBookComponent } from './library-admin/library-admin-books/edit-book/edit-book.component';
// import { AddBookComponent } from './library-admin/library-admin-books/add-book/add-book.component';
// import { ViewBookComponent } from './library-admin/library-admin-books/view-book/view-book.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppInputModule } from 'src/app/modules/app-input.module';
import { AppViewItemsModule } from 'src/app/modules/app-view-items.module';
// import { CreateAuthorComponent } from './library-admin/library-admin-authors/create-author/create-author.component';
// import { ViewAuthorComponent } from './library-admin/library-admin-authors/view-author/view-author.component';
import { AppLoadingBubbleModule } from 'src/app/modules/app-loading-bubble';
// import { EditAuthorComponent } from './library-admin/library-admin-authors/edit-author/edit-author.component';
// import { CreatePublisherComponent } from './library-admin/library-admin-publishers/create-publisher/create-publisher.component';
// import { ViewPublisherComponent } from './library-admin/library-admin-publishers/view-publisher/view-publisher.component';
// import { EditPublisherComponent } from './library-admin/library-admin-publishers/edit-publisher/edit-publisher.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { StoreModule } from '@ngrx/store';
import * as fromLibrary from './store/reducers';
import { EffectsModule } from '@ngrx/effects';
import * as fromLibraryEffects from './store/effects';
// import { CreateTagComponent } from './library-admin/library-admin-tags/create-tag/create-tag.component';
// import { EditTagComponent } from './library-admin/library-admin-tags/edit-tag/edit-tag.component';
// import { ViewTagComponent } from './library-admin/library-admin-tags/view-tag/view-tag.component';
// import { LibraryAdminTagsComponent } from './library-admin/library-admin-tags/library-admin-tags.component';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { SelectLibraryClassComponent } from './components/select-library-class/select-library-class.component';
import { SelectLibrarySubClassComponent } from './components/select-library-sub-class/select-library-sub-class.component';
import { ViewLibraryBookComponent } from './components/view-library-book/view-library-book.component';


@NgModule({
  declarations: [
    LibraryComponent,
    LibrarySearchCatalogueComponent,
    LibraryMyAccountComponent,
    // LibraryAdminComponent,
    // LibraryAdminUsersComponent,
    // LibraryAdminBooksComponent,
    // LibraryAdminAuthorsComponent,
    // LibraryAdminPublishersComponent,
    // EditBookComponent,
    // AddBookComponent,
    // ViewBookComponent,
    // CreateAuthorComponent,
    // ViewAuthorComponent,
    // EditAuthorComponent,
    // CreatePublisherComponent,
    // ViewPublisherComponent,
    // EditPublisherComponent,
    // CreateTagComponent,
    // EditTagComponent,
    // ViewTagComponent,
    // LibraryAdminTagsComponent,
    // SelectLibraryClassComponent,
    // SelectLibrarySubClassComponent,
    ViewLibraryBookComponent,
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
    NgSelectModule,
    StoreModule.forFeature(fromLibrary.libraryFeatureKey, fromLibrary.reducers),
    EffectsModule.forFeature([
      fromLibraryEffects.LibraryBookAuthorEffects,
      fromLibraryEffects.LibraryBookPublisherEffects,
      fromLibraryEffects.LibraryBookClassificationEffects
    ]),
    TabsModule.forRoot()


  ]
})
export class LibraryModule { }
