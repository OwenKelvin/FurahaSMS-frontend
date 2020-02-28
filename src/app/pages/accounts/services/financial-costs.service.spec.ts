import { TestBed } from '@angular/core/testing';

import { FinancialCostsService } from './financial-costs.service';

describe('FinancialCostsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FinancialCostsService = TestBed.get(FinancialCostsService);
    expect(service).toBeTruthy();
  });
});
