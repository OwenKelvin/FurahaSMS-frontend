import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginPasswordChangeRoutingModule } from './login-password-change-routing.module';
import { LoginPasswordChangeComponent } from './login-password-change.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppInputModule } from 'src/app/modules/app-input.module';
import { ErrorModule } from 'src/app/components/error/error.module';
import { AppLayoutModule } from 'src/app/modules/app-layout.module';


@NgModule({
  declarations: [LoginPasswordChangeComponent],
  imports: [
    CommonModule,
    LoginPasswordChangeRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AppInputModule,
    ErrorModule,
    AppLayoutModule
  ]
})
export class LoginPasswordChangeModule { }
