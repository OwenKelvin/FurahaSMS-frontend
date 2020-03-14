import { Action, createReducer, on } from '@ngrx/store';
import * as StaffTypsActions from '../actions/staff-type.actions';

export const staffTypeFeatureKey = 'staffType';

export interface State {
  [id: number]: {
    id: number;
    name: string;
  }
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
    return { ...state, [action.id]: { id: action.id, name: action.name } };
  }),
  on(StaffTypsActions.loadStaffTypesFailure, (state, action) => state),
);

export function reducer(state: State | undefined, action: Action) {
  return staffTypeReducer(state, action);
}
