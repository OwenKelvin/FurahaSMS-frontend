import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormErrorsComponent } from './components/form-errors/form-errors.component';



@NgModule({
    declarations: [FormErrorsComponent],
    exports: [
        FormErrorsComponent
    ],
    imports: [
        CommonModule
    ]
})
export class FormErrorsModule { }
