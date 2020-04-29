import { NgModule } from '@angular/core';
import { InputComponent } from 'src/app/components/input/input.component';
import { SelectComponent } from 'src/app/components/select/select.component';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ValidateSubmitButtonsComponent } from '../components/validate-submit-buttons/validate-submit-buttons.component';
import { PasswordMeterModule } from '../pages/login/password-meter/password-meter.module';


@NgModule({
  declarations: [
    InputComponent,
    SelectComponent,
    ValidateSubmitButtonsComponent
  ],
  exports: [
    InputComponent,
    SelectComponent,
    ValidateSubmitButtonsComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    PasswordMeterModule
  ]
})
export class AppInputModule { }
