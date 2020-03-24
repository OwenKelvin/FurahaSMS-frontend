import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable, of } from 'rxjs';

import { AcademicsEffects } from './academics.effects';

describe('AcademicsEffects', () => {
  let actions$: Observable<any>;
  let effects: AcademicsEffects;

  beforeEach(() => {
    actions$ = of({ });
    TestBed.configureTestingModule({
      providers: [
        AcademicsEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.inject<AcademicsEffects>(AcademicsEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
