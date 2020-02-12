import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { ExamPaperEffects } from './exam-paper.effects';

describe('ExamPaperEffects', () => {
  let actions$: Observable<any>;
  let effects: ExamPaperEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        ExamPaperEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.get<ExamPaperEffects>(ExamPaperEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
