import { createSelector } from '@ngrx/store';
import { AppState } from './../reducers';

export const selectStudentProfile = (state: AppState) => state.studentProfile;
export const selectStudentId = createSelector(
  selectStudentProfile,
  studentProfile => {
    if (studentProfile) {
      return studentProfile.id;
    }
    return null;
  }
);
