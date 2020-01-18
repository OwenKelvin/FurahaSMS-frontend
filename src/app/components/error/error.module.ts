import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ErrorRoutingModule } from './error-routing.module';
import { ErrorComponent } from './error.component';
import { NetworkErrorComponent } from '../network-error/network-error.component';
import { PageUnderMaintenanceComponent } from '../page-under-maintenance/page-under-maintenance.component';
import { PageNotFoundComponent } from '../page-not-found/page-not-found.component';


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
    
    
  ],
  exports: [ErrorComponent, NetworkErrorComponent]
})
export class ErrorModule { }
