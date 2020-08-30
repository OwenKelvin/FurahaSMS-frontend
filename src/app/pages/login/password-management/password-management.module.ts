import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {PasswordManagementRoutingModule} from './password-management-routing.module';
import {PasswordManagementComponent} from './password-management.component';
import {UserPasswordResetModule} from '../user-password-reset/user-password-reset.module';
import {UserPasswordChangeModule} from '../user-password-change/user-password-change.module';
import {RouterModule} from '@angular/router';
import {LoadMyProfileModule} from '../../my-profile/load-my-profile.module';
import {AppLoadingBubbleModule} from 'src/app/modules/app-loading-bubble';


@NgModule({
  declarations: [
    PasswordManagementComponent
  ],
  imports: [
    CommonModule,
    PasswordManagementRoutingModule,
    UserPasswordChangeModule,
    UserPasswordResetModule,
    RouterModule,
    LoadMyProfileModule,
    AppLoadingBubbleModule
  ]
})
export class PasswordManagementModule {
}
