import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable, of } from 'rxjs';

import { ExamPaperEffects } from './exam-paper.effects';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { reducerProvider } from 'src/app/store/reducers';

describe('ExamPaperEffects', () => {
  const actions$: Observable<any> = of('Load');
  let effects: ExamPaperEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        reducerProvider,
        ExamPaperEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.inject<ExamPaperEffects>(ExamPaperEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
