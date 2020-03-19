import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, concatMap } from 'rxjs/operators';
import { EMPTY, of } from 'rxjs';

import * as AdmissionsActions from '../actions/admissions.actions';



@Injectable()
export class AdmissionsEffects {

  loadAdmissionss$ = createEffect(() => {
    return this.actions$.pipe(

      ofType(AdmissionsActions.loadAdmissionss),
      concatMap(() =>
        /** An EMPTY observable only emits completion. Replace with your own observable API request */
        EMPTY.pipe(
          map(data => AdmissionsActions.loadAdmissionssSuccess({ data })),
          catchError(error => of(AdmissionsActions.loadAdmissionssFailure({ error }))))
      )
    );
  });



  constructor(private actions$: Actions) {}

}
