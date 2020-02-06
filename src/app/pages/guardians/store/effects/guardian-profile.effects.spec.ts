import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { GuardianProfileEffects } from './guardian-profile.effects';

describe('GuardianProfileEffects', () => {
  let actions$: Observable<any>;
  let effects: GuardianProfileEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        GuardianProfileEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.get<GuardianProfileEffects>(GuardianProfileEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
