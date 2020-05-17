import { NgModule } from '@angular/core';
import { ValidateSubmitButtonsComponent } from './validate-submit-buttons.component';
import { CommonModule } from '@angular/common';


@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ValidateSubmitButtonsComponent],
  exports: [ValidateSubmitButtonsComponent]

})

export class AppValidateSubmitButtonsModule { };