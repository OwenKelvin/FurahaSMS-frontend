import { NgModule } from '@angular/core';
import { ValidateSubmitButtonsComponent } from './validate-submit-buttons.component';
import { CommonModule } from '@angular/common';
import {FormErrorsModule} from '../../shared/form-errors/form-errors.module';


@NgModule({
    imports: [
        CommonModule,
        FormErrorsModule
    ],
  declarations: [ValidateSubmitButtonsComponent],
  exports: [ValidateSubmitButtonsComponent]

})

export class AppValidateSubmitButtonsModule { }
