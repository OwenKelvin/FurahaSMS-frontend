import { createSelector } from '@ngrx/store';
import { AppState } from '../reducers';

export const selectDialogState = (state: AppState) => state.dialog;
export const selectDialogShowState = createSelector(
  selectDialogState,
  dialog => dialog.show
);
