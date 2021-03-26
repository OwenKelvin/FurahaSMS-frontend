import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManageClassLevelUnitLevelAllocationComponent } from './manage-class-level-unit-level-allocation.component';
import {AppValidateSubmitButtonsModule} from '../../../../components/validate-submit-buttons/validate-submit-buttons.module';
import {ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {NgSelectModule} from '@ng-select/ng-select';
import {AppLoadingBubbleModule} from '../../../../modules/app-loading-bubble';
import { ReactiveComponentModule } from '@ngrx/component';



@NgModule({
  declarations: [ManageClassLevelUnitLevelAllocationComponent],
  imports: [
    CommonModule,
    AppValidateSubmitButtonsModule,
    ReactiveFormsModule,
    RouterModule,
    NgSelectModule,
    AppLoadingBubbleModule,
    ReactiveComponentModule
  ],
  exports: [ManageClassLevelUnitLevelAllocationComponent]
})
export class ManageClassLevelUnitLevelAllocationModule { }
