import { Action, createReducer, on } from '@ngrx/store';

import * as GenderActions from '../actions/gender.actions';

export const genderFeatureKey = 'gender';

export interface State {
  [id: number]: {
    id?: number;
    name?: string;
    abbreviation?: string;
  };
}

export const initialState: State = {};

const genderReducer = createReducer(
  initialState,

  on(GenderActions.loadGenders, state => state),
  on(GenderActions.loadGendersSuccess, (state, action) => ({ ...state, ...action.data })),
  on(GenderActions.loadGendersFailure, (state, _action) => state),

);

export const reducer = (state: State | undefined, action: Action) => genderReducer(state, action);
