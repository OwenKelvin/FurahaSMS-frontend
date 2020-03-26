import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, concatMap } from 'rxjs/operators';
import { EMPTY, of } from 'rxjs';

import * as MyProfileActions from '../actions/my-profile.actions';
import { AuthenticationService } from 'src/app/services/authentication.service';



@Injectable()
export class MyProfileEffects {

  constructor(private actions$: Actions, private authService: AuthenticationService) { }

  loadMyProfiles$ = createEffect(() => {
    return this.actions$.pipe(

      ofType(MyProfileActions.loadMyProfiles),
      concatMap(() =>
        /** An EMPTY observable only emits completion. Replace with your own observable API request */
        this.authService.currentUserProfile$.pipe(
          map(data => MyProfileActions.loadMyProfilesSuccess({ data })),
          catchError(error => of(MyProfileActions.loadMyProfilesFailure({ error }))))
        // /** An EMPTY observable only emits completion. Replace with your own observable API request */
        // EMPTY.pipe(
        //   map(data => MyProfileActions.loadMyProfilesSuccess({ data })),
        //   catchError(error => of(MyProfileActions.loadMyProfilesFailure({ error }))))
      )
    );
  });

}
