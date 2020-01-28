import { TestBed } from '@angular/core/testing';

import { AcademicYearUnitService } from './academic-year-unit.service';

describe('AcademicYearUnitService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AcademicYearUnitService = TestBed.get(AcademicYearUnitService);
    expect(service).toBeTruthy();
  });
});
