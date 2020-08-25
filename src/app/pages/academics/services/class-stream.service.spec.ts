import { TestBed } from '@angular/core/testing';

import { ClassStreamService } from './class-stream.service';
import {HttpClientTestingModule} from '@angular/common/http/testing';

describe('ClassStreamService', () => {
  let service: ClassStreamService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ]
    });
    service = TestBed.inject(ClassStreamService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
