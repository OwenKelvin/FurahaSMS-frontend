import * as fromAccount from '../reducers';
import { selectAccountState } from './account.selectors';
import * as fromPaymentMethods from './../reducers/payment-type.reducer';
import * as fromStudentPaymentStatement from './../reducers/student-fee-statement.reducer';

describe('Account Selectors', () => {
  describe('selectAccountState', () => {
    it('should select the feature state', () => {
      const result = selectAccountState({
        [fromAccount.accountFeatureKey]: {
          [fromPaymentMethods.paymentTypeFeatureKey]: fromPaymentMethods.initialState,
          [fromStudentPaymentStatement.studentFeeStatementFeatureKey]: fromStudentPaymentStatement.initialState
        }
      });
      expect(result).toEqual({
        [fromPaymentMethods.paymentTypeFeatureKey]: fromPaymentMethods.initialState,
        [fromStudentPaymentStatement.studentFeeStatementFeatureKey]: fromStudentPaymentStatement.initialState
      });
    });
  });
});
