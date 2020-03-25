import { Action, createReducer, on } from '@ngrx/store';
import { loadCourses, loadCoursesSuccess, loadCoursesFailure } from '../actions/courses.actions';
import { ICourse } from '../../e-learning/interfaces/course.interface';


export const coursesFeatureKey = 'courses';

export interface State {
  [id: number]: ICourse;
}

export const initialState: State = {
  0: {
    name: ''
  }
};

const coursesReducer = createReducer(
  initialState,
  on(loadCourses, state => state),
  on(loadCoursesSuccess, (state, action) => {
    return {
      ...state,
      [Number(action.data.id)]: action.data
    }
  }),
  on(loadCoursesFailure, (state, action) => state),
);

export function reducer(state: State | undefined, action: Action) {
  return coursesReducer(state, action);
}
