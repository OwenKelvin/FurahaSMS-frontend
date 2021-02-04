import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DurationPipe } from './duration.pipe';



@NgModule({
  declarations: [DurationPipe],
  exports: [
    DurationPipe
  ],
  imports: [
    CommonModule
  ]
})
export class DurationModule { }
