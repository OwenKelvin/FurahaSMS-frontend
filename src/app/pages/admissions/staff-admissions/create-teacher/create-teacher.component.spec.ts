import {ComponentFixture, TestBed, waitForAsync} from '@angular/core/testing';

import {CreateTeacherComponent} from './create-teacher.component';
import {RouterTestingModule} from '@angular/router/testing';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AppInputModule} from 'src/app/components/input/app-input.module';
import {StoreModule} from '@ngrx/store';
import {REDUCER_TOKEN, metaReducers, reducerProvider} from 'src/app/store/reducers';
import {AppTelInputModule} from 'src/app/modules/app-tel-input.module';
import {AppValidateSubmitButtonsModule} from 'src/app/components/validate-submit-buttons/validate-submit-buttons.module';
import {appFeatureKey, reducers as appReducers} from '../../../../store/reducers/app.reducer';
import {admissionsFeatureKey, reducers} from '../../store/reducers';
import {ReactiveComponentModule} from '@ngrx/component';

describe('CreateTeacherComponent', () => {
  let component: CreateTeacherComponent;
  let fixture: ComponentFixture<CreateTeacherComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientTestingModule,
        FormsModule,
        ReactiveFormsModule,
        AppInputModule,
        AppTelInputModule,
        AppValidateSubmitButtonsModule,
        StoreModule.forRoot(REDUCER_TOKEN, {
          metaReducers,
          runtimeChecks: {
            strictStateImmutability: true,
            strictActionImmutability: true,
          }
        }),
        StoreModule.forFeature(appFeatureKey, appReducers),
        StoreModule.forFeature(admissionsFeatureKey, reducers),
        ReactiveComponentModule
      ],
      declarations: [CreateTeacherComponent],
      providers: [reducerProvider]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    spyOn(document, 'querySelector').and.callThrough();
    fixture = TestBed.createComponent(CreateTeacherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
