import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountsRoutingModule } from './accounts-routing.module';
import { AppLayoutModule } from 'src/app/modules/app-layout.module';
import { AccountsComponent } from './accounts.component';
import { AppDashboardLinksModule } from 'src/app/modules/app-dashboard-links';


@NgModule({
  declarations: [ AccountsComponent ],
  imports: [
    CommonModule,
    AccountsRoutingModule,
    AppLayoutModule,
    AppDashboardLinksModule

  ]
})
export class AccountsModule { }
