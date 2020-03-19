import { TestBed } from '@angular/core/testing';

import { FinancialCostsService } from './financial-costs.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('FinancialCostsService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      HttpClientTestingModule
    ]
  }));

  it('should be created', () => {
    const service: FinancialCostsService = TestBed.inject(FinancialCostsService);
    expect(service).toBeTruthy();
  });
});
