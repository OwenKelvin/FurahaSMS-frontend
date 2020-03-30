import { createAction, props } from '@ngrx/store';

export const loadSupportStaffs = createAction(
  '[SupportStaff] Load SupportStaffs'
);

export const loadSupportStaffsSuccess = createAction(
  '[SupportStaff] Load SupportStaffs Success',
  props<{ data: any }>()
);

export const loadSupportStaffsFailure = createAction(
  '[SupportStaff] Load SupportStaffs Failure',
  props<{ error: any }>()
);
