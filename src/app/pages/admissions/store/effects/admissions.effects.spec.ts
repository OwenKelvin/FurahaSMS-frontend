import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable, of } from 'rxjs';

import { AdmissionsEffects } from './admissions.effects';

describe('AdmissionsEffects', () => {
  let actions$: Observable<any>;
  let effects: AdmissionsEffects;

  beforeEach(() => {
    actions$ = of(null);
    TestBed.configureTestingModule({
      providers: [
        AdmissionsEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.inject<AdmissionsEffects>(AdmissionsEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
