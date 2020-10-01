import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ClassLevelUnitLevelAllocationRoutingModule} from './class-level-unit-level-allocation-routing.module';
import {ClassLevelUnitLevelAllocationComponent} from './class-level-unit-level-allocation.component';
import {AppLoadingBubbleModule} from '../../../../modules/app-loading-bubble';
import {NgSelectModule} from '@ng-select/ng-select';
import {ReactiveFormsModule} from '@angular/forms';
import {AppValidateSubmitButtonsModule} from '../../../../components/validate-submit-buttons/validate-submit-buttons.module';


@NgModule({
  declarations: [ClassLevelUnitLevelAllocationComponent],
  imports: [
    CommonModule,
    ClassLevelUnitLevelAllocationRoutingModule,
    AppLoadingBubbleModule,
    NgSelectModule,
    ReactiveFormsModule,
    AppValidateSubmitButtonsModule
  ]
})
export class ClassLevelUnitLevelAllocationModule {
}
