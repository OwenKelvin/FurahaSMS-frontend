import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { TeacherProfileEffects } from './teacher-profile.effects';

describe('TeacherProfileEffects', () => {
  let actions$: Observable<any>;
  let effects: TeacherProfileEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        TeacherProfileEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.get<TeacherProfileEffects>(TeacherProfileEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
