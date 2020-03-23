import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { AcademicsEffects } from './academics.effects';

describe('AcadeemicsEffects', () => {
  let actions$: Observable<any>;
  let effects: AcademicsEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        AcademicsEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.get<AcademicsEffects>(AcademicsEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
