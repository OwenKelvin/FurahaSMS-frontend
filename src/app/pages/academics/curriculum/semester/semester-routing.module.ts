import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SemesterComponent } from './semester.component';
import { CreateSemesterComponent } from './create-semester/create-semester.component';
import { ViewSemesterComponent } from './view-semester/view-semester.component';
import { EditSemesterComponent } from './edit-semester/edit-semester.component';


const routes: Routes = [
  {
    path: '',
    component: SemesterComponent,
    data: {
      breadcrumb: null
    }
  },
  {
    path: 'create',
    component: CreateSemesterComponent,
    data: {
      breadcrumb: null
    }
  },
  {
    path: ':id',
    data: {
      breadcrumb: null
    },
    children: [
      {
        path: 'view',
        component: ViewSemesterComponent
      },
      {
        path: 'edit',
        component: EditSemesterComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SemesterRoutingModule { }
