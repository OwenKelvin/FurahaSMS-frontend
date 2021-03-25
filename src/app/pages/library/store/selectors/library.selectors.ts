import {createFeatureSelector, createSelector} from '@ngrx/store';
import * as fromLibrary from '../reducers';
import * as fromLibraryBookPublisher from '../reducers/library-book-publisher.reducer';

export const selectLibraryState = createFeatureSelector<any>(
  fromLibrary.libraryFeatureKey
);

export const selectLibraryBookAuthors = createSelector(
  selectLibraryState,
  library => library ? library.libraryBookAuthors : null
);

export const selectLibraryBookPublishers = createSelector(
  selectLibraryState,
  library => Object.values(library[fromLibraryBookPublisher.libraryPublisherFeatureKey])
      .filter((item: any) => item.id !== 0)
);

export const selectLibraryBookPublisher = (id: number) => createSelector(
  selectLibraryState,
  publisher => publisher ? publisher[fromLibraryBookPublisher.libraryPublisherFeatureKey][id] : {}
);

// export const selectLibraryBookClassifications = createSelector(
//   selectLibraryState,
//   library => library ? library.libraryBookClassifications : null
// );

export const selectLibraryBookClassifications = createSelector(
  selectLibraryState,
  library => {
    console.log({library});
    return library ? library.libraryBookClassifications : null;
  }
);
