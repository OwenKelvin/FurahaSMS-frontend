import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {UserPasswordResetComponent} from './user-password-reset.component';
import {ErrorModule} from 'src/app/components/error/error.module';

@NgModule({
  declarations: [
    UserPasswordResetComponent
  ],
  imports: [
    CommonModule,
    ErrorModule,

  ]
})
export class UserPasswordResetModule {
}
