import { TestBed } from '@angular/core/testing';

import { SemesterService } from './semester.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('SemesterService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule]
  }));

  it('should be created', () => {
    const service: SemesterService = TestBed.inject(SemesterService);
    expect(service).toBeTruthy();
  });
});
