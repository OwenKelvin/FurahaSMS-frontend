import { TestBed } from '@angular/core/testing';

import { TeacherService } from './teacher.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('TeacherService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule]
  }));

  it('should be created', () => {
    const service: TeacherService = TestBed.inject(TeacherService);
    expect(service).toBeTruthy();
  });
});
