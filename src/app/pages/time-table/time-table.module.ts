import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TimeTableRoutingModule } from './time-table-routing.module';
import { TimeTableComponent } from './time-table.component';
import { AppLayoutModule } from 'src/app/modules/app-layout.module';
import { AppLinksModule } from 'src/app/shared/links/links.module';
import { ReactiveComponentModule } from '@ngrx/component';


@NgModule({
  declarations: [TimeTableComponent],
  imports: [
    CommonModule,
    TimeTableRoutingModule,
    AppLayoutModule,
    AppLinksModule,
    ReactiveComponentModule
  ]
})
export class TimeTableModule { }
