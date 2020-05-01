import { createFeatureSelector, createSelector } from '@ngrx/store';
import { selectAccountState } from './account.selectors';
import { studentFeeStatementFeatureKey } from '../reducers/student-fee-statement.reducer';

export const selectStudentsFeeStatements = createSelector(
  selectAccountState,
  accounts => accounts
)
export const selectStudentFeeStatement = (id: number) => createSelector(
  selectStudentsFeeStatements,
  accounts => {
    return accounts ? accounts[studentFeeStatementFeatureKey][id] : {}
  }
)