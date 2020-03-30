import { Action, createReducer, on, ActionReducerMap } from '@ngrx/store';
import * as AdmissionsActions from '../actions/admissions.actions';
import * as fromStaffType from './staff-type.reducer';

export const admissionsFeatureKey = 'admissions';

export interface State {
  staffTypes: fromStaffType.State
}

export const initialState: State = {
  staffTypes: fromStaffType.initialState
};

export const reducers: ActionReducerMap<State> = {
  staffTypes: fromStaffType.reducer,
};
