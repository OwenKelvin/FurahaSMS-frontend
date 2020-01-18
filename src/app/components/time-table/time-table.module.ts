import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TimeTableRoutingModule } from './time-table-routing.module';
import { TimeTableComponent } from './time-table.component';
import { AppLayoutModule } from 'src/app/modules/app-layout.module';


@NgModule({
  declarations: [TimeTableComponent],
  imports: [
    CommonModule,
    TimeTableRoutingModule,
    AppLayoutModule
  ]
})
export class TimeTableModule { }
