import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AcademicsRoutingModule } from './academics-routing.module';
import { AppDashboardLinksModule } from 'src/app/modules/app-dashboard-links';
import { AcademicsComponent } from './academics.component';


@NgModule({
  declarations: [
    AcademicsComponent,
  ],
  imports: [
    CommonModule,
    AcademicsRoutingModule,
    AppDashboardLinksModule,
  ]
})
export class AcademicsModule { }
