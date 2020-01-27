import { TestBed, async } from '@angular/core/testing';

import { AcademicYearService } from './academic-year.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('AcademicYearService', async () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [ HttpClientTestingModule]
  }));

  it('should be created', () => {
    const service: AcademicYearService = TestBed.get(AcademicYearService);
    expect(service).toBeTruthy();
  });
});