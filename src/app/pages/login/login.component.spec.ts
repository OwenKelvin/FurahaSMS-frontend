import {ComponentFixture, TestBed, waitForAsync} from '@angular/core/testing';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {LoginComponent} from './login.component';
import {InputComponent} from '../../components/input/input.component';
import {FullWithCenterComponent} from '../../components/full-with-center/full-with-center.component';
import {FormControl, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterTestingModule} from '@angular/router/testing';
import {By} from '@angular/platform-browser';
import {StoreModule} from '@ngrx/store';
import {metaReducers, REDUCER_TOKEN, reducerProvider} from 'src/app/store/reducers';
import {ErrorModule} from 'src/app/components/error/error.module';
import {AppStarLabelRequiredModule} from '../../components/label-star-required/app-star-label-required';
import {ReactiveComponentModule} from '@ngrx/component';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule,
        ReactiveFormsModule,
        HttpClientTestingModule,
        RouterTestingModule,
        StoreModule.forRoot(REDUCER_TOKEN, {
          metaReducers,
          runtimeChecks: {
            strictStateImmutability: true,
            strictActionImmutability: true,
          }
        }),
        ErrorModule,
        AppStarLabelRequiredModule,
        ReactiveComponentModule
      ],
      declarations: [LoginComponent, FullWithCenterComponent, InputComponent],
      providers: [reducerProvider]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have as functions submitLogin', () => {
    component.submitLoginForm();
    expect(component).toBeTruthy();
  });

  it('should have as function submitLoginForm', () => {
    const inputElement = fixture.debugElement.query(By.css('input'));
    const formElement = fixture.debugElement.query(By.css('form'));
    formElement.triggerEventHandler('submit', null);
    fixture.detectChanges();
    component.submitLoginForm();
    expect(component).toBeTruthy();
    (component.loginForm.get('username') as FormControl).setValue('admin@admin.com');
    (component.loginForm.get('password') as FormControl).setValue('password');
    fixture.detectChanges();
    component.submitLoginForm();
  });
});
