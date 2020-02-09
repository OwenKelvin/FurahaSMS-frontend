import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FinancialPlanRoutingModule } from './financial-plan-routing.module';
import { FinancialPlanComponent } from './financial-plan.component';
import { SelectAcademicYearModule } from 'src/app/shared/select-academic-year/select-academic-year.module';
import { ViewAcademicYearFinancialPlanComponent } from './view-academic-year-financial-plan/view-academic-year-financial-plan.component';
import { EditAcademicYearFinancialPlanComponent } from './edit-academic-year-financial-plan/edit-academic-year-financial-plan.component';
import { StoreModule } from '@ngrx/store';
import * as fromAcademicYearPlan from './store/reducers/academic-year-plan.reducer';
import { EffectsModule } from '@ngrx/effects';
import { AcademicYearPlanEffects } from './store/effects/academic-year-plan.effects';
import { AcademicYearFinancialPlanComponent } from './academic-year-financial-plan/academic-year-financial-plan.component';
import { AppLoadingBubbleModule } from 'src/app/modules/app-loading-bubble';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { TabErrorStateModule } from 'src/app/modules/app-tab-error.module';


@NgModule({
  declarations: [
    FinancialPlanComponent,
    ViewAcademicYearFinancialPlanComponent,
    EditAcademicYearFinancialPlanComponent,
    AcademicYearFinancialPlanComponent],
  imports: [
    CommonModule,
    FinancialPlanRoutingModule,
    SelectAcademicYearModule,
    StoreModule.forFeature(fromAcademicYearPlan.academicYearPlanFeatureKey, fromAcademicYearPlan.reducer),
    EffectsModule.forFeature([AcademicYearPlanEffects]),
    AppLoadingBubbleModule,
    TabsModule.forRoot(),
    TabErrorStateModule
  ]
})
export class FinancialPlanModule { }
