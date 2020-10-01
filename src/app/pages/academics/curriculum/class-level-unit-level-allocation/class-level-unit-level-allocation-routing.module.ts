import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ClassLevelUnitLevelAllocationComponent} from './class-level-unit-level-allocation.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: ClassLevelUnitLevelAllocationComponent,
    data: {
      breadcrumb: null
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClassLevelUnitLevelAllocationRoutingModule { }
