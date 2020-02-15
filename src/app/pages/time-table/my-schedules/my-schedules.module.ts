import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MySchedulesRoutingModule } from './my-schedules-routing.module';
import { MySchedulesComponent } from './my-schedules.component';


@NgModule({
  declarations: [MySchedulesComponent],
  imports: [
    CommonModule,
    MySchedulesRoutingModule
  ]
})
export class MySchedulesModule { }
