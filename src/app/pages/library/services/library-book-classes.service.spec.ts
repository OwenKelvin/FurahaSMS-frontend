import { TestBed } from '@angular/core/testing';

import { LibraryBookClassesService } from './library-book-classes.service';

describe('LibraryBookClassesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LibraryBookClassesService = TestBed.get(LibraryBookClassesService);
    expect(service).toBeTruthy();
  });
});
