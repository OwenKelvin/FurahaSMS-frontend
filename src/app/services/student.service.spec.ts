import { TestBed } from '@angular/core/testing';

import { StudentService } from './student.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('StudentService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [ HttpClientTestingModule ]
  }));

  it('should be created', () => {
    const service: StudentService = TestBed.inject(StudentService);
    expect(service).toBeTruthy();
  });
});
