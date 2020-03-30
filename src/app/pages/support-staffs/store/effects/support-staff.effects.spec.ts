import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable, of } from 'rxjs';

import { SupportStaffEffects } from './support-staff.effects';

describe('SupportStaffEffects', () => {
  let actions$: Observable<any>;
  let effects: SupportStaffEffects;

  beforeEach(() => {
    actions$ = of(null);
    TestBed.configureTestingModule({
      providers: [
        SupportStaffEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.inject<SupportStaffEffects>(SupportStaffEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
