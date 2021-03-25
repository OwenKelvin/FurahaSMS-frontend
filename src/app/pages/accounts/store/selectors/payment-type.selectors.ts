import { createSelector } from '@ngrx/store';
import { selectAccountState } from './account.selectors';
import { paymentTypeFeatureKey } from '../reducers/payment-type.reducer';

export const selectPaymentMethods = createSelector(
  selectAccountState,
  account => account ? Object.values(account[paymentTypeFeatureKey]): []
);
