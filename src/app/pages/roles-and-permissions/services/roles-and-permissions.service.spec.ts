import { TestBed } from '@angular/core/testing';

import { RolesAndPermissionsService } from './roles-and-permissions.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('RolesAndPermissionsService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      HttpClientTestingModule
    ]
  }));

  it('should be created', () => {
    const service: RolesAndPermissionsService = TestBed.inject(RolesAndPermissionsService);
    expect(service).toBeTruthy();
  });
});
