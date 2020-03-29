import { createAction } from '@ngrx/store';

export const loadEditModesSuccess = createAction(
  '[EditMode] Load EditModes Success'
);

export const loadEditModesFailure = createAction(
  '[EditMode] Load EditModes Failure'
);
