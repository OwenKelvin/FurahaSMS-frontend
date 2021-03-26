import { Action, createReducer, on } from '@ngrx/store';
import { loadActivePagesFailure, loadActivePagesSuccess } from '../actions/active-page.actions';


export const activePageFeatureKey = 'activePage';

export interface ActivePageStateInterface {
  id?: null | number;
}

export const initialState: ActivePageStateInterface = {
  id: null
};

const activePageReducer = createReducer(
  initialState,
  on(loadActivePagesSuccess, (state, payload) => ({
      ...state, id: payload.id
    })),
  on(loadActivePagesFailure, state => ({
      ...state, ...initialState
    }))
);

export const reducer = (state: ActivePageStateInterface | undefined, action: Action) => activePageReducer(state, action);
