import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable, of } from 'rxjs';

import { ReligionEffects } from './religion.effects';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { StoreModule } from '@ngrx/store';
import { REDUCER_TOKEN, reducerProvider, metaReducers } from '../reducers';

describe('ReligionEffects', () => {
  let actions$: Observable<any>;
  let effects: ReligionEffects;

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
        HttpClientTestingModule],
      providers: [
        reducerProvider,
        ReligionEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.inject<ReligionEffects>(ReligionEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
