import { createAction, props } from '@ngrx/store';

export const loadExamPapers = createAction(
  '[ExamPaper] Load ExamPapers', props<{ id: number }>()
);

export const loadExamPapersSuccess = createAction(
  '[ExamPaper] Load ExamPapers Success',
  props<{ data: any }>()
);

export const loadExamPapersFailure = createAction(
  '[ExamPaper] Load ExamPapers Failure',
  props<{ error: any }>()
);
