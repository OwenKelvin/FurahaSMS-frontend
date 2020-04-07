import {
  createSelector,
  createFeatureSelector,
  ActionReducerMap,
} from '@ngrx/store';

import * as fromPaymentMethods from './payment-type.reducer';
import * as fromStudentPaymentStatement from './student-fee-statement.reducer';
import * as fromRoot from '../../../../store/reducers';

export const accountFeatureKey = 'accounts';

export interface AccountsState {
  [fromPaymentMethods.paymentTypeFeatureKey]: fromPaymentMethods.State;
  [fromStudentPaymentStatement.studentFeeStatementFeatureKey]: fromStudentPaymentStatement.State;
}

export interface State extends fromRoot.AppState {
  [fromPaymentMethods.paymentTypeFeatureKey]: fromPaymentMethods.State;
  [fromStudentPaymentStatement.studentFeeStatementFeatureKey]: fromStudentPaymentStatement.State;
}

export const reducers: ActionReducerMap<AccountsState> = {
  [fromPaymentMethods.paymentTypeFeatureKey]: fromPaymentMethods.reducer,
  [fromStudentPaymentStatement.studentFeeStatementFeatureKey]: fromStudentPaymentStatement.reducer
};
