import { TestBed } from '@angular/core/testing';

import { LibraryAuthorService } from './library-author.service';

describe('LibraryAuthorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LibraryAuthorService = TestBed.get(LibraryAuthorService);
    expect(service).toBeTruthy();
  });
});
