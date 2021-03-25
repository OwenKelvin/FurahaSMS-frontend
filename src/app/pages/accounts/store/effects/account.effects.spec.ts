import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable, of } from 'rxjs';

import { AccountEffects } from './account.effects';
import { createAction } from '@ngrx/store';

describe('AccountEffects', () => {
  let actions$: Observable<any>;
  let effects: AccountEffects;

  beforeEach(() => {
    actions$ = of(createAction('[Test Action]'));
    TestBed.configureTestingModule({
      providers: [
        AccountEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.inject<AccountEffects>(AccountEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
