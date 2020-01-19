import { TestBed } from '@angular/core/testing';

import { BookPublisherService } from './book-publisher.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('BookPublisherService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule]
  }));

  it('should be created', () => {
    const service: BookPublisherService = TestBed.get(BookPublisherService);
    expect(service).toBeTruthy();
  });
});
