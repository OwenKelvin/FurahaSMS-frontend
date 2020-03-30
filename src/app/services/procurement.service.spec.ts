import { TestBed } from '@angular/core/testing';

import { ProcurementService } from './procurement.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('ProcurementService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule]
  }));

  it('should be created', () => {
    const service: ProcurementService = TestBed.inject(ProcurementService);
    expect(service).toBeTruthy();
  });
});
