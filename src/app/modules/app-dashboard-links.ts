import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DashboardLinkComponent } from '../components/dashboard-link/dashboard-link.component';
import { DashboardLinksComponent } from '../components/dashboard-links/dashboard-links.component';


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
