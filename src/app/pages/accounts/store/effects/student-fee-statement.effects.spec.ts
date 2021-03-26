import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable, of } from 'rxjs';

import { StudentFeeStatementEffects } from './student-fee-statement.effects';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { StoreModule } from '@ngrx/store';
import { REDUCER_TOKEN, reducerProvider, metaReducers } from 'src/app/store/reducers';

describe('StudentFeeStatementEffects', () => {
  let actions$: Observable<any>;
  let effects: StudentFeeStatementEffects;

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
      ],
      providers: [
        reducerProvider,
        StudentFeeStatementEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.inject<StudentFeeStatementEffects>(StudentFeeStatementEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
