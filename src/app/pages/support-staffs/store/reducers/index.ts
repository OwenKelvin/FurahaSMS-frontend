import {
  createSelector,
  createFeatureSelector,
  ActionReducerMap,
} from '@ngrx/store';

import * as fromSupportStaff from './support-staff.reducer';

import * as fromRoot from '../../../../store/reducers';


export interface SupportStaffState {
  supportStaff: fromSupportStaff.State;

}

export interface State extends fromRoot.AppState {
  supportStaff: fromSupportStaff.State;

}

export const reducers: ActionReducerMap<SupportStaffState> = {
  supportStaff: fromSupportStaff.reducer,

};
