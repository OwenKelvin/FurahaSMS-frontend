import * as fromLibrary from '../reducers';
import { selectLibraryState, selectLibraryBookAuthors } from './library.selectors';

describe('Library Selectors', () => {
  it('should select the feature state', () => {
    const result = selectLibraryBookAuthors({
      libraryBookAuthors: [], libraryBookPublishers: []
      // [fromLibrary.libraryFeatureKey]: {}
    });

    expect(result).toEqual([]);
  });
});
