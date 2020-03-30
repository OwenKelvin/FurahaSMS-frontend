import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable, of } from 'rxjs';

import { StudentProfileEffects } from './student-profile.effects';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('StudentProfileEffects', () => {
  let actions$: Observable<any>;
  let effects: StudentProfileEffects;

  beforeEach(() => {
    actions$ = of({});
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        StudentProfileEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.inject<StudentProfileEffects>(StudentProfileEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
