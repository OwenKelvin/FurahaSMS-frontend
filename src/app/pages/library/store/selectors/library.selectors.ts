import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromLibrary from '../reducers';

export const selectLibraryState = createFeatureSelector<fromLibrary.State>(
  fromLibrary.libraryFeatureKey
);

export const selectLibraryBookAuthors = createSelector(
  selectLibraryState,
  library => library.libraryBookAuthors
);

export const selectLibraryBookPublishers = createSelector(
  selectLibraryState,
  library => library.libraryBookPublishers
);