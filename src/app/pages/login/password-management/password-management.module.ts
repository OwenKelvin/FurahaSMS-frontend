import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PasswordManagementRoutingModule } from './password-management-routing.module';
import { PasswordManagementComponent } from './password-management.component';
import { PasswordChangeFormModule } from '../password-change-form/password-change-form.module';
import { UserPasswordResetModule } from '../user-password-reset/user-password-reset.module';


@NgModule({
  declarations: [PasswordManagementComponent],
  imports: [
    CommonModule,
    PasswordManagementRoutingModule,
    PasswordChangeFormModule,
    UserPasswordResetModule
  ]
})
export class PasswordManagementModule { }
