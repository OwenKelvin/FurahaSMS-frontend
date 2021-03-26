import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DurationPipe } from './duration.pipe';
import { ReactiveComponentModule } from '@ngrx/component';



@NgModule({
  declarations: [DurationPipe],
  exports: [
    DurationPipe
  ],
  imports: [
    CommonModule,
    ReactiveComponentModule
  ]
})
export class DurationModule { }
