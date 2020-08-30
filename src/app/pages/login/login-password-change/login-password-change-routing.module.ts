import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginPasswordChangeComponent} from './login-password-change.component';


const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: LoginPasswordChangeComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginPasswordChangeRoutingModule {
}
