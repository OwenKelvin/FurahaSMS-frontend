import * as fromAccount from './account.actions';

describe('loadAccounts', () => {
  it('should return an action', () => {
    expect(fromAccount.loadAccounts().type).toBe('[Account] Load Accounts');
  });
});
