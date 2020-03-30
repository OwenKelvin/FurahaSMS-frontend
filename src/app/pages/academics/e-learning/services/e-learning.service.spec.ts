import { TestBed } from '@angular/core/testing';

import { ELearningService } from './e-learning.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('ELearningService', () => {
  let service: ELearningService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(ELearningService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
