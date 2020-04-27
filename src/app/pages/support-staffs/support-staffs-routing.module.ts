import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ViewSupportStaffInfoComponent } from './support-staff/view-support-staff-info/view-support-staff-info.component';
import { ViewSupportStaffComponent } from './support-staff/view-support-staff/view-support-staff.component';



const routes: Routes = [
  {
    path: ':id',
    component: ViewSupportStaffComponent,
    data: {
      breadcrumb: null,
    },
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'info'
      },
      {
        path: 'info',
        data: {
          breadcrumb: 'Info'
        },
        component: ViewSupportStaffInfoComponent
      },
      {
        path: 'password-management',
        loadChildren: () => import('src/app/pages/login/password-management/password-management.module')
          .then(m => m.PasswordManagementModule)
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
export class SupportStaffsRoutingModule { }
