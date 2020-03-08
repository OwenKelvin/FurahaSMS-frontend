import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudyMaterialsArchiveComponent } from './study-materials-archive.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';

describe('StudyMaterialsArchiveComponent', () => {
  let component: StudyMaterialsArchiveComponent;
  let fixture: ComponentFixture<StudyMaterialsArchiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        RouterTestingModule
      ],
      declarations: [ StudyMaterialsArchiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudyMaterialsArchiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});