import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, concatMap } from 'rxjs/operators';
import { EMPTY, of } from 'rxjs';

import * as GuardianProfileActions from '../actions/guardian-profile.actions';



@Injectable()
export class GuardianProfileEffects {

  loadGuardianProfiles$ = createEffect(() => this.actions$.pipe(

      ofType(GuardianProfileActions.loadGuardianProfiles),
      concatMap(() =>
        /** An EMPTY observable only emits completion. Replace with your own observable API request */
        EMPTY.pipe(
          map(data => GuardianProfileActions.loadGuardianProfilesSuccess({ data })),
          catchError(error => of(GuardianProfileActions.loadGuardianProfilesFailure({ error }))))
      )
    ));



  constructor(private actions$: Actions) {}

}
