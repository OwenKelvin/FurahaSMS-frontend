import { TestBed } from '@angular/core/testing';

import { StudentFeePaymentService } from './student-fee-payment.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { StoreModule } from '@ngrx/store';
import { REDUCER_TOKEN, reducerProvider, metaReducers } from 'src/app/store/reducers';

describe('StudentFeePaymentService', () => {
  let service: StudentFeePaymentService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        StoreModule.forRoot(REDUCER_TOKEN, {
          metaReducers,
          runtimeChecks: {
            strictStateImmutability: true,
            strictActionImmutability: true,
          }
        }),
        HttpClientTestingModule
      ],
      providers: [reducerProvider]
    });
    service = TestBed.inject(StudentFeePaymentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
