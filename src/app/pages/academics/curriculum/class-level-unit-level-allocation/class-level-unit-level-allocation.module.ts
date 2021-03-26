import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ClassLevelUnitLevelAllocationRoutingModule} from './class-level-unit-level-allocation-routing.module';
import {ClassLevelUnitLevelAllocationComponent} from './class-level-unit-level-allocation.component';
import {AppLoadingBubbleModule} from '../../../../modules/app-loading-bubble';
import {
  ManageClassLevelUnitLevelAllocationModule
} from '../manage-class-level-unit-level-allocation/manage-class-level-unit-level-allocation.module';
import { ReactiveComponentModule } from '@ngrx/component';


@NgModule({
  declarations: [ClassLevelUnitLevelAllocationComponent],
  imports: [
    CommonModule,
    ClassLevelUnitLevelAllocationRoutingModule,
    AppLoadingBubbleModule,
    ManageClassLevelUnitLevelAllocationModule,
    ReactiveComponentModule
  ]
})
export class ClassLevelUnitLevelAllocationModule {
}
