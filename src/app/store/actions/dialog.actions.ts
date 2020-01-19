import { createAction, props } from '@ngrx/store';

export const closeDialog = createAction(
  '[Dialog] close'
);
export const showDialog = createAction(
  '[Dialog] show'
);
