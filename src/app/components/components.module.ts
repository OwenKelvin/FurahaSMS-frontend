import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsRoutingModule } from './components-routing.module';
import { HomeComponent } from './home/home.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ToastComponent } from './toast/toast.component';
import { ErrorModule } from './error/error.module';
import { NgSelectModule } from '@ng-select/ng-select';
import { AccordionModule } from 'ngx-bootstrap/accordion';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { AppInputModule } from 'src/app/modules/app-input.module';
import { AppLayoutModule } from '../modules/app-layout.module';
import { AppDashboardLinksModule } from '../modules/app-dashboard-links';



@NgModule({
  declarations: [
    ToastComponent,
  ],
  imports: [
    CommonModule,
    NgSelectModule,
    ComponentsRoutingModule,
    ReactiveFormsModule,
    ErrorModule,
    AccordionModule.forRoot(),
    TabsModule.forRoot(),
    AppInputModule,
    AppLayoutModule,
    AppDashboardLinksModule,

  ],
  exports: [
    ToastComponent],

})
export class ComponentsModule {}
