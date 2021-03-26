import { Action, createReducer, on } from '@ngrx/store';

import * as ReligionActions from '../actions/religion.actions';

export const religionFeatureKey = 'religion';

export interface State {
  [id: number]: {
    id?: number;
    name?: string;
    abbreviation?: string;
  };
}
export const initialState: State = {};

const religionReducer = createReducer(
  initialState,

  on(ReligionActions.loadReligions, state => state),
  on(ReligionActions.loadReligionsSuccess, (state, action) => ({ ...state, ...action.data })),
  on(ReligionActions.loadReligionsFailure, (state, _action) => state),

);

export const reducer = (state: State | undefined, action: Action) => religionReducer(state, action);
