import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromAcademics from './../reducers';

export const selectAcademicsState = createFeatureSelector<fromAcademics.State>(
  fromAcademics.academicsFeatureKey
);

export const selectAcademicsCourses = createSelector(
  selectAcademicsState,
  academics => academics ? academics.courses: null
)

export const selectAcademicsCourse = (id) => createSelector(
  selectAcademicsCourses,
  courses => courses ? courses[id]: null
)