import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { LoginContactAdminComponent } from './login-contact-admin/login-contact-admin.component';
import { LoginResetComponent } from './login-reset/login-reset.component';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent,
    pathMatch: 'full'
  },
  {
    path: 'login/contact-admin',
    component: LoginContactAdminComponent,
    pathMatch: 'full'
  },
  {
    path: 'login/reset',
    component: LoginResetComponent,
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComponentsRoutingModule { }
