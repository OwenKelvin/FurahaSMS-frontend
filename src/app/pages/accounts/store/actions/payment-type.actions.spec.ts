import * as fromPaymentType from './payment-type.actions';

describe('loadPaymentTypes', () => {
  it('should return an action', () => {
    expect(fromPaymentType.loadPaymentTypes().type).toBe('[PaymentType] Load PaymentTypes');
  });
});
