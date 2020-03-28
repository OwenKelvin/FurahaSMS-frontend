import * as fromStudentProfile from '../reducers/student-profile.reducer';
import { selectStudentProfileState } from './student-profile.selectors';

describe('StudentProfile Selectors', () => {
  it('should select the feature state', () => {
    const result = selectStudentProfileState({
      [fromStudentProfile.studentProfileFeatureKey]: {}
    });

    expect(result).toEqual({});
  });
});
