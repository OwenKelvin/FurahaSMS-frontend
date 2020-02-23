import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LinksComponent } from './links.component';
import { AppDashboardLinksModule } from 'src/app/modules/app-dashboard-links';



@NgModule({
  declarations: [LinksComponent],
  imports: [
    CommonModule,
    AppDashboardLinksModule
  ],
  exports: [LinksComponent]
})
export class AppLinksModule { }
