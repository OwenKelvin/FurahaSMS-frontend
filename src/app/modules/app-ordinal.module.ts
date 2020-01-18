import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrdinalPipe } from '../pipes/ordinal.pipe';


@NgModule({
  declarations: [
    OrdinalPipe
  ],
  exports: [
    OrdinalPipe
  ],

  imports: [
    CommonModule,
  ]
})
export class AppOrdinalModule { }
