import { TestBed } from '@angular/core/testing';

import { FinancialPlanService } from './financial-plan.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('FinancialPlanService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule]
  }));

  it('should be created', () => {
    const service: FinancialPlanService = TestBed.inject(FinancialPlanService);
    expect(service).toBeTruthy();
  });
});
