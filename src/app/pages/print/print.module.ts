import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {PrintRoutingModule} from './print-routing.module';
import { ReactiveComponentModule } from '@ngrx/component';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    PrintRoutingModule,
    ReactiveComponentModule
  ]
})
export class PrintModule {
}
