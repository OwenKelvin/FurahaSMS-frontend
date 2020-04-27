import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PasswordManagementComponent } from './password-management.component';
import { PasswordChangeFormComponent } from '../password-change-form/password-change-form.component';
import { UserPasswordResetComponent } from '../user-password-reset/user-password-reset.component';



const routes: Routes = [
  {
    path: '',
    component: PasswordManagementComponent,
    // children: [
    //   {
    //     path: '',
    //     pathMatch: 'full',
    //     redirectTo: 'change-password'
    //   },
    //   {
    //     path: 'change-password',
    //     component: PasswordChangeFormComponent
    //   }
    // ]
    // 
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'reset-user-password'
      },
      {
        path: 'reset-user-password',
        component: UserPasswordResetComponent
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
export class PasswordManagementRoutingModule { }
