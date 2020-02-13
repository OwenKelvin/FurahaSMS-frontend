import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LibraryRoutingModule } from './library-routing.module';
import { LibraryComponent } from './library.component';
import { LibrarySearchCatalogueComponent } from './components/library-search-catalogue/library-search-catalogue.component';
import { LibraryMyAccountComponent } from './components/library-my-account/library-my-account.component';
import { AppDashboardLinksModule } from 'src/app/modules/app-dashboard-links';
import { AppLayoutModule } from 'src/app/modules/app-layout.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppLoadingBubbleModule } from 'src/app/modules/app-loading-bubble';
import { StoreModule } from '@ngrx/store';
import * as fromLibrary from './store/reducers';
import { EffectsModule } from '@ngrx/effects';
import * as fromLibraryEffects from './store/effects';
import { ViewLibraryBookComponent } from './components/view-library-book/view-library-book.component';
import { TypeaheadModule } from 'ngx-bootstrap/typeahead';


@NgModule({
  declarations: [
    LibraryComponent,
    LibrarySearchCatalogueComponent,
    LibraryMyAccountComponent,
    ViewLibraryBookComponent,
  ],
  imports: [
    CommonModule,
    LibraryRoutingModule,
    AppDashboardLinksModule,
    AppLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    AppLoadingBubbleModule,
    StoreModule.forFeature(fromLibrary.libraryFeatureKey, fromLibrary.reducers),
    EffectsModule.forFeature([
      fromLibraryEffects.LibraryBookAuthorEffects,
      fromLibraryEffects.LibraryBookPublisherEffects,
      fromLibraryEffects.LibraryBookClassificationEffects
    ]),
    TypeaheadModule.forRoot(),


  ]
})
export class LibraryModule { }
