import { TestBed } from '@angular/core/testing';

import { StudentAcademicsService } from './student-academics.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('StudentAcademicsService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule]
  }));

  it('should be created', () => {
    const service: StudentAcademicsService = TestBed.inject(StudentAcademicsService);
    expect(service).toBeTruthy();
  });
});
