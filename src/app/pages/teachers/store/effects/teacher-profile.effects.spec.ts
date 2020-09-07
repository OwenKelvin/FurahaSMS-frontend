import {TestBed} from '@angular/core/testing';
import {provideMockActions} from '@ngrx/effects/testing';
import {Observable, of} from 'rxjs';

import {TeacherProfileEffects} from './teacher-profile.effects';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {StoreModule} from '@ngrx/store';
import {REDUCER_TOKEN, reducerProvider, metaReducers} from 'src/app/store/reducers';
import {myProfileFeatureKey, reducer} from '../../../my-profile/store/reducers/my-profile.reducer';

describe('TeacherProfileEffects', () => {
  const actions$: Observable<any> = of('Load');
  let effects: TeacherProfileEffects;

  beforeEach(() => {
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
        StoreModule.forFeature(myProfileFeatureKey, reducer)
      ],
      providers: [
        reducerProvider,
        TeacherProfileEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.inject<TeacherProfileEffects>(TeacherProfileEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
