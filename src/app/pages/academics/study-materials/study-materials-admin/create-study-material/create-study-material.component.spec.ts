import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateStudyMaterialComponent } from './create-study-material.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AppCheckboxModule } from 'src/app/shared/checkbox/checkbox.module';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { StoreModule } from '@ngrx/store';
import { REDUCER_TOKEN, reducerProvider, metaReducers } from 'src/app/store/reducers';
import { AppInputModule } from 'src/app/modules/app-input.module';
import { AddStudyMaterialsTitleModule } from '../add-study-materials-title/add-study-materials-title.module';

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
        PdfViewerModule,
        AppInputModule,
        StoreModule.forRoot(REDUCER_TOKEN, {
          metaReducers,
          runtimeChecks: {
            strictStateImmutability: true,
            strictActionImmutability: true,
          }
        }),
        AddStudyMaterialsTitleModule
      ],
      declarations: [CreateStudyMaterialComponent],
      providers: [reducerProvider]
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
