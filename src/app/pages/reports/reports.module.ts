import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReportsRoutingModule } from './reports-routing.module';
import { AppLayoutModule } from 'src/app/modules/app-layout.module';
import { ReportsComponent } from './reports.component';
import { ReactiveComponentModule } from '@ngrx/component';


@NgModule({
  declarations: [ReportsComponent],
  imports: [
    CommonModule,
    ReportsRoutingModule,
    AppLayoutModule,
    ReactiveComponentModule
  ]
})
export class ReportsModule { }
