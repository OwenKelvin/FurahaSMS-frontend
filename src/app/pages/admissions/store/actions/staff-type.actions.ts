import { createAction, props } from '@ngrx/store';

export const loadStaffTypes = createAction(
  '[StaffType] Load StaffTypes'
);

export const loadStaffTypesSuccess = createAction(
  '[StaffType] Load StaffTypes Success',
  props<{ data: any[]} >()
);

export const loadStaffTypesFailure = createAction(
  '[StaffType] Load StaffTypes Failure',
  props<{ error: any }>()
);
