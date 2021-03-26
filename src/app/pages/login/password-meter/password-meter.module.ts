import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PasswordMeterComponent} from './password-meter.component';
import { ReactiveComponentModule } from '@ngrx/component';


@NgModule({
  declarations: [PasswordMeterComponent],
  exports: [PasswordMeterComponent],
  imports: [
    CommonModule,
    ReactiveComponentModule
  ]
})
export class PasswordMeterModule {
}
