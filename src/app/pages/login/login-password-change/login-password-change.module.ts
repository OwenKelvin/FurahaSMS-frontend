import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {LoginPasswordChangeRoutingModule} from './login-password-change-routing.module';
import {LoginPasswordChangeComponent} from './login-password-change.component';
import {ErrorModule} from 'src/app/components/error/error.module';
import {AppLayoutModule} from 'src/app/modules/app-layout.module';
import {PasswordChangeFormModule} from '../password-change-form/password-change-form.module';
import { ReactiveComponentModule } from '@ngrx/component';

@NgModule({
  declarations: [LoginPasswordChangeComponent],
  imports: [
    CommonModule,
    LoginPasswordChangeRoutingModule,
    ErrorModule,
    AppLayoutModule,
    PasswordChangeFormModule,
    ReactiveComponentModule
  ]
})
export class LoginPasswordChangeModule {
}
