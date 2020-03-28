import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { GenderEffects } from './gender.effects';

describe('GenderEffects', () => {
  let actions$: Observable<any>;
  let effects: GenderEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        GenderEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.get<GenderEffects>(GenderEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
