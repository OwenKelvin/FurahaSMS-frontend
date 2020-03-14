import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { SupportStaffEffects } from './support-staff.effects';

describe('SupportStaffEffects', () => {
  let actions$: Observable<any>;
  let effects: SupportStaffEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        SupportStaffEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.get<SupportStaffEffects>(SupportStaffEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
