import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {LoginTokenRoutingModule} from './login-token-routing.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AppLayoutModule} from 'src/app/modules/app-layout.module';
import {ErrorModule} from 'src/app/components/error/error.module';
import {LoginTokenComponent} from './login-token.component';
import { ReactiveComponentModule } from '@ngrx/component';


@NgModule({
  declarations: [LoginTokenComponent],
  imports: [
    CommonModule,
    LoginTokenRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AppLayoutModule,
    ErrorModule,
    ReactiveComponentModule

  ]
})
export class LoginTokenModule {
}
