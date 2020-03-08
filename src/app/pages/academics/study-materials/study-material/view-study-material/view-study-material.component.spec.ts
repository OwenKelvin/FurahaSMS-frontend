import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewStudyMaterialComponent } from './view-study-material.component';
import { RouterTestingModule } from '@angular/router/testing';
import { PdfViewerModule } from 'ng2-pdf-viewer';

describe('ViewStudyMaterialComponent', () => {
  let component: ViewStudyMaterialComponent;
  let fixture: ComponentFixture<ViewStudyMaterialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        PdfViewerModule
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
