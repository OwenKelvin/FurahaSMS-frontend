import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromTeacherProfile from '../reducers/teacher-profile.reducer';

export const selectTeacherProfileState = createFeatureSelector<fromTeacherProfile.State>(
  fromTeacherProfile.teacherProfileFeatureKey
);

export const selectTeacher = (id: number) => createSelector(
  selectTeacherProfileState,
  state => state ? state[id] : { id: 0, firstName: '', lastName: '' }
);
