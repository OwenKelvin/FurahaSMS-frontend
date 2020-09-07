import {createFeatureSelector} from '@ngrx/store';
import * as fromLibraryBook from '../reducers/library-book.reducer';

export const selectLibraryBookState = createFeatureSelector<fromLibraryBook.State>(
  fromLibraryBook.libraryBookFeatureKey
);
