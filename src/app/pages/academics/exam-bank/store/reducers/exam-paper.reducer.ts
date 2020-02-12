import { Action, createReducer, on } from '@ngrx/store';
import * as ExamPaperActions from '../actions/exam-paper.actions';

export const examPaperFeatureKey = 'examPaper';

export interface State {
  examPapers: {
    [key: number]: {
      name: string,
      instructions: any[]
     }
   }
}

export const initialState: State = {
  examPapers: {
    0: {
      name: '',
      instructions: []
     }
   }
};

const examPaperReducer = createReducer(
  initialState,

  on(ExamPaperActions.loadExamPapers, state => state),
  on(ExamPaperActions.loadExamPapersSuccess, (state, action) => state),
  on(ExamPaperActions.loadExamPapersFailure, (state, action) => state),

);

export function reducer(state: State | undefined, action: Action) {
  return examPaperReducer(state, action);
}
