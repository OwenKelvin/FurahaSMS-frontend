import {TestBed} from '@angular/core/testing';
import {provideMockActions} from '@ngrx/effects/testing';
import {Observable, of} from 'rxjs';

import {CoursesEffects} from './courses.effects';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {StoreModule} from '@ngrx/store';
import {REDUCER_TOKEN, reducerProvider, metaReducers} from 'src/app/store/reducers';
import {appFeatureKey, reducers} from '../../../../store/reducers/app.reducer';

describe('CoursesEffects', () => {
  let actions$: Observable<any>;
  let effects: CoursesEffects;

  beforeEach(() => {
    actions$ = of({});
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
        StoreModule.forFeature(appFeatureKey, reducers)
      ],
      providers: [
        reducerProvider,
        CoursesEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.inject<CoursesEffects>(CoursesEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
