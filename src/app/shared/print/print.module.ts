import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrintComponent } from './components/print/print.component';
import { ReactiveComponentModule } from '@ngrx/component';



@NgModule({
  declarations: [PrintComponent],
  exports: [PrintComponent],
  imports: [
    CommonModule,
    ReactiveComponentModule
  ]
})
export class AppPrintModule { }
