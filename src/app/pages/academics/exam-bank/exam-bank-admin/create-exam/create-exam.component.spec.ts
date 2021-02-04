import { async, ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { CreateExamComponent } from './create-exam.component';
import { AppInputModule } from 'src/app/components/input/app-input.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { AppLoadingBubbleModule } from 'src/app/modules/app-loading-bubble';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { StoreModule } from '@ngrx/store';
import { REDUCER_TOKEN, metaReducers, reducerProvider } from 'src/app/store/reducers';
import { AppValidateSubmitButtonsModule } from 'src/app/components/validate-submit-buttons/validate-submit-buttons.module';
import {FormErrorsModule} from '../../../../../shared/form-errors/form-errors.module';

describe('CreateExamComponent', () => {
  let component: CreateExamComponent;
  let fixture: ComponentFixture<CreateExamComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        AppInputModule,
        FormsModule,
        ReactiveFormsModule,
        RouterTestingModule,
        AppLoadingBubbleModule,
        HttpClientTestingModule,
        StoreModule.forRoot(REDUCER_TOKEN, {
          metaReducers,
          runtimeChecks: {
            strictStateImmutability: true,
            strictActionImmutability: true,
          }
        }),
        FormErrorsModule,
        AppValidateSubmitButtonsModule
      ],
      declarations: [CreateExamComponent],
      providers: [reducerProvider]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateExamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
