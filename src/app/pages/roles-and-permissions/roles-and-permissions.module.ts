import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RolesAndPermissionsRoutingModule } from './roles-and-permissions-routing.module';
import { RolesAndPermissionsComponent } from './roles-and-permissions.component';
import { AppLinksModule } from 'src/app/shared/links/links.module';
import { ErrorModule } from 'src/app/components/error/error.module';
import { ReactiveComponentModule } from '@ngrx/component';


@NgModule({
  declarations: [RolesAndPermissionsComponent],
  imports: [
    CommonModule,
    RolesAndPermissionsRoutingModule,
    AppLinksModule,
    ReactiveComponentModule
  ]
})
export class RolesAndPermissionsModule { }
