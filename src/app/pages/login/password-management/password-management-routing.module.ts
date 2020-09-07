import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PasswordManagementComponent} from './password-management.component';
import {UserPasswordResetComponent} from '../user-password-reset/user-password-reset.component';
import {UserPasswordChangeComponent} from '../user-password-change/user-password-change.component';


const routes: Routes = [
  {
    path: '',
    component: PasswordManagementComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        data: {}
      },
      {
        path: 'reset-user-password',
        component: UserPasswordResetComponent
      },
      {
        path: 'change-password',
        component: UserPasswordChangeComponent
      },
      {
        path: '**',
        loadChildren: () => import('src/app/components/error/error.module').then(m => m.ErrorModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PasswordManagementRoutingModule {
}
