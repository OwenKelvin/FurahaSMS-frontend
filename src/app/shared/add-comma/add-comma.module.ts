import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddCommaDirective } from './add-comma.directive';
import { ReactiveComponentModule } from '@ngrx/component';



@NgModule({
  declarations: [AddCommaDirective],
  exports: [AddCommaDirective],
  imports: [
    CommonModule,
    ReactiveComponentModule
  ]
})
export class AddCommaModule { }
