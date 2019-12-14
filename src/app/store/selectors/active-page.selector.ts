import { createSelector } from '@ngrx/store';
import { AppState } from './../reducers';

export const selectActivePageState = (state: AppState) => state.activePage;
export const selectActivePageStateId = createSelector(
  selectActivePageState,
  activePage => {
    if (activePage) {
      return activePage.id;
    }
    return null;
  }
);
