import * as fromLibraryBook from './library-book.actions';

describe('loadLibraryBooks', () => {
  it('should return an action', () => {
    expect(fromLibraryBook.loadLibraryBooks().type).toBe('[LibraryBook] Load LibraryBooks');
  });
});
