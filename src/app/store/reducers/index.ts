import { InjectionToken } from '@angular/core';
import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from './../../../environments/environment';
import * as fromToast from './toast.reducer';


export interface AppState {

  [fromToast.toastFeatureKey]: fromToast.ToastStateInterface;
}

export const reducers: ActionReducerMap<AppState> = {
  [fromToast.toastFeatureKey]: fromToast.reducer
};

export const REDUCER_TOKEN = new InjectionToken<ActionReducerMap<AppState>>('Registered Reducers');
export const reducerProvider = { provide: REDUCER_TOKEN, useValue: reducers };

export const metaReducers: MetaReducer<AppState>[] = !environment.production ? [] : [];
