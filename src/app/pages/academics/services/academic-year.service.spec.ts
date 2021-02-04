import { TestBed, waitForAsync } from '@angular/core/testing';

import { AcademicYearService } from './academic-year.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('AcademicYearService', async () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [ HttpClientTestingModule]
  }));

  it('should be created', () => {
    const service: AcademicYearService = TestBed.inject(AcademicYearService);
    expect(service).toBeTruthy();
  });
});
