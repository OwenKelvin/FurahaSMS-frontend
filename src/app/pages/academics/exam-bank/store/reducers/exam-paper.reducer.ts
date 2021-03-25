import { Action, createReducer, on } from '@ngrx/store';
import * as ExamPaperActions from '../actions/exam-paper.actions';

export const examPaperFeatureKey = 'examPaper';

export interface State {
  examPapers: {
    [key: number]: {
      id: 0;
      name: string;
      instructions: any[];
      questions: any[];
      tags: any[];
     };
   };
}

export const initialState: State = {
  examPapers: {
    0: {
      id: 0,
      name: '',
      instructions: [],
      questions: [],
      tags: []
     }
   }
};

const examPaperReducer = createReducer(
  initialState,

  on(ExamPaperActions.loadExamPapers, state => state),
  on(ExamPaperActions.loadExamPapersSuccess, (state, action) => ({
      ...state,
      examPapers: {
        ...state.examPapers,
        [action.data.id]: action.data
      }
    })),
  on(ExamPaperActions.loadExamPapersFailure, (state, _action) => state),

);

export const reducer = (state: State | undefined, action: Action) => examPaperReducer(state, action);
