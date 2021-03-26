import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {catchError, map, concatMap} from 'rxjs/operators';
import {EMPTY, of} from 'rxjs';

import * as StudentProfileActions from '../actions/student-profile.actions';
import {StudentService} from 'src/app/services/student.service';


@Injectable()
export class StudentProfileEffects {

  loadStudentProfiles$ = createEffect(() => this.actions$.pipe(
    ofType(StudentProfileActions.loadStudentProfiles),
    concatMap((payload) => this.studentService.getStudentById(payload.data.id).pipe(
      map(data => StudentProfileActions.loadStudentProfilesSuccess({data})),
      catchError(error => of(StudentProfileActions.loadStudentProfilesFailure({error})))))
  ));

  constructor(
    private actions$: Actions,
    private studentService: StudentService
  ) {
  }

}
