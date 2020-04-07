import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { PaymentTypeEffects } from './payment-type.effects';

describe('PaymentTypeEffects', () => {
  let actions$: Observable<any>;
  let effects: PaymentTypeEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        PaymentTypeEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.get<PaymentTypeEffects>(PaymentTypeEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
