import { ActionReducerMap } from '@ngrx/store';

import * as fromGenders from './gender.reducer';
import * as fromReligions from './religion.reducer';

export const appFeatureKey = 'app';

export interface State {
  [fromGenders.genderFeatureKey]: fromGenders.State;
  [fromReligions.religionFeatureKey]: fromReligions.State;
}

export const initialState: State = {
  [fromGenders.genderFeatureKey]: fromGenders.initialState,
  [fromReligions.religionFeatureKey]: fromReligions.initialState,
};

export const reducers: ActionReducerMap<State> = {
  [fromGenders.genderFeatureKey]: fromGenders.reducer,
  [fromReligions.religionFeatureKey]: fromReligions.reducer,
}