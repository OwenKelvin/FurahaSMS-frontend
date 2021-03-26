import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable, of } from 'rxjs';

import { PaymentTypeEffects } from './payment-type.effects';
import { createAction, StoreModule } from '@ngrx/store';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { REDUCER_TOKEN, reducerProvider, metaReducers } from 'src/app/store/reducers';

describe('PaymentTypeEffects', () => {
  let actions$: Observable<any>;
  let effects: PaymentTypeEffects;

  beforeEach(() => {
    actions$ = of(createAction('[Test Action]'));
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        StoreModule.forRoot(REDUCER_TOKEN, {
          metaReducers,
          runtimeChecks: {
            strictStateImmutability: true,
            strictActionImmutability: true,
          }
        }),
      ],
      providers: [
        reducerProvider,
        PaymentTypeEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.inject<PaymentTypeEffects>(PaymentTypeEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
