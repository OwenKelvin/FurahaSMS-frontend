import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {UserPasswordResetComponent} from './user-password-reset.component';
import {ErrorModule} from 'src/app/components/error/error.module';
import {AppInputModule} from '../../../components/input/app-input.module';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    UserPasswordResetComponent
  ],
  imports: [
    CommonModule,
    ErrorModule,
    AppInputModule,
    ReactiveFormsModule,

  ]
})
export class UserPasswordResetModule {
}
