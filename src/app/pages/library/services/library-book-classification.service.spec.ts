import {TestBed} from '@angular/core/testing';

import {LibraryBookClassificationService} from './library-book-classification.service';
import {HttpClientTestingModule} from '@angular/common/http/testing';

describe('LibraryBookClassificationService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule]
  }));

  it('should be created', () => {
    const service: LibraryBookClassificationService = TestBed.inject(LibraryBookClassificationService);
    expect(service).toBeTruthy();
  });
});
