import * as fromLibraryBook from '../reducers/library-book.reducer';
import { selectLibraryBookState } from './library-book.selectors';

describe('LibraryBook Selectors', () => {
  it('should select the feature state', () => {
    const result = selectLibraryBookState({
      [fromLibraryBook.libraryBookFeatureKey]: {}
    });

    expect(result).toEqual({});
  });
});
