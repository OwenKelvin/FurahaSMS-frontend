import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRolesPermissionsRoutingModule } from './user-roles-permissions-routing.module';
import { UserRolesPermissionsComponent } from './user-roles-permissions.component';
import { ErrorModule } from 'src/app/components/error/error.module';


@NgModule({
  declarations: [UserRolesPermissionsComponent],
  imports: [
    CommonModule,
    UserRolesPermissionsRoutingModule,
    ErrorModule
  ]
})
export class UserRolesPermissionsModule { }
