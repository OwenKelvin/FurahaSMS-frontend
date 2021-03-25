import {Action, createReducer, on} from '@ngrx/store';
import {
  createLearningOutcomeAction,
  loadCourses,
  loadCoursesFailure,
  loadCoursesSuccess
} from '../actions/courses.actions';
import {ICourse} from '../../e-learning/interfaces/course.interface';


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
  on(loadCoursesSuccess, (state, action) => ({
      ...state,
      [Number(action.data.id)]: action.data
    })),
  on(loadCoursesFailure, (state, _action) => state),
  on(createLearningOutcomeAction, (state, action) => {

    const {courseId, topicId, learningOutcome} = action.data;
    const newState = Object.create(state);
    state[courseId].topics?.forEach((course, index) => {
      if (course.id === topicId) {
        newState[courseId].topics?.[index].expected_learning_outcomes.push(learningOutcome);
      } else {
        course.sub_topics.forEach((subTopic: any, subIndex: number) => {
          if (subTopic.id === topicId) {
            newState[courseId].topics?.[index].sub_topics?.[subIndex].expected_learning_outcomes.push(learningOutcome);
          }
        });
      }
    });
    return {
      ...newState
    };
  })
);

export const reducer = (state: State | undefined, action: Action) => coursesReducer(state, action);
