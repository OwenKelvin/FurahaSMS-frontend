import * as fromStudentFeeStatement from './student-fee-statement.actions';

describe('loadStudentFeeStatements', () => {
  it('should return an action', () => {
    expect(fromStudentFeeStatement.loadStudentFeeStatements({ data: { id: 1 } }).type)
      .toBe('[StudentFeeStatement] Load StudentFeeStatements');
  });
});
