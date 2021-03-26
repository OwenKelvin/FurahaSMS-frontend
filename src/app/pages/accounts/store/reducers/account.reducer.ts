import { Action, createReducer, on } from '@ngrx/store';
import * as AccountActions from '../actions/account.actions';
import * as fromPaymentType from './payment-type.reducer';


export interface State {
  [fromPaymentType.paymentTypeFeatureKey]: fromPaymentType.State;
}

export const initialState: State = {
  [fromPaymentType.paymentTypeFeatureKey]: fromPaymentType.initialState
};

const accountReducer = createReducer(
  initialState,

  on(AccountActions.loadAccounts, state => state),
  on(AccountActions.loadAccountsSuccess, (state, _action) => state),
  on(AccountActions.loadAccountsFailure, (state, _action) => state),

);

export const reducer = (state: State | undefined, action: Action) => accountReducer(state, action);
