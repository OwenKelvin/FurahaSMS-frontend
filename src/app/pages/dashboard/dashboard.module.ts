import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { AppLayoutModule } from 'src/app/modules/app-layout.module';
import { DashboardComponent } from './dashboard.component';
import { LoadMyProfileModule } from '../my-profile/load-my-profile.module';
import { AppLinksModule } from 'src/app/shared/links/links.module';


@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    AppLayoutModule,
    AppLinksModule,
    LoadMyProfileModule
  ]
})
export class DashboardModule { }
