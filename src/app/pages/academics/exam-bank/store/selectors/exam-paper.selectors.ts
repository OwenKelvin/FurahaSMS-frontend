import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromExamPaper from '../reducers/exam-paper.reducer';

export const selectExamPaperState = createFeatureSelector<fromExamPaper.State>(
  fromExamPaper.examPaperFeatureKey
);

export const selectExamPapersState = createSelector(
  selectExamPaperState,
  examPaper => {
    if (examPaper) {
      return examPaper.examPapers;
    }
    return [];
  }
);

export const selectExamPaperItemState = (id: any) => createSelector(
  selectExamPapersState,
  examPaper => examPaper[id]
);

