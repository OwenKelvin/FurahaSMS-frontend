import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateAcademicYearComponent } from './create-academic-year.component';
import { Store, StoreModule } from '@ngrx/store';
import { AppState, REDUCER_TOKEN, metaReducers, reducerProvider } from 'src/app/store/reducers';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AcademicsModule } from '../../academics.module';
import { AppInputModule } from 'src/app/components/input/app-input.module';
import { ErrorModule } from 'src/app/components/error/error.module';
import { EffectsModule } from '@ngrx/effects';
import { AppValidateSubmitButtonsModule } from 'src/app/components/validate-submit-buttons/validate-submit-buttons.module';
import {FormErrorsModule} from '../../../../shared/form-errors/form-errors.module';

describe('CreateAcademicYearComponent', () => {
  let component: CreateAcademicYearComponent;
  let fixture: ComponentFixture<CreateAcademicYearComponent>;
  let store: Store<AppState>;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      imports: [
        AcademicsModule,
        AppInputModule,
        StoreModule.forRoot(REDUCER_TOKEN, {
          metaReducers,
          runtimeChecks: {
            strictStateImmutability: true,
            strictActionImmutability: true,
          }
        }),
        EffectsModule.forRoot([]),
        FormsModule,
        ReactiveFormsModule,
        HttpClientTestingModule,
        RouterTestingModule,
        ErrorModule,
        AppValidateSubmitButtonsModule,
        FormErrorsModule
      ],
      declarations: [CreateAcademicYearComponent],
      providers: [reducerProvider]
    });

    await TestBed.compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateAcademicYearComponent);
    component = fixture.componentInstance;
    store = TestBed.inject<Store<AppState>>(Store);

    spyOn(store, 'dispatch').and.callThrough();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
