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

export const initialState: State[] = [{}];

const genderReducer = createReducer(
  initialState,

  on(GenderActions.loadGenders, state => state),
  on(GenderActions.loadGendersSuccess, (state, action) => {
    return { ...state, ...action.data };
  }),
  on(GenderActions.loadGendersFailure, (state, _action) => state),

);

export function reducer(state: State | undefined, action: Action) {
  return genderReducer(state, action);
}
