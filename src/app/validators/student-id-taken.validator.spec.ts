import { TestBed, async, inject } from '@angular/core/testing';

import { IdNumberValidator } from './student-id-taken.validator';
import { StudentService } from '../services/student.service';
import { FormControl } from '@angular/forms';
import { of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

describe('IdNumberValidator', () => {

  const studentService: StudentService = new StudentService(jasmine.createSpyObj({get: 1 }));
  beforeEach(() => TestBed.configureTestingModule({
    imports: [],
    providers: [{
      provide: StudentService,
      useValue: studentService
    }]
  }));

  it('should be created', () => {
    const service: IdNumberValidator = TestBed.inject(IdNumberValidator);
    expect(service).toBeTruthy();
  });
  it('should have function studentIdTaken', () => {
    spyOn(studentService, 'getStudentBySchoolId').and.returnValue(of({ id: 1 }));
    const service: IdNumberValidator = TestBed.inject(IdNumberValidator);
    expect(service.studentIdTaken(new FormControl())).toBeTruthy();
  });
});
