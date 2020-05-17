import { NgModule } from '@angular/core';
import { InputComponent } from 'src/app/components/input/input.component';
import { SelectComponent } from 'src/app/components/select/select.component';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { PasswordMeterModule } from '../../pages/login/password-meter/password-meter.module';
import { ShowPasswordDirective } from './directives/show-password.directive';


@NgModule({
  declarations: [
    InputComponent,
    SelectComponent,
    ShowPasswordDirective,
  ],
  exports: [
    InputComponent,
    SelectComponent,
    ShowPasswordDirective
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    PasswordMeterModule
  ]
})
export class AppInputModule { }
