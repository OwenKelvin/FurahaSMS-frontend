import { Action, createReducer, on } from '@ngrx/store';
import * as SupportStaffActions from '../actions/support-staff.actions';

export const supportStaffFeatureKey = 'supportStaffs';

export interface State {
  supportStaffTypes?: any[];
  staffs?: {
    [id: number]: any;
  };
}

export const initialState: State = {

};

const supportStaffReducer = createReducer(
  initialState,

  on(SupportStaffActions.loadSupportStaffs, state => state),
  on(SupportStaffActions.loadSupportStaffsSuccess, (state, _action) => state),
  on(SupportStaffActions.loadSupportStaffsFailure, (state, _action) => state),

  on(SupportStaffActions.loadSupportStaffById, state => state),
  on(SupportStaffActions.loadSupportStaffByIdSuccess, (state, action) => {
    const newStaffs = {...state.staffs, [action.data.id]: action.data };
    return { ...state, staffs: newStaffs };
  }),
  on(SupportStaffActions.loadSupportStaffByIdFailure, state => state),

);

export const reducer = (state: State | undefined, action: Action) => supportStaffReducer(state, action);
