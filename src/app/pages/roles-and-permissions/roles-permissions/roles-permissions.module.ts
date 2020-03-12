import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RolesPermissionsRoutingModule } from './roles-permissions-routing.module';
import { RolesPermissionsComponent } from './roles-permissions.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppLoadingBubbleModule } from 'src/app/modules/app-loading-bubble';
import { RouterModule } from '@angular/router';
import { RolesPermissionEditComponent } from './roles-permission-edit/roles-permission-edit.component';
import { AppCheckboxModule } from 'src/app/shared/checkbox/checkbox.module';
import { AppInputModule } from 'src/app/modules/app-input.module';


@NgModule({
  declarations: [RolesPermissionsComponent, RolesPermissionEditComponent],
  imports: [
    CommonModule,
    RolesPermissionsRoutingModule,
    NgSelectModule,
    FormsModule,
    ReactiveFormsModule,
    AppLoadingBubbleModule,
    RouterModule,
    AppCheckboxModule,
    AppInputModule
  ]
})
export class RolesPermissionsModule { }
