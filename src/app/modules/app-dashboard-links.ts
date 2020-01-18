import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardLinksComponent } from '../components/dashboard/dashboard-links/dashboard-links.component';
import { DashboardLinkComponent } from '../components/dashboard/dashboard-link/dashboard-link.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    DashboardLinkComponent,
    DashboardLinksComponent
  ],
  exports: [
    DashboardLinkComponent,
    DashboardLinksComponent
  ],

  imports: [
    CommonModule,
    RouterModule
  ]
})
export class AppDashboardLinksModule { }
