import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {UserPasswordResetComponent} from './user-password-reset.component';
import {ErrorModule} from 'src/app/components/error/error.module';
import {RouterTestingModule} from '@angular/router/testing';
import { AppInputModule } from 'src/app/components/input/app-input.module';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

describe('UserPasswordResetComponent', () => {
  let component: UserPasswordResetComponent;
  let fixture: ComponentFixture<UserPasswordResetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        ErrorModule,
        RouterTestingModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientTestingModule,
        AppInputModule
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
