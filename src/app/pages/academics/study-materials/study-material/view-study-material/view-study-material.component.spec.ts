import { async, ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ViewStudyMaterialComponent } from './view-study-material.component';
import { RouterTestingModule } from '@angular/router/testing';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { AppLoadingBubbleModule } from 'src/app/modules/app-loading-bubble';
import { AddStudyMaterialsTitleModule } from '../../study-materials-admin/add-study-materials-title/add-study-materials-title.module';

describe('ViewStudyMaterialComponent', () => {
  let component: ViewStudyMaterialComponent;
  let fixture: ComponentFixture<ViewStudyMaterialComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        PdfViewerModule,
        HttpClientTestingModule,
        AppLoadingBubbleModule,
        AddStudyMaterialsTitleModule
      ],
      declarations: [ ViewStudyMaterialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewStudyMaterialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
