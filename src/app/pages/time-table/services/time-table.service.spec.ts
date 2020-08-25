import { TestBed } from '@angular/core/testing';

import { TimeTableService } from './time-table.service';
import {HttpClientTestingModule} from '@angular/common/http/testing';

describe('TimeTableService', () => {
  let service: TimeTableService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(TimeTableService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
