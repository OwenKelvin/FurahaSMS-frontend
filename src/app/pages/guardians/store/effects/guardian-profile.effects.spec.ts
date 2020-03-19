import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable, of } from 'rxjs';

import { GuardianProfileEffects } from './guardian-profile.effects';

describe('GuardianProfileEffects', () => {
  const actions$: Observable<any> = of('Load');
  let effects: GuardianProfileEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        GuardianProfileEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.inject<GuardianProfileEffects>(GuardianProfileEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
