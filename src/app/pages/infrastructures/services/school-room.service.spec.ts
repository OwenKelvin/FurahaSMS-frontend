import { TestBed } from '@angular/core/testing';

import { SchoolRoomService } from './school-room.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('SchoolRoomService', () => {
  let service: SchoolRoomService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(SchoolRoomService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
