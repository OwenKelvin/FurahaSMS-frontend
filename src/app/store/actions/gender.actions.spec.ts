import * as fromGender from './gender.actions';

describe('loadGenders', () => {
  it('should return an action', () => {
    expect(fromGender.loadGenders().type).toBe('[Gender] Load Genders');
  });
});
