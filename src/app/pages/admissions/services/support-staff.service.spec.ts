import { TestBed } from '@angular/core/testing';

import { SupportStaffService } from './support-staff.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('SupportStaffService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      HttpClientTestingModule
    ]
  }));

  it('should be created', () => {
    const service: SupportStaffService = TestBed.inject(SupportStaffService);
    expect(service).toBeTruthy();
  });
});
