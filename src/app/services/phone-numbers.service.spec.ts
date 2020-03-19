import { TestBed } from '@angular/core/testing';

import { PhoneNumbersService } from './phone-numbers.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('PhoneNumbersService', () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    })
  );

  it('should be created', () => {
    const service: PhoneNumbersService = TestBed.inject(
      PhoneNumbersService
    );
    expect(service).toBeTruthy();
  });
});
