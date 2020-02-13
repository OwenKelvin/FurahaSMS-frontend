import * as fromTeacherProfile from '../reducers/teacher-profile.reducer';
import { selectTeacherProfileState } from './teacher-profile.selectors';

describe('TeacherProfile Selectors', () => {
  it('should select the feature state', () => {
    const result = selectTeacherProfileState({
      [fromTeacherProfile.teacherProfileFeatureKey]: {}
    });

    expect(result).toEqual({});
  });
});
