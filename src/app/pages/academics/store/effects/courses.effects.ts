import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import * as fromCourses from '../actions/courses.actions';
import {catchError, concatMap, map} from 'rxjs/operators';
import {of} from 'rxjs';
import {ELearningService} from '../../e-learning/services/e-learning.service';


@Injectable()
export class CoursesEffects {

  loadCourses$ = createEffect(() => this.actions$
    .pipe(ofType(fromCourses.loadCourses),
      concatMap((action) =>
        this.eLearningService.getCourseWithId(action.data.id)
          .pipe(map(data => fromCourses.loadCoursesSuccess({data}),
            catchError(error => of(fromCourses.loadCoursesFailure({error}))))
          )
      )
    ));

  constructor(
    private actions$: Actions,
    private eLearningService: ELearningService,
  ) {

  }
}
