import { TestBed } from '@angular/core/testing';

import { LibraryBookTagService } from './library-book-tag.service';

describe('LibraryBookTagService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LibraryBookTagService = TestBed.get(LibraryBookTagService);
    expect(service).toBeTruthy();
  });
});
