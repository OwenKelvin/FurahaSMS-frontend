import { TestBed } from '@angular/core/testing';

import { OnlineAssessmentService } from './online-assessment.service';
import {HttpClientTestingModule} from '@angular/common/http/testing';

describe('OnlineAssessmentService', () => {
  let service: OnlineAssessmentService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(OnlineAssessmentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
