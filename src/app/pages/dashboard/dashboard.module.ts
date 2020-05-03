import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { AppLayoutModule } from 'src/app/modules/app-layout.module';
import { DashboardComponent } from './dashboard.component';
import { AppDashboardLinksModule } from 'src/app/modules/app-dashboard-links';
import { LoadMyProfileModule } from '../my-profile/load-my-profile.module';


@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    AppLayoutModule,
    AppDashboardLinksModule,
    LoadMyProfileModule
  ]
})
export class DashboardModule { }
