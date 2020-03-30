import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable, of } from 'rxjs';

import { AcademicYearPlanEffects } from './academic-year-plan.effects';

describe('AcademicYearPlanEffects', () => {
  const actions$: Observable<any> = of('Load');
  let effects: AcademicYearPlanEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        AcademicYearPlanEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.inject<AcademicYearPlanEffects>(AcademicYearPlanEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
