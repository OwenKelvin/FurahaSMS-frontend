import * as fromCourses from './courses.actions';

describe('loadCoursess', () => {
  it('should return an action', () => {
    expect(fromCourses.loadCourses({ data: { id: 0 } }).type).toBe('[Courses] Load Coursess');
  });
});
