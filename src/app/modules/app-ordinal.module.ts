import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrdinalPipe } from '../pipes/ordinal.pipe';
import { ReactiveComponentModule } from '@ngrx/component';


@NgModule({
  declarations: [
    OrdinalPipe
  ],
  exports: [
    OrdinalPipe
  ],

  imports: [
    CommonModule,
    ReactiveComponentModule,
  ]
})
export class AppOrdinalModule { }
