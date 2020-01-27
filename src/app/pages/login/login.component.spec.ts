import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { LoginComponent } from './login.component';
import { InputComponent } from '../../components/input/input.component';
import { FullWithCenterComponent } from '../../components/full-with-center/full-with-center.component';
import { FormsModule, ReactiveFormsModule, FormControl } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { By } from '@angular/platform-browser';
import { Store, StoreModule } from '@ngrx/store';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule,
        ReactiveFormsModule,
        HttpClientTestingModule,
        RouterTestingModule,
        StoreModule.forRoot({})
      ],
      declarations: [LoginComponent, FullWithCenterComponent, InputComponent ]
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
    component.loginForm.get('username').setValue('admin@admin.com');
    component.loginForm.get('password').setValue('password');
    fixture.detectChanges();
    component.submitLoginForm();
  });
});