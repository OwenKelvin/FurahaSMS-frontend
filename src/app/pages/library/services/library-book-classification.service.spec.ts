import { TestBed } from '@angular/core/testing';

import { LibraryBookClassificationService } from './library-book-classification.service';

describe('LibraryBookClassificationService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LibraryBookClassificationService = TestBed.get(LibraryBookClassificationService);
    expect(service).toBeTruthy();
  });
});
