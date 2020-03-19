import { TestBed } from '@angular/core/testing';

import { LinkService } from './link.service';

describe('LinkService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LinkService = TestBed.inject(LinkService);
    expect(service).toBeTruthy();
  });
});
