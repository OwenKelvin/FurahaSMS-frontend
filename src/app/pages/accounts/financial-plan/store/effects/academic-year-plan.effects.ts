import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, concatMap } from 'rxjs/operators';
import { EMPTY, of } from 'rxjs';

import * as AcademicYearPlanActions from '../actions/academic-year-plan.actions';



@Injectable()
export class AcademicYearPlanEffects {

  loadAcademicYearPlans$ = createEffect(() => {
    return this.actions$.pipe(

      ofType(AcademicYearPlanActions.loadAcademicYearPlans),
      concatMap(() =>
        /** An EMPTY observable only emits completion. Replace with your own observable API request */
        EMPTY.pipe(
          map(data => AcademicYearPlanActions.loadAcademicYearPlansSuccess({ data })),
          catchError(error => of(AcademicYearPlanActions.loadAcademicYearPlansFailure({ error }))))
      )
    );
  });



  constructor(private actions$: Actions) {}

}
