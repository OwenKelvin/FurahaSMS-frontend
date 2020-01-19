import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SchoolManagementRoutingModule } from './management-routing.module';
import { AppLayoutModule } from 'src/app/modules/app-layout.module';
import { SchoolManagementComponent } from './management.component';


@NgModule({
  declarations: [SchoolManagementComponent],
  imports: [
    CommonModule,
    SchoolManagementRoutingModule,
    AppLayoutModule
  ]
})
export class SchoolManagementModule { }
