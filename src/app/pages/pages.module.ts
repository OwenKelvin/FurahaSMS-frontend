import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { ReactiveComponentModule } from '@ngrx/component';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    PagesRoutingModule,
    ReactiveComponentModule
  ]
})
export class PagesModule { }
