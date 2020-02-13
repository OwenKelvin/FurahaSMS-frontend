import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromExamPaper from '../reducers/exam-paper.reducer';

export const selectExamPaperState = createFeatureSelector<fromExamPaper.State>(
  fromExamPaper.examPaperFeatureKey
);

export const selectExamPapersState = createSelector(
  selectExamPaperState,
  examPaper => examPaper.examPapers
);

export const selectExamPaperItemState = (id) => createSelector(
  selectExamPapersState,
  examPaper => examPaper[id]
);

