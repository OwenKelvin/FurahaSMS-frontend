import * as fromAccount from '../reducers';
import { selectAccountState } from './account.selectors';
import * as fromPaymentMethods from './../reducers/payment-type.reducer';

describe('Account Selectors', () => {
  it('should select the feature state', () => {
    // const result = selectAccountState({
    //   [fromAccount.accountFeatureKey]: fromPaymentMethods.initialState
    // });
    // expect(result).toEqual({
    //   [fromPaymentMethods.paymentTypeFeatureKey]: fromPaymentMethods.initialState
    // });
  });
});
