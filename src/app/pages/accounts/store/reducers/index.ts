import {
  createSelector,
  createFeatureSelector,
  ActionReducerMap,
} from '@ngrx/store';

import * as fromPaymentMethods from './payment-type.reducer';
import * as fromRoot from '../../../../store/reducers';

export const accountFeatureKey = 'account';

export interface AccountsState {
  [fromPaymentMethods.paymentTypeFeatureKey]: fromPaymentMethods.State;
}

export interface State extends fromRoot.AppState {
  [fromPaymentMethods.paymentTypeFeatureKey]: fromPaymentMethods.State;
}

export const reducers: ActionReducerMap<AccountsState> = {
  [fromPaymentMethods.paymentTypeFeatureKey]: fromPaymentMethods.reducer
};
