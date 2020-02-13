import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdmissionsRoutingModule } from './admissions-routing.module';
import { AppLayoutModule } from 'src/app/modules/app-layout.module';
import { AdmissionsComponent } from './admissions.component';
import { AppDashboardLinksModule } from 'src/app/modules/app-dashboard-links';


@NgModule({
  declarations: [
    AdmissionsComponent,
  ],
  imports: [
    CommonModule,
    AdmissionsRoutingModule,
    AppLayoutModule,
    AppDashboardLinksModule,
  ]
})
export class AdmissionsModule { }
