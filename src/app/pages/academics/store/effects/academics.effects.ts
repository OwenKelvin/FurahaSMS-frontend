import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, concatMap } from 'rxjs/operators';
import { EMPTY, of } from 'rxjs';

import * as AcademicsActions from '../actions/academics.actions';



@Injectable()
export class AcademicsEffects {

  loadAcademics$ = createEffect(() => this.actions$.pipe(

      ofType(AcademicsActions.loadAcademics),
      concatMap(() =>
        /** An EMPTY observable only emits completion. Replace with your own observable API request */
        EMPTY.pipe(
          map(data => AcademicsActions.loadAcademicsSuccess({ data })),
          catchError(error => of(AcademicsActions.loadAcademicsFailure({ error }))))
      )
    ));



  constructor(private actions$: Actions) {}

}
