import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PasswordMeterComponent } from './password-meter.component';



@NgModule({
  declarations: [PasswordMeterComponent],
  exports: [PasswordMeterComponent],
  imports: [
    CommonModule
  ]
})
export class PasswordMeterModule { }
