import * as fromMyProfile from '../reducers/my-profile.reducer';
import { selectMyProfileState } from './my-profile.selectors';

describe('MyProfile Selectors', () => {
  it('should select the feature state', () => {
    const result = selectMyProfileState({
      [fromMyProfile.myProfileFeatureKey]: {}
    });

    expect(result).toEqual({});
  });
});
