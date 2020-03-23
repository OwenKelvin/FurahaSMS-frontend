import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType, Effect } from '@ngrx/effects';
import * as fromCourses from '../actions/courses.actions';
import { concatMap, map, catchError, tap } from 'rxjs/operators';
import { of } from 'rxjs';
import { ELearningService } from '../../e-learning/services/e-learning.service';
import { Store } from '@ngrx/store';



@Injectable()
export class CoursesEffects {

  constructor(
    private actions$: Actions,
    private eLerningService: ELearningService,
    private store: Store
  ) {

  }


  loadCourses$ = createEffect(() => {
    return this.actions$
      .pipe(ofType(fromCourses.loadCourses),
        concatMap((action) => {
          return this.eLerningService.getCourseWithId(action.data.id)

            .pipe(map(data => fromCourses.loadCoursesSuccess({ data }),
              catchError(error => of(fromCourses.loadCoursesFailure({ error }))))
            )
        })
      );
  });
};
