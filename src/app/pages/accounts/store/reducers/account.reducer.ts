import { Action, createReducer, on } from '@ngrx/store';
import * as AccountActions from '../actions/account.actions';


export interface State {

}

export const initialState: State = {

};

const accountReducer = createReducer(
  initialState,

  on(AccountActions.loadAccounts, state => state),
  on(AccountActions.loadAccountsSuccess, (state, action) => state),
  on(AccountActions.loadAccountsFailure, (state, action) => state),

);

export function reducer(state: State | undefined, action: Action) {
  return accountReducer(state, action);
}
