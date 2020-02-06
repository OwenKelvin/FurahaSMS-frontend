import * as fromGuardianProfile from '../reducers/guardian-profile.reducer';
import { selectGuardianProfileState } from './guardian-profile.selectors';

describe('GuardianProfile Selectors', () => {
  it('should select the feature state', () => {
    const result = selectGuardianProfileState({
      [fromGuardianProfile.guardianProfileFeatureKey]: {}
    });

    expect(result).toEqual({});
  });
});
