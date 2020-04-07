import { createAction, props } from '@ngrx/store';

export const loadStudentFeeStatements = createAction(
  '[StudentFeeStatement] Load StudentFeeStatements',
  props<{ data: {id: any}; }>()
);

export const loadStudentFeeStatementsSuccess = createAction(
  '[StudentFeeStatement] Load StudentFeeStatements Success',
  props<{ data: {studentId: number, statementDetails: any } }>()
);

export const loadStudentFeeStatementsFailure = createAction(
  '[StudentFeeStatement] Load StudentFeeStatements Failure',
  props<{ error: any }>()
);
