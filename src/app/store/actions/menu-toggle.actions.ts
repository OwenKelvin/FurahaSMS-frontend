import { createAction, props } from '@ngrx/store';

export const menuToggles = createAction(
  '[MenuToggle] Load MenuToggles'
);

export const showMenu = createAction(
  '[MenuToggle] Load MenuToggles Success'
);

export const hideMenu = createAction(
  '[MenuToggle] Load MenuToggles Failure'
);
