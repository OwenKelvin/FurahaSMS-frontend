import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from './login.component';
import {LoginContactAdminComponent} from './login-contact-admin/login-contact-admin.component';
import {LoginResetComponent} from './login-reset/login-reset.component';
import {GuestGuard} from 'src/app/guards/guest.guard';
import {AuthGuard} from 'src/app/guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    canActivate: [GuestGuard],
    children: [
      {
        path: '',
        pathMatch: 'full',
        component: LoginComponent,
      },
      {
        path: 'contact-admin',
        component: LoginContactAdminComponent,
        canActivate: [GuestGuard],
      },
      {
        path: 'reset',
        component: LoginResetComponent,
        canActivate: [GuestGuard],
      },
      {
        path: 'token',
        canActivate: [GuestGuard],
        loadChildren: () => import('./login-token/login-token.module')
          .then(m => m.LoginTokenModule)
      },
    ]
  },
  {
    path: 'password-change',
    canActivate: [AuthGuard],
    loadChildren: () => import('./login-password-change/login-password-change.module')
      .then(m => m.LoginPasswordChangeModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule {
}
