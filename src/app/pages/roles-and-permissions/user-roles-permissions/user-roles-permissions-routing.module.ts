import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserRolesPermissionsComponent } from './user-roles-permissions.component';


const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    data: {
      breadcrumb: null
    },
    component: UserRolesPermissionsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRolesPermissionsRoutingModule { }
