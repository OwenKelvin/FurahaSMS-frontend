import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  LabelStarRequiredComponent,
  StarRequiredComponent
} from './label-star-required.component';
import { ReactiveComponentModule } from '@ngrx/component';


@NgModule({
  declarations: [
    LabelStarRequiredComponent,
    StarRequiredComponent
  ],
  exports: [
    LabelStarRequiredComponent,
    StarRequiredComponent
  ],

  imports: [
    CommonModule,
    ReactiveComponentModule,
  ]
})
export class AppStarLabelRequiredModule { }
