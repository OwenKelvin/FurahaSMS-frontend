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


export const loadSupportStaffById = createAction(
  '[SupportStaff] Load SupportStaff By Id',
  props<{ data: {id: number} }>()
);

export const loadSupportStaffByIdSuccess = createAction(
  '[SupportStaff] Load SupportStaff By Id Success',
  props<{ data: any }>()
);

export const loadSupportStaffByIdFailure = createAction(
  '[SupportStaff] Load SupportStaff By Id Failure',
  props<{ error: any }>()
);

