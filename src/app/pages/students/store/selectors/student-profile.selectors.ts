import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromStudentProfile from '../reducers/student-profile.reducer';

export const selectStudentProfileState = createFeatureSelector<fromStudentProfile.State>(
  fromStudentProfile.studentProfileFeatureKey
);

export const selectStudent = (id: number) => createSelector(
  selectStudentProfileState,
  state => state ? state[id] : { id: 0, firstName: '', lastName: ''}
);
