import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ELearningCourseStudyMaterialComponent } from './e-learning-course-study-material.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { AppLoadingBubbleModule } from 'src/app/modules/app-loading-bubble';
import { StoreModule } from '@ngrx/store';
import { REDUCER_TOKEN, reducerProvider, metaReducers } from 'src/app/store/reducers';
import { RouterTestingModule } from '@angular/router/testing';
import { AppFilesizeModule } from 'src/app/shared/filesize/filesize.module';
import { FileExtentionModule } from 'src/app/shared/file-extention/file-extention.module';

describe('ELearningCourseStudyMaterialComponent', () => {
  let component: ELearningCourseStudyMaterialComponent;
  let fixture: ComponentFixture<ELearningCourseStudyMaterialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        AppLoadingBubbleModule,
        RouterTestingModule,
        StoreModule.forRoot(REDUCER_TOKEN, {
          metaReducers,
          runtimeChecks: {
            strictStateImmutability: true,
            strictActionImmutability: true,
          }
        }),
        AppFilesizeModule,
        FileExtentionModule
      ],
      declarations: [ELearningCourseStudyMaterialComponent],
      providers: [reducerProvider]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ELearningCourseStudyMaterialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});