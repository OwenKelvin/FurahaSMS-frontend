import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { LoginContactAdminComponent } from './login-contact-admin.component';
import { InputComponent } from './../input/input.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FullWithCenterComponent } from '../full-with-center/full-with-center.component';
import { By } from '@angular/platform-browser';

describe('LoginContactAdminComponent', () => {
  let component: LoginContactAdminComponent;
  let fixture: ComponentFixture<LoginContactAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule, ReactiveFormsModule, HttpClientTestingModule],
      declarations: [ LoginContactAdminComponent, FullWithCenterComponent, InputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginContactAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have as function submitLoginContactAdminForm', () => {
    const inputElement = fixture.debugElement.query(By.css('input'));
    const formElement = fixture.debugElement.query(By.css('form'));
    formElement.triggerEventHandler('submit', null);
    fixture.detectChanges();
    component.submitLoginContactAdminForm();
    expect(component).toBeTruthy();
    component.loginContactAdminForm.get('email').setValue('admin@admin.com');
    fixture.detectChanges();
    component.submitLoginContactAdminForm();
  });
});
