import { createAction, props } from '@ngrx/store';
import { ICourse } from '../../e-learning/interfaces/course.interface';

export const loadCourses = createAction(
  '[Courses] Load Coursess',
  props<{ data: {id: number} }>()
);

export const loadCoursesSuccess = createAction(
  '[Courses] Load Coursess Success',
  props<{ data: ICourse }>()
);

export const loadCoursesFailure = createAction(
  '[Courses] Load Coursess Failure',
  props<{ error: any }>()
);
