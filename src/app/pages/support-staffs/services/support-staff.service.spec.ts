import { TestBed } from '@angular/core/testing';

import { SupportStaffService } from './support-staff.service';

describe('SupportStaffService', () => {
  let service: SupportStaffService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SupportStaffService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
