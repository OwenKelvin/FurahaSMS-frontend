import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, concatMap } from 'rxjs/operators';
import { EMPTY, of } from 'rxjs';

import * as ExamPaperActions from '../actions/exam-paper.actions';
import { ExamPaperService } from '../../services/exam-paper.service';



@Injectable()
export class ExamPaperEffects {

  loadExamPapers$ = createEffect(() => this.actions$.pipe(

      ofType(ExamPaperActions.loadExamPapers),
      concatMap((prop) => this.examPaperServive.getExamPaperWithId(prop.id).pipe(
          map(data => ExamPaperActions.loadExamPapersSuccess({ data })),
          catchError(error => of(ExamPaperActions.loadExamPapersFailure({ error })))))
    ));



  constructor(private actions$: Actions, private examPaperServive: ExamPaperService) {}

}
