import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RolesAndPermissionsComponent } from './roles-and-permissions.component';


const routes: Routes = [
  {
    path: '',
    component: RolesAndPermissionsComponent,
    data: {
      breadcrumb: null
    }
  },
  {
    path: 'user',
    loadChildren: () => import('./user-roles-permissions/user-roles-permissions.module')
      .then(m => m.UserRolesPermissionsModule),
    data: {
      breadcrumb: 'User Roles & Permissions'
    }
  },
  {
    path: 'roles',
    loadChildren: () => import('./roles-permissions/roles-permissions.module')
      .then(m => m.RolesPermissionsModule),
    data: {
      breadcrumb: 'Roles & Permissions'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RolesAndPermissionsRoutingModule { }
