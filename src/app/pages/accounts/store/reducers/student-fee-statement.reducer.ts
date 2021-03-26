import { Action, createReducer, on } from '@ngrx/store';

import * as fromStudentFeeStatementActions from './../actions/student-fee-statement.actions';


export const studentFeeStatementFeatureKey = 'studentFeeStatements';

export interface State {
  [id: number]: any;
}

export const initialState: State = {

};

const studentFeeStatementReducer = createReducer(
  initialState,
  on(fromStudentFeeStatementActions.loadStudentFeeStatements, (state => state)),
  on(fromStudentFeeStatementActions.loadStudentFeeStatementsSuccess, ((state, action) => ({
    ...state, [action.data.studentId]: action.data.statementDetails
  }))),
  on(fromStudentFeeStatementActions.loadStudentFeeStatementsFailure, (state => state)),


  on(fromStudentFeeStatementActions.loadNewPaymentReceiptSuccess, ((state, action) => ({
    ...state, [action.data.studentId]: {
      ...state[action.data.studentId],
      payments: [...state[action.data.studentId].payments, action.data.newPayment ]
    }
  }))),



);

export const reducer = (state: State | undefined, action: Action) => studentFeeStatementReducer(state, action);
