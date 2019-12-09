import { createSelector } from '@ngrx/store';
import { AppState } from './../reducers';

export const selectMenuToggle = (state: AppState) => state.menuToggle;
export const selectShowMenu = createSelector(
  selectMenuToggle,
  menuToggle => {
    if (menuToggle) {
      return menuToggle.showMenu;
    }
    return true;
  }
);
