import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable, of } from 'rxjs';

import { StudentFeeStatementEffects } from './student-fee-statement.effects';

describe('StudentFeeStatementEffects', () => {
  let actions$: Observable<any>;
  let effects: StudentFeeStatementEffects;

  beforeEach(() => {
    actions$ = of({})
    TestBed.configureTestingModule({
      providers: [
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
