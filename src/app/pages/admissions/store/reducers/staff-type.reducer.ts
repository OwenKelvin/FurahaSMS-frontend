import { Action, createReducer, on } from '@ngrx/store';
import * as StaffTypsActions from '../actions/staff-type.actions';

export const staffTypeFeatureKey = 'staffTypes';

export interface State {
  [id: number]: {
    id?: number;
    name?: string;
  };
}

export const initialState: State = {
  0: {
    id: 0,
    name: ''
  }
 };

const staffTypeReducer = createReducer(
  initialState,
  on(StaffTypsActions.loadStaffTypes, state => state),
  on(StaffTypsActions.loadStaffTypesSuccess, (state, action) => {
    const newState = action.data.reduce((a, b) => ({
      ...a, [b.id]: b
    }), {});
    return { ...state, ...newState };
  }),
  on(StaffTypsActions.loadStaffTypesFailure, (state, _action) => state),
);

export const reducer = (state: State | undefined, action: Action) => staffTypeReducer(state, action);
