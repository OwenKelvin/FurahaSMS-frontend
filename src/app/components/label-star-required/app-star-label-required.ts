import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  LabelStarRequiredComponent,
  StarRequiredComponent
} from './label-star-required.component';


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
  ]
})
export class AppStarLabelRequiredModule { }
