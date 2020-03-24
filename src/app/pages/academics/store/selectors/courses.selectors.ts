import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromAcademics from './../reducers';

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
    return courses[id]
  }
)