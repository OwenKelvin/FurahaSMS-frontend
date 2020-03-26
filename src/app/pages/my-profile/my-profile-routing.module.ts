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
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MyProfileRoutingModule { }
