import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrintComponent } from './components/print/print.component';



@NgModule({
  declarations: [PrintComponent],
  exports: [PrintComponent],
  imports: [
    CommonModule
  ]
})
export class AppPrintModule { }
