import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RolesPermissionsComponent } from './roles-permissions.component';
import { RolesPermissionEditComponent } from './roles-permission-edit/roles-permission-edit.component';


const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    data: {
      breadcrumb: null
    },
    component: RolesPermissionsComponent
  },
  {
    path: ':id',
    data: {
      breadcrumb: null,
    },
    children: [
      {
        path: 'edit',
        data: {
          breadcrumb: 'Edit'
        },
        component: RolesPermissionEditComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RolesPermissionsRoutingModule { }
