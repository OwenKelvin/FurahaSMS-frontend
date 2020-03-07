import { TestBed } from '@angular/core/testing';

import { StudyMaterialsService } from './study-materials.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('StudyMaterialsService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      HttpClientTestingModule
    ]
  }));

  it('should be created', () => {
    const service: StudyMaterialsService = TestBed.get(StudyMaterialsService);
    expect(service).toBeTruthy();
  });
});
