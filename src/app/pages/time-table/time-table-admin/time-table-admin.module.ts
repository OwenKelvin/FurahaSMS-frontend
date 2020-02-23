import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TimeTableAdminRoutingModule } from './time-table-admin-routing.module';
import { TimeTableAdminComponent } from './time-table-admin.component';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { TimeTableTimingsComponent } from './time-table-timings/time-table-timings.component';


@NgModule({
  declarations: [TimeTableAdminComponent, TimeTableTimingsComponent],
  imports: [
    CommonModule,
    TimeTableAdminRoutingModule,
    TabsModule.forRoot()
  ]
})
export class TimeTableAdminModule { }
