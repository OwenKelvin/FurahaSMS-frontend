import { createSelector } from '@ngrx/store';
import { AppState } from './../reducers';

export const selectToastState = (state: AppState) => state.toast;
export const selectShowToastMessage = createSelector(
  selectToastState,
  toast => toast.showMessage
);
export const selectToastHeader = createSelector(
  selectToastState,
  toast => toast.toastHeader
);
export const selectToastBody = createSelector(
  selectToastState,
  toast => toast.toastBody
);
export const selectToastTime = createSelector(
  selectToastState,
  toast => toast.toastTime
);
