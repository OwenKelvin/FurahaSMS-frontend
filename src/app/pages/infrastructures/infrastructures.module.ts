import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InfrastructuresRoutingModule } from './infrastructures-routing.module';
import { ReactiveComponentModule } from '@ngrx/component';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    InfrastructuresRoutingModule,
    ReactiveComponentModule
  ]
})
export class InfrastructuresModule { }
