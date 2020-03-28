import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, concatMap } from 'rxjs/operators';
import { EMPTY, of } from 'rxjs';

import * as StudentProfileActions from '../actions/student-profile.actions';



@Injectable()
export class StudentProfileEffects {

  loadStudentProfiles$ = createEffect(() => {
    return this.actions$.pipe(
      
      ofType(StudentProfileActions.loadStudentProfiles),
      concatMap(() => {
        alert('BAng');
        /** An EMPTY observable only emits completion. Replace with your own observable API request */
        return EMPTY.pipe(
          map(data => StudentProfileActions.loadStudentProfilesSuccess({ data })),
          catchError(error => of(StudentProfileActions.loadStudentProfilesFailure({ error }))));
      })
    );
  });



  constructor(private actions$: Actions) {}

}
