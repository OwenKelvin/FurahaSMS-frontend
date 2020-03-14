import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, concatMap } from 'rxjs/operators';
import { EMPTY, of } from 'rxjs';

import * as SupportStaffActions from '../actions/support-staff.actions';



@Injectable()
export class SupportStaffEffects {

  loadSupportStaffs$ = createEffect(() => {
    return this.actions$.pipe( 

      ofType(SupportStaffActions.loadSupportStaffs),
      concatMap(() =>
        /** An EMPTY observable only emits completion. Replace with your own observable API request */
        EMPTY.pipe(
          map(data => SupportStaffActions.loadSupportStaffsSuccess({ data })),
          catchError(error => of(SupportStaffActions.loadSupportStaffsFailure({ error }))))
      )
    );
  });



  constructor(private actions$: Actions) {}

}
