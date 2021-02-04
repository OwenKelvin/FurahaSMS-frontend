import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ClassLevelUnitLevelAllocationComponent} from './class-level-unit-level-allocation.component';
import {
  ManageClassLevelUnitLevelAllocationComponent
} from '../manage-class-level-unit-level-allocation/manage-class-level-unit-level-allocation.component';

const routes: Routes = [
  {
    path: 'view',
    data: {
      breadcrumb: 'View'
    },
    component: ClassLevelUnitLevelAllocationComponent,
  },
  {
    path: 'edit',
    data: {
      breadcrumb: 'Edit'
    },
    component: ManageClassLevelUnitLevelAllocationComponent,
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'view'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClassLevelUnitLevelAllocationRoutingModule {
}
