import { TestBed } from '@angular/core/testing';

import { StudentAcademicsService } from './student-academics.service';

describe('StudentAcademicsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: StudentAcademicsService = TestBed.get(StudentAcademicsService);
    expect(service).toBeTruthy();
  });
});
