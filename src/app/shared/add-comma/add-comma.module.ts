import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddCommaDirective } from './add-comma.directive';



@NgModule({
  declarations: [AddCommaDirective],
  exports: [AddCommaDirective],
  imports: [
    CommonModule
  ]
})
export class AddCommaModule { }
