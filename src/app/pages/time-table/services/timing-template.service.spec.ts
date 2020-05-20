import { TestBed } from '@angular/core/testing';

import { TimingTemplateService } from './timing-template.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('TimingTemplateService', () => {
  let service: TimingTemplateService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ]
    });
    service = TestBed.inject(TimingTemplateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
