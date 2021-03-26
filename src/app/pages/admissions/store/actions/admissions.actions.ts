import { createAction, props } from '@ngrx/store';

export const loadAdmissions = createAction(
  '[Admissions] Load Admissions'
);

export const loadAdmissionsSuccess = createAction(
  '[Admissions] Load Admissions Success',
  props<{ data: any }>()
);

export const loadAdmissionsFailure = createAction(
  '[Admissions] Load Admissions Failure',
  props<{ error: any }>()
);
