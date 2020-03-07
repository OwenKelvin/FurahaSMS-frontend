import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateStudyMaterialComponent } from './create-study-material.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AppCheckboxModule } from 'src/app/shared/checkbox/checkbox.module';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { PdfViewerModule } from 'ng2-pdf-viewer';

describe('CreateStudyMaterialComponent', () => {
  let component: CreateStudyMaterialComponent;
  let fixture: ComponentFixture<CreateStudyMaterialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule,
        FormsModule,
        AppCheckboxModule,
        HttpClientTestingModule,
        PdfViewerModule
      ],
      declarations: [ CreateStudyMaterialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateStudyMaterialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
