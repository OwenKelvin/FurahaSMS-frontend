import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, concatMap, exhaustMap, tap, mergeMap } from 'rxjs/operators';
import { of } from 'rxjs';

import * as MyProfileActions from '../actions/my-profile.actions';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { Store } from '@ngrx/store';
import { loadToastShowsSuccess } from 'src/app/store/actions/toast-show.actions';
import { Router } from '@angular/router';
import { initialState } from '../reducers/my-profile.reducer';



@Injectable()
export class MyProfileEffects {

  constructor(
    private actions$: Actions,
    private authService: AuthenticationService,
    private store: Store,
    private router: Router
  ) { }

  loadMyProfiles$ = createEffect(() =>
    this.actions$.pipe(
      ofType(MyProfileActions.loadMyProfiles),
      concatMap(() =>
        this.authService.currentUserProfile$.pipe(
          map(data => MyProfileActions.loadMyProfilesSuccess({ data })),
          catchError(error => of(MyProfileActions.loadMyProfilesFailure({ error }))))
      )
    )
  );

  myProfileLogout$ = createEffect(() =>
    this.actions$.pipe(
      ofType(MyProfileActions.myProfileLogout),
      exhaustMap(() => this.authService.logout()),
      tap(() => MyProfileActions.loadMyProfilesSuccess({ data: initialState })),
      tap(() =>
        this.store.dispatch(loadToastShowsSuccess({
          showMessage: true,
          toastBody: 'Successfully logged out',
          toastHeader: 'Logged out',
          toastTime: 'Just Now'
        }))
      ),
      tap(() => this.router.navigate(['/']))
    )
  );

}
