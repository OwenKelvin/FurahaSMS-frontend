import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TelInputComponent } from '../components/tel-input/tel-input.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';


@NgModule({
  declarations: [
    TelInputComponent
  ],
  exports: [
    TelInputComponent
  ],

  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgSelectModule
  ]
})
export class AppTelInputModule { }
