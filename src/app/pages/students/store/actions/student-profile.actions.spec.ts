import * as fromStudentProfile from './student-profile.actions';

describe('loadStudentProfiles', () => {
  it('should return an action', () => {
    expect(fromStudentProfile.loadStudentProfiles({data: { id: 0 }}).type).toBe('[StudentProfile] Load StudentProfiles');
  });
});
