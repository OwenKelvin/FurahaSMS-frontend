import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PasswordManagementRoutingModule } from './password-management-routing.module';
import { PasswordManagementComponent } from './password-management.component';
import { PasswordChangeFormModule } from '../password-change-form/password-change-form.module';
import { UserPasswordResetModule } from '../user-password-reset/user-password-reset.module';
import { UserPasswordChangeModule } from '../user-password-change/user-password-change.module';


@NgModule({
  declarations: [PasswordManagementComponent],
  imports: [
    CommonModule,
    PasswordManagementRoutingModule,
    UserPasswordChangeModule,
    UserPasswordResetModule
  ]
})
export class PasswordManagementModule { }
