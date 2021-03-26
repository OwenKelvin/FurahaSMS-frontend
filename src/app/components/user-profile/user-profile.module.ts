import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserProfileComponent } from './user-profile.component';
import { RouterModule } from '@angular/router';
import { NameItemComponent } from './name-item/name-item.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppInputModule } from 'src/app/components/input/app-input.module';
import { ModalModule } from 'ngx-bootstrap/modal';
import { UserSelectItemComponent } from './user-select-item/user-select-item.component';
import { PasswordChangeFormModule } from 'src/app/pages/login/password-change-form/password-change-form.module';
import { ReactiveComponentModule } from '@ngrx/component';



@NgModule({
  declarations: [
    UserProfileComponent, NameItemComponent, UserSelectItemComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    AppInputModule,
    ModalModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    PasswordChangeFormModule,
    ReactiveComponentModule
  ],
  exports: [
    UserProfileComponent,
    UserSelectItemComponent,
    NameItemComponent
  ]
})
export class AppUserProfileModule { }
