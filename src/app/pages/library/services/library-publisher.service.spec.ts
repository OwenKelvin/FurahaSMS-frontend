import { TestBed } from '@angular/core/testing';

import { LibraryPublisherService } from './library-publisher.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('LibraryPublisherService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule]
  }));

  it('should be created', () => {
    const service: LibraryPublisherService = TestBed.inject(LibraryPublisherService);
    expect(service).toBeTruthy();
  });
});
