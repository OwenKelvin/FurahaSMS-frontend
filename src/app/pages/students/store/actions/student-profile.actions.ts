import { createAction, props } from '@ngrx/store';

export const loadStudentProfiles = createAction(
  '[StudentProfile] Load StudentProfiles',
  props<{ data: {id: number}; }>()
);

export const loadStudentProfilesSuccess = createAction(
  '[StudentProfile] Load StudentProfiles Success',
  props<{ data: any }>()
);

export const loadStudentProfilesFailure = createAction(
  '[StudentProfile] Load StudentProfiles Failure',
  props<{ error: any }>()
);
