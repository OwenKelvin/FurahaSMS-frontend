import { TestBed } from '@angular/core/testing';

import { ClassStreamService } from './class-stream.service';

describe('ClassStreamService', () => {
  let service: ClassStreamService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClassStreamService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
