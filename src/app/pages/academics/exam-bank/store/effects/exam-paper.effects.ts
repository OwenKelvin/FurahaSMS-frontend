import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, concatMap } from 'rxjs/operators';
import { EMPTY, of } from 'rxjs';

import * as ExamPaperActions from '../actions/exam-paper.actions';



@Injectable()
export class ExamPaperEffects {

  loadExamPapers$ = createEffect(() => {
    return this.actions$.pipe( 

      ofType(ExamPaperActions.loadExamPapers),
      concatMap(() =>
        /** An EMPTY observable only emits completion. Replace with your own observable API request */
        EMPTY.pipe(
          map(data => ExamPaperActions.loadExamPapersSuccess({ data })),
          catchError(error => of(ExamPaperActions.loadExamPapersFailure({ error }))))
      )
    );
  });



  constructor(private actions$: Actions) {}

}
