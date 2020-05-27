import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable, of } from 'rxjs';

import { StudentProfileEffects } from './student-profile.effects';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { StoreModule } from '@ngrx/store';
import { REDUCER_TOKEN, reducerProvider, metaReducers } from 'src/app/store/reducers';

describe('StudentProfileEffects', () => {
  let actions$: Observable<any>;
  let effects: StudentProfileEffects;

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
        StudentProfileEffects,
        reducerProvider,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.inject<StudentProfileEffects>(StudentProfileEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
