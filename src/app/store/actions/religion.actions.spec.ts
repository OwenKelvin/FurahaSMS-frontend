import * as fromReligion from './religion.actions';

describe('loadReligions', () => {
  it('should return an action', () => {
    expect(fromReligion.loadReligions().type).toBe('[Religion] Load Religions');
  });
});
