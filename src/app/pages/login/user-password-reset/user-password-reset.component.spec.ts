import {ComponentFixture, TestBed, waitForAsync} from '@angular/core/testing';

import {UserPasswordResetComponent} from './user-password-reset.component';
import {ErrorModule} from 'src/app/components/error/error.module';
import {RouterTestingModule} from '@angular/router/testing';
import {AppInputModule} from 'src/app/components/input/app-input.module';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ReactiveComponentModule} from '@ngrx/component';

describe('UserPasswordResetComponent', () => {
  let component: UserPasswordResetComponent;
  let fixture: ComponentFixture<UserPasswordResetComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        ErrorModule,
        RouterTestingModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientTestingModule,
        AppInputModule,
        ReactiveComponentModule
      ],
      declarations: [UserPasswordResetComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserPasswordResetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
