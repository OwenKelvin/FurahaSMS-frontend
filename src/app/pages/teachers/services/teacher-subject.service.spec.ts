import { TestBed } from '@angular/core/testing';

import { TeacherSubjectService } from './teacher-subject.service';
import {HttpClientTestingModule} from '@angular/common/http/testing';

describe('TeacherSubjectService', () => {
  let service: TeacherSubjectService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ]
    });
    service = TestBed.inject(TeacherSubjectService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
