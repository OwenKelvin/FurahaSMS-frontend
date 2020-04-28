import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PasswordChangeFormComponent } from './password-change-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppInputModule } from 'src/app/modules/app-input.module';
import { RouterModule } from '@angular/router';
import { PasswordMeterModule } from '../password-meter/password-meter.module';

@NgModule({
  declarations: [
    PasswordChangeFormComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AppInputModule,
    RouterModule,
    PasswordMeterModule
  ],
  exports: [PasswordChangeFormComponent]
})
export class PasswordChangeFormModule { }
