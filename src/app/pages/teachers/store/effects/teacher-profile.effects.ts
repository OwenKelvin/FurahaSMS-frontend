import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, concatMap } from 'rxjs/operators';
import { EMPTY, of } from 'rxjs';

import * as TeacherProfileActions from '../actions/teacher-profile.actions';



@Injectable()
export class TeacherProfileEffects {

  loadTeacherProfiles$ = createEffect(() => {
    return this.actions$.pipe(

      ofType(TeacherProfileActions.loadTeacherProfiles),
      concatMap(() =>
        /** An EMPTY observable only emits completion. Replace with your own observable API request */
        EMPTY.pipe(
          map(data => TeacherProfileActions.loadTeacherProfilesSuccess({ data })),
          catchError(error => of(TeacherProfileActions.loadTeacherProfilesFailure({ error }))))
      )
    );
  });



  constructor(private actions$: Actions) {}

}
