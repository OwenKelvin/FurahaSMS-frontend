import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {catchError, map, concatMap, exhaustMap, tap} from 'rxjs/operators';
import {of} from 'rxjs';

import * as MyProfileActions from '../actions/my-profile.actions';
import {AuthenticationService} from 'src/app/services/authentication.service';
import {Router} from '@angular/router';
import {initialState} from '../reducers/my-profile.reducer';


@Injectable()
export class MyProfileEffects {
  loadMyProfiles$ = createEffect(() =>
    this.actions$.pipe(
      ofType(MyProfileActions.loadMyProfiles),
      concatMap(() =>
        this.authService.currentUserProfile$.pipe(
          map(data => MyProfileActions.loadMyProfilesSuccess({data})),
          catchError(error => of(MyProfileActions.loadMyProfilesFailure({error}))))
      )
    )
  );

  myProfileLogout$ = createEffect(() =>
    this.actions$.pipe(
      ofType(MyProfileActions.myProfileLogout),
      exhaustMap(() => this.authService.logout()),
      map(() => MyProfileActions.loadMyProfilesSuccess({data: initialState})),
      tap(() => this.router.navigate(['/login']))
    )
  );

  constructor(
    private actions$: Actions,
    private authService: AuthenticationService,
    private router: Router
  ) {
  }

}
