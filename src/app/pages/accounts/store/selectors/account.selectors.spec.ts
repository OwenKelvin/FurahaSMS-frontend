import * as fromAccount from '../reducers/account.reducer';
import { selectAccountState } from './account.selectors';

describe('Account Selectors', () => {
  it('should select the feature state', () => {
    const result = selectAccountState({
      [fromAccount.accountFeatureKey]: {}
    });

    expect(result).toEqual({});
  });
});
