import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TimeTableAdminRoutingModule } from './time-table-admin-routing.module';
import { TimeTableAdminComponent } from './time-table-admin.component';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { TimeTableTimingsComponent } from './time-table-timings/time-table-timings.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { CreateTimingTemplateComponent } from './create-timing-template/create-timing-template.component';


@NgModule({
  declarations: [TimeTableAdminComponent, TimeTableTimingsComponent, CreateTimingTemplateComponent],
  imports: [
    CommonModule,
    TimeTableAdminRoutingModule,
    TabsModule.forRoot(),
    ModalModule.forRoot()
  ]
})
export class TimeTableAdminModule { }
