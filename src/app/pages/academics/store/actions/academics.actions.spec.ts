import * as fromAcademics from './academics.actions';

describe('loadAcademics', () => {
  it('should return an action', () => {
    expect(fromAcademics.loadAcademics().type).toBe('[Academics] Load Academics');
  });
});
