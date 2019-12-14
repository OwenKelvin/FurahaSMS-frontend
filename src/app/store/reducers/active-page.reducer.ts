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
  on(loadActivePagesSuccess, (state, payload) => {
    return {
      ...state, id: payload.id
    };

  }),
  on(loadActivePagesFailure, state => {
    return {
      ...state, ...initialState
    };
  })
);

export function reducer(state: ActivePageStateInterface | undefined, action: Action) {
  return activePageReducer(state, action);
}
