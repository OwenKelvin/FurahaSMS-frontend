import * as fromMyProfile from './my-profile.actions';

describe('loadMyProfiles', () => {
  it('should return an action', () => {
    expect(fromMyProfile.loadMyProfiles().type).toBe('[MyProfile] Load MyProfiles');
  });
});
