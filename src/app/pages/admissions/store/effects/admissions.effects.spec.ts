import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { AdmissionsEffects } from './admissions.effects';

describe('AdmissionsEffects', () => {
  let actions$: Observable<any>;
  let effects: AdmissionsEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        AdmissionsEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.get<AdmissionsEffects>(AdmissionsEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
