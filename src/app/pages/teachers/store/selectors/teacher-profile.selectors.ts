import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromTeacherProfile from '../reducers/teacher-profile.reducer';

export const selectTeacherProfileState = createFeatureSelector<fromTeacherProfile.State>(
  fromTeacherProfile.teacherProfileFeatureKey
);
