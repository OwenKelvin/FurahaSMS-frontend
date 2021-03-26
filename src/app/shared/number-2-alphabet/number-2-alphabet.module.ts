import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Number2AlphabetPipe } from './number-2-alphabet.pipe';
import { ReactiveComponentModule } from '@ngrx/component';


@NgModule({
  declarations: [Number2AlphabetPipe],
  imports: [
    CommonModule,
    ReactiveComponentModule
  ],
  exports: [Number2AlphabetPipe]
})
export class Number2AlphabetModule { }
