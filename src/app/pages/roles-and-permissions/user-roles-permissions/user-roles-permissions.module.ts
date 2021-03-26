import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRolesPermissionsRoutingModule } from './user-roles-permissions-routing.module';
import { UserRolesPermissionsComponent } from './user-roles-permissions.component';
import { ErrorModule } from 'src/app/components/error/error.module';
import { ReactiveComponentModule } from '@ngrx/component';


@NgModule({
  declarations: [UserRolesPermissionsComponent],
  imports: [
    CommonModule,
    UserRolesPermissionsRoutingModule,
    ErrorModule,
    ReactiveComponentModule
  ]
})
export class UserRolesPermissionsModule { }
