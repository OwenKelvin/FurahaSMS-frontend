import * as fromAdmissions from '../reducers';
import { selectAdmissionsState } from './admissions.selectors';

describe('Admissions Selectors', () => {
  it('should select the feature state', () => {
    const result = selectAdmissionsState({
      [fromAdmissions.admissionsFeatureKey]: {}
    });

    expect(result).toEqual({});
  });
});
