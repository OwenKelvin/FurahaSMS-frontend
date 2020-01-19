import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChipsComponent } from '../components/chips/chips.component';
import { LabelStarRequiredComponent } from '../components/label-star-required/label-star-required.component';


@NgModule({
  declarations: [
    LabelStarRequiredComponent
  ],
  exports: [
    LabelStarRequiredComponent
  ],

  imports: [
    CommonModule,
  ]
})
export class AppStarLabelRequiredModule { }
