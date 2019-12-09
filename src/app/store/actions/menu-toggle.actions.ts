import { createAction, props } from '@ngrx/store';

export const menuToggles = createAction(
  '[MenuToggle] Load MenuToggles'
);

export const loadMenuTogglesSuccess = createAction(
  '[MenuToggle] Load MenuToggles Success'
);

export const loadMenuTogglesFailure = createAction(
  '[MenuToggle] Load MenuToggles Failure'
);
