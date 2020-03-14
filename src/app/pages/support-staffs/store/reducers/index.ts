import {
  createSelector,
  createFeatureSelector,
  ActionReducerMap,
} from '@ngrx/store';

import * as fromLibraryBookAuthor from './support-staff.reducer';

import * as fromRoot from '../../../../store/reducers';

export const libraryFeatureKey = 'library';

export interface LibraryState {
  supportStaff: fromLibraryBookAuthor.State;
 
}

export interface State extends fromRoot.AppState {
  supportStaff: fromLibraryBookAuthor.State;

}

export const reducers: ActionReducerMap<LibraryState> = {
  supportStaff: fromLibraryBookAuthor.reducer,
 
};
