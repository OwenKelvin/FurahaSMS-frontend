import { createAction, props } from '@ngrx/store';

export const loadTeacherProfiles = createAction(
  '[TeacherProfile] Load TeacherProfiles',
  props<{ data: any; }>()
);

export const loadTeacherProfilesSuccess = createAction(
  '[TeacherProfile] Load TeacherProfiles Success',
  props<{ data: any }>()
);

export const loadTeacherProfilesFailure = createAction(
  '[TeacherProfile] Load TeacherProfiles Failure',
  props<{ error: any }>()
);
