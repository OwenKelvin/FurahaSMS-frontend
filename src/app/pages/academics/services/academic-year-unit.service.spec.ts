import { TestBed } from '@angular/core/testing';

import { AcademicYearUnitService } from './academic-year-unit.service';
import { HttpClient } from '@angular/common/http';

describe('AcademicYearUnitService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClient]
  }));

  it('should be created', () => {
    const service: AcademicYearUnitService = TestBed.get(AcademicYearUnitService);
    expect(service).toBeTruthy();
  });
});
