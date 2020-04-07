import { TestBed } from '@angular/core/testing';

import { StudentFeePaymentService } from './student-fee-payment.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('StudentFeePaymentService', () => {
  let service: StudentFeePaymentService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(StudentFeePaymentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
