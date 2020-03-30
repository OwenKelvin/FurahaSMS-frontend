import * as fromMyProfile from '../reducers/my-profile.reducer';
import { selectMyProfileState } from './my-profile.selectors';

describe('MyProfile Selectors', () => {
  it('should select the feature state', () => {
    const result = selectMyProfileState({
      [fromMyProfile.myProfileFeatureKey]: {
        id: 0,
        firstName: '',
        lastName: '',
        middleName: '',
        otherNames: ''
      }
    });

    expect(result).toEqual({
      id: 0,
      firstName: '',
      lastName: '',
      middleName: '',
      otherNames: ''
    });
  });
});
