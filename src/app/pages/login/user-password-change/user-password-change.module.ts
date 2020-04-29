import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserPasswordChangeComponent } from './user-password-change.component';
import { PasswordChangeFormModule } from '../password-change-form/password-change-form.module';



@NgModule({
  declarations: [UserPasswordChangeComponent],
  imports: [
    CommonModule,
    PasswordChangeFormModule,
  ]
})
export class UserPasswordChangeModule { }
