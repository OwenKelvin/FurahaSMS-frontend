import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromAcademics from './../reducers';
import { ICourse } from '../../e-learning/interfaces/course.interface';

export const selectAcademicsState = createFeatureSelector<fromAcademics.State>(
  fromAcademics.academicsFeatureKey
);

export const selectAcademicsCourses = createSelector(
  selectAcademicsState,
  academics => academics.courses
)

export const selectAcademicsCourse = (id) => createSelector(
  selectAcademicsCourses,
  courses => {
    console.log({ id, courses})
    return courses[id]
  }
)