import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChipsComponent } from '../components/chips/chips.component';
import { ReactiveComponentModule } from '@ngrx/component';


@NgModule({
  declarations: [
    ChipsComponent
  ],
  exports: [
    ChipsComponent
  ],

  imports: [
    CommonModule,
    ReactiveComponentModule,
  ]
})
export class AppChipsModule { }
