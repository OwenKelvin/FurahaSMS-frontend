import { TestBed } from '@angular/core/testing';

import { AcademicYearUnitService } from './academic-year-unit.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('AcademicYearUnitService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule]
  }));

  it('should be created', () => {
    const service: AcademicYearUnitService = TestBed.inject(AcademicYearUnitService);
    expect(service).toBeTruthy();
  });
});
