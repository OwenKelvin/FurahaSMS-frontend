import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChipsComponent } from '../components/chips/chips.component';


@NgModule({
  declarations: [
    ChipsComponent
  ],
  exports: [
    ChipsComponent
  ],

  imports: [
    CommonModule,
  ]
})
export class AppChipsModule { }
