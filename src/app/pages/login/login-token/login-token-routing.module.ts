import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginTokenComponent} from './login-token.component';


const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: LoginTokenComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginTokenRoutingModule {
}
