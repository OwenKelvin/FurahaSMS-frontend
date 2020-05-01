import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginPasswordChangeComponent } from './login-password-change.component';
import { ErrorModule } from 'src/app/components/error/error.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { REDUCER_TOKEN, reducerProvider, metaReducers } from 'src/app/store/reducers';
import { AppInputModule } from 'src/app/modules/app-input.module';
import { AppLayoutModule } from 'src/app/modules/app-layout.module';
import { PasswordChangeFormModule } from '../password-change-form/password-change-form.module';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';

describe('LoginPasswordChangeComponent', () => {
  let component: LoginPasswordChangeComponent;
  let fixture: ComponentFixture<LoginPasswordChangeComponent>;

  beforeEach(async(() => {
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
