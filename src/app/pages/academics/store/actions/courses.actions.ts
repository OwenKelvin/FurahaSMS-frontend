import { createAction, props } from '@ngrx/store';
import { ICourse } from '../../e-learning/interfaces/course.interface';

export const loadCourses = createAction(
  '[Courses] Load Courses',
  props<{ data: {id: number} }>()
);

export const loadCoursesSuccess = createAction(
  '[Courses] Load Courses Success',
  props<{ data: ICourse }>()
);

export const loadCoursesFailure = createAction(
  '[Courses] Load Courses Failure',
  props<{ error: any }>()
);

export const createLearningOutcomeAction = createAction(
  '[Courses] Create Learning Outcome',
  props<{ data: { courseId: number; topicId: number; learningOutcome: any } }>()
);
