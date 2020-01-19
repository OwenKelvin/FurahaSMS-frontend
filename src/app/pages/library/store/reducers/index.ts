import {
  createSelector,
  createFeatureSelector,
  ActionReducerMap,
} from '@ngrx/store';

import * as fromLibraryBookAuthor from './library-book-author.reducer';
import * as fromLibraryBookPublisher from './library-book-publisher.reducer';
import * as fromRoot from '../../../../store/reducers';

export const libraryFeatureKey = 'library';

export interface LibraryState {
  libraryBookAuthors: fromLibraryBookAuthor.State[];
  libraryBookPublishers: fromLibraryBookPublisher.State[];
}

export interface State extends fromRoot.AppState {
  libraryBookAuthors: fromLibraryBookAuthor.State[];
  libraryBookPublishers: fromLibraryBookPublisher.State[];
}

export const reducers: ActionReducerMap<LibraryState> = {
  libraryBookAuthors: fromLibraryBookAuthor.reducer,
  libraryBookPublishers: fromLibraryBookPublisher.reducer
};
