import { async, ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import {LoginPasswordChangeComponent} from './login-password-change.component';
import {ErrorModule} from 'src/app/components/error/error.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {StoreModule} from '@ngrx/store';
import {metaReducers, REDUCER_TOKEN, reducerProvider} from 'src/app/store/reducers';
import {AppInputModule} from 'src/app/components/input/app-input.module';
import {AppLayoutModule} from 'src/app/modules/app-layout.module';
import {PasswordChangeFormModule} from '../password-change-form/password-change-form.module';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {RouterTestingModule} from '@angular/router/testing';
import {EffectsModule} from '@ngrx/effects';

describe('LoginPasswordChangeComponent', () => {
  let component: LoginPasswordChangeComponent;
  let fixture: ComponentFixture<LoginPasswordChangeComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        ErrorModule,
        FormsModule,
        ReactiveFormsModule,
        StoreModule.forRoot(REDUCER_TOKEN, {
          metaReducers,
          runtimeChecks: {
            strictStateImmutability: true,
            strictActionImmutability: true,
          }
        }),
        EffectsModule.forRoot([]),
        AppInputModule,
        AppLayoutModule,
        PasswordChangeFormModule,
        HttpClientTestingModule,
        RouterTestingModule
      ],
      declarations: [LoginPasswordChangeComponent],
      providers: [
        reducerProvider
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginPasswordChangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
