import {ActionReducerMap,} from '@ngrx/store';

import * as fromLibraryBookAuthor from './library-book-author.reducer';
import * as fromLibraryBookPublisher from './library-book-publisher.reducer';
import * as fromLibraryBookClassification from './library-book-classification.reducer';
import * as fromLibraryBooks from './library-book.reducer';
import * as fromRoot from '../../../../store/reducers';

export const libraryFeatureKey = 'library';

export interface LibraryState {
  libraryBookAuthors: fromLibraryBookAuthor.State[];
  [fromLibraryBookPublisher.libraryPublisherFeatureKey]: fromLibraryBookPublisher.State;
  libraryBookClassifications: fromLibraryBookClassification.State[];
  [fromLibraryBooks.libraryBookFeatureKey]: fromLibraryBooks.State;
}

export interface State extends fromRoot.AppState {
  libraryBookAuthors: fromLibraryBookAuthor.State[];
  [fromLibraryBookPublisher.libraryPublisherFeatureKey]: fromLibraryBookPublisher.State;
  libraryBookClassifications: fromLibraryBookClassification.State[];
  [fromLibraryBooks.libraryBookFeatureKey]: fromLibraryBooks.State;
}

export const reducers: ActionReducerMap<LibraryState> = {
  libraryBookAuthors: fromLibraryBookAuthor.reducer,
  [fromLibraryBookPublisher.libraryPublisherFeatureKey]: fromLibraryBookPublisher.reducer,
  libraryBookClassifications: fromLibraryBookClassification.reducer,
  [fromLibraryBooks.libraryBookFeatureKey]: fromLibraryBooks.reducer
};
