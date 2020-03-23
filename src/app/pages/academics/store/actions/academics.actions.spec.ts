import * as fromAcadeemics from './academics.actions';

describe('loadAcadeemicss', () => {
  it('should return an action', () => {
    expect(fromAcadeemics.loadAcademics().type).toBe('[Acadeemics] Load Academics');
  });
});
