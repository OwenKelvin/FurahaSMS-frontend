import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable, of } from 'rxjs';

import { MyProfileEffects } from './my-profile.effects';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('MyProfileEffects', () => {
  let actions$: Observable<any>;
  let effects: MyProfileEffects;

  beforeEach(() => {
    actions$ = of({});
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        MyProfileEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.inject<MyProfileEffects>(MyProfileEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
