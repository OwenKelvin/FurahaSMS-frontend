import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ErrorRoutingModule } from './error-routing.module';
import { ErrorComponent } from './error.component';
import { NetworkErrorComponent } from '../network-error/network-error.component';
import { PageUnderMaintenanceComponent } from '../page-under-maintenance/page-under-maintenance.component';
import { PageNotFoundComponent } from '../page-not-found/page-not-found.component';
import { ReactiveComponentModule } from '@ngrx/component';


@NgModule({
  declarations: [
    ErrorComponent,
    NetworkErrorComponent,
    PageUnderMaintenanceComponent,
    PageNotFoundComponent
  ],
  imports: [
    CommonModule,
    ErrorRoutingModule,
    ReactiveComponentModule,


  ],
  exports: [
    ErrorComponent,
    NetworkErrorComponent,
    PageUnderMaintenanceComponent]
})
export class ErrorModule { }
