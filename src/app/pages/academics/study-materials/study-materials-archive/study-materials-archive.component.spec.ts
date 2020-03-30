import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudyMaterialsArchiveComponent } from './study-materials-archive.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppLoadingBubbleModule } from 'src/app/modules/app-loading-bubble';
import { FormsModule } from '@angular/forms';

describe('StudyMaterialsArchiveComponent', () => {
  let component: StudyMaterialsArchiveComponent;
  let fixture: ComponentFixture<StudyMaterialsArchiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        RouterTestingModule,
        AppLoadingBubbleModule,
        FormsModule
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
