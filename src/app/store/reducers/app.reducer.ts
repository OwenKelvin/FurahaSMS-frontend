import { ActionReducerMap, MetaReducer } from '@ngrx/store';

import * as fromGenders from './gender.reducer';
import * as fromReligions from './religion.reducer';
import { InjectionToken } from '@angular/core';
import { environment } from 'src/environments/environment';

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
  [fromReligions.religionFeatureKey]: fromReligions.reducer
}

export const APP_REDUCER_TOKEN = new InjectionToken<ActionReducerMap<State>>('App Reducers');
export const appReducerProvider = { provide: APP_REDUCER_TOKEN, useValue: reducers };

export const appMetaReducers: MetaReducer<State>[] = !environment.production ? [] : [];