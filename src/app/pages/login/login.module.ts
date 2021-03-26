import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {LoginRoutingModule} from './login-routing.module';
import {LoginComponent} from './login.component';
import {LoginContactAdminComponent} from './login-contact-admin/login-contact-admin.component';
import {LoginResetComponent} from './login-reset/login-reset.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AppInputModule} from 'src/app/components/input/app-input.module';
import {AppLayoutModule} from 'src/app/modules/app-layout.module';
import {ErrorModule} from 'src/app/components/error/error.module';
import { ReactiveComponentModule } from '@ngrx/component';


@NgModule({
  declarations: [
    LoginComponent,
    LoginContactAdminComponent,
    LoginResetComponent,
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    LoginRoutingModule,
    AppInputModule,
    AppLayoutModule,
    ErrorModule,
    ReactiveComponentModule

  ],
  exports: []
})
export class LoginModule {
}
