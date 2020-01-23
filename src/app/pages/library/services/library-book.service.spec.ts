import { TestBed } from '@angular/core/testing';

import { LibraryBookService } from './library-book.service';

describe('LibraryBookService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LibraryBookService = TestBed.get(LibraryBookService);
    expect(service).toBeTruthy();
  });
});
