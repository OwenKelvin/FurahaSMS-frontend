import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ViewGuardianComponent } from './view-guardian/view-guardian.component';
import { ViewGuardianInfoComponent } from './view-guardian-info/view-guardian-info.component';
import { ViewGuardianStudentsComponent } from './view-guardian-students/view-guardian-students.component';


const routes: Routes = [
  {
    path: ':id',
    component: ViewGuardianComponent,
    data: {
      breadcrumb: null
    },
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'info',
        data: {
          breadcrumb: null
        }
      },
      {
        path: 'info',
        component: ViewGuardianInfoComponent,
        data: {
          breadcrumb: 'Info'
        }
      },
      {
        path: 'students',
        component: ViewGuardianStudentsComponent,
        data: {
          breadcrumb: 'Info'
        }
      }
   ]
 }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GuardiansRoutingModule { }
