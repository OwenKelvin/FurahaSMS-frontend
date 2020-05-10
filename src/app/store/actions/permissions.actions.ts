import { createAction, props } from '@ngrx/store';

export const loadPermissionss = createAction(
  '[Permissions] Load Permissionss'
);

export const loadPermissionssSuccess = createAction(
  '[Permissions] Load Permissionss Success',
  props<{ data: any }>()
);

export const loadPermissionssFailure = createAction(
  '[Permissions] Load Permissionss Failure',
  props<{ error: any }>()
);
