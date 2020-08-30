import {TestBed} from '@angular/core/testing';

import {LibraryBookClassesService} from './library-book-classes.service';
import {HttpClientTestingModule} from '@angular/common/http/testing';

describe('LibraryBookClassesService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule]
  }));

  it('should be created', () => {
    const service: LibraryBookClassesService = TestBed.inject(LibraryBookClassesService);
    expect(service).toBeTruthy();
  });
});
