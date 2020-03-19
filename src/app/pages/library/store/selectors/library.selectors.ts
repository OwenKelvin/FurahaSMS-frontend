import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromLibrary from '../reducers';

export const selectLibraryState = createFeatureSelector<fromLibrary.LibraryState>(
  fromLibrary.libraryFeatureKey
);

export const selectLibraryBookAuthors = createSelector(
  selectLibraryState,
  library => library ? library.libraryBookAuthors : null
);

export const selectLibraryBookPublishers = createSelector(
  selectLibraryState,
  library => library ? library.libraryBookPublishers : null
);

export const selectLibraryBookClassifications = createSelector(
  selectLibraryState,
  library => library ? library.libraryBookClassifications: null
);

