import { TestBed } from '@angular/core/testing';

import { LibraryAuthorService } from './library-author.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('LibraryAuthorService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule]
  }));

  it('should be created', () => {
    const service: LibraryAuthorService = TestBed.get(LibraryAuthorService);
    expect(service).toBeTruthy();
  });
});
