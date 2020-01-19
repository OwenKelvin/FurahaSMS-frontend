import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login.component';
import { LoginContactAdminComponent } from './login-contact-admin/login-contact-admin.component';
import { LoginResetComponent } from './login-reset/login-reset.component';
import { GuestGuard } from '../../guards/guest.guard';

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
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule { }
