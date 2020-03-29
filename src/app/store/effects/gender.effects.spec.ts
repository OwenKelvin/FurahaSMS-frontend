import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable, of } from 'rxjs';

import { GenderEffects } from './gender.effects';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { StoreModule } from '@ngrx/store';
import { REDUCER_TOKEN, reducerProvider, metaReducers } from '../reducers';

describe('GenderEffects', () => {
  let actions$: Observable<any>;
  let effects: GenderEffects;

  beforeEach(() => {
    actions$ = of({});
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
      providers: [
        reducerProvider,
        GenderEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.inject<GenderEffects>(GenderEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
