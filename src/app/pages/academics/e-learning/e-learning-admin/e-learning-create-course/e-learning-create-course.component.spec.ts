import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ELearningCreateCourseComponent } from './e-learning-create-course.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppInputModule } from 'src/app/components/input/app-input.module';
import { EditorModule } from '@tinymce/tinymce-angular';
import { AppLoadingBubbleModule } from 'src/app/modules/app-loading-bubble';
import { ModalModule } from 'ngx-bootstrap/modal';
import { StoreModule } from '@ngrx/store';
import { REDUCER_TOKEN, reducerProvider, metaReducers } from 'src/app/store/reducers';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { AppValidateSubmitButtonsModule } from 'src/app/components/validate-submit-buttons/validate-submit-buttons.module';
import {RouterTestingModule} from '@angular/router/testing';
import {AppStarLabelRequiredModule} from '../../../../../components/label-star-required/app-star-label-required';
import {SortableModule} from 'ngx-bootstrap/sortable';

describe('ELearningCreateCourseComponent', () => {
  let component: ELearningCreateCourseComponent;
  let fixture: ComponentFixture<ELearningCreateCourseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule,
        ReactiveFormsModule,
        AppInputModule,
        EditorModule,
        AppLoadingBubbleModule,
        ModalModule.forRoot(),
        StoreModule.forRoot(REDUCER_TOKEN, {
          metaReducers,
          runtimeChecks: {
            strictStateImmutability: true,
            strictActionImmutability: true,
          }
        }),
        HttpClientTestingModule,
        AppValidateSubmitButtonsModule,
        RouterTestingModule,
        AppStarLabelRequiredModule,
        SortableModule.forRoot()
      ],
      declarations: [ELearningCreateCourseComponent],
      providers: [reducerProvider]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ELearningCreateCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
