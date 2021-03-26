import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CheckboxComponent } from './checkbox.component';
import { FormsModule } from '@angular/forms';
import { ReactiveComponentModule } from '@ngrx/component';



@NgModule({
  declarations: [CheckboxComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveComponentModule
  ],
  exports: [CheckboxComponent]
})
export class AppCheckboxModule { }
