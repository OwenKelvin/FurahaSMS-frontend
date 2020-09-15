import * as fromCourses from './courses.actions';

describe('loadCourses', () => {
  it('should return an action', () => {
    expect(fromCourses.loadCourses({ data: { id: 0 } }).type).toBe('[Courses] Load Courses');
  });
});
