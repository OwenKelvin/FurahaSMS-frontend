import * as fromAcademicYearPlan from '../reducers/academic-year-plan.reducer';
import { selectAcademicYearPlanState } from './academic-year-plan.selectors';

describe('AcademicYearPlan Selectors', () => {
  it('should select the feature state', () => {
    const result = selectAcademicYearPlanState({
      [fromAcademicYearPlan.academicYearPlanFeatureKey]: {
        0: {
          academicYear: {
            id: 0
          },
          financialYearPlan: []
        }
      }
    });

    expect(result).toEqual({
      0: {
        academicYear: {
          id: 0
        },
        financialYearPlan: []
      }
    });
  });
});
