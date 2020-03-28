import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromStudentProfile from '../reducers/student-profile.reducer';

export const selectStudentProfileState = createFeatureSelector<fromStudentProfile.State>(
  fromStudentProfile.studentProfileFeatureKey
);
