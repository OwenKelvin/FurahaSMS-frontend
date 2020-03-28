import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { StudentProfileEffects } from './student-profile.effects';

describe('StudentProfileEffects', () => {
  let actions$: Observable<any>;
  let effects: StudentProfileEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        StudentProfileEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.get<StudentProfileEffects>(StudentProfileEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
