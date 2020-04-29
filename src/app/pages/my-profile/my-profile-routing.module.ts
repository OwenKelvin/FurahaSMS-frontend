import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MyProfileComponent } from './my-profile.component';
import { MyProfileInfoComponent } from './my-profile-info/my-profile-info.component';


const routes: Routes = [
  {
    path: '',
    data: {
      breadcrumb: null
    },
    component: MyProfileComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo:'info'
      },
      {
        path: 'info',
        data: {
          breadcrumb: 'My Info'
        },
        component: MyProfileInfoComponent
      },
      {
        path: 'password-management',
        loadChildren: () => import('src/app/pages/login/password-management/password-management.module')
          .then(m => m.PasswordManagementModule),
        data: {
          routeName: 'my-profile-route'
        }
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
export class MyProfileRoutingModule { }
