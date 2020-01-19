import * as fromLibrary from '../reducers';
import { selectLibraryState } from './library.selectors';

describe('Library Selectors', () => {
  it('should select the feature state', () => {
    const result = selectLibraryState({
      [fromLibrary.libraryFeatureKey]: {}
    });

    expect(result).toEqual({});
  });
});
