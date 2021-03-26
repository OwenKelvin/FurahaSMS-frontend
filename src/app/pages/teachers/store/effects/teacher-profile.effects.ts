import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {catchError, concatMap, map} from 'rxjs/operators';
import {of} from 'rxjs';

import * as TeacherProfileActions from '../actions/teacher-profile.actions';
import {TeacherService} from 'src/app/pages/admissions/services/teacher.service';


@Injectable()
export class TeacherProfileEffects {

  loadTeacherProfiles$ = createEffect(() => this.actions$.pipe(
    ofType(TeacherProfileActions.loadTeacherProfiles),
    concatMap((action) =>
      this.teacherService.getTeacherById(action.data.id).pipe(
        map(data => TeacherProfileActions.loadTeacherProfilesSuccess({data})),
        catchError(error => of(TeacherProfileActions.loadTeacherProfilesFailure({error}))))
    )
  ));

  constructor(private actions$: Actions, private teacherService: TeacherService) {
  }
}
