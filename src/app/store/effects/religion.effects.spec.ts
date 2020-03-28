import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { ReligionEffects } from './religion.effects';

describe('ReligionEffects', () => {
  let actions$: Observable<any>;
  let effects: ReligionEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        ReligionEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.get<ReligionEffects>(ReligionEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
