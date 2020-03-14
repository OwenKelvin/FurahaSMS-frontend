import { Action, createReducer, on } from '@ngrx/store';
import * as SupportStaffActions from '../actions/support-staff.actions';

export const supportStaffFeatureKey = 'supportStaff';

export interface State {

}

export const initialState: State = {

};

const supportStaffReducer = createReducer(
  initialState,

  on(SupportStaffActions.loadSupportStaffs, state => state),
  on(SupportStaffActions.loadSupportStaffsSuccess, (state, action) => state),
  on(SupportStaffActions.loadSupportStaffsFailure, (state, action) => state),

);

export function reducer(state: State | undefined, action: Action) {
  return supportStaffReducer(state, action);
}
