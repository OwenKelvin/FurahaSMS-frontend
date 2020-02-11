import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AcademicYearRoutingModule } from './academic-year-routing.module';
import { AcademicYearUnitAllocationComponent } from './academic-year-unit-allocation/academic-year-unit-allocation.component';
import { ViewAcademicYearInfoComponent } from './view-academic-year-info/view-academic-year-info.component';
import { AcademicYearFinancialPlanComponent } from './academic-year-financial-plan/academic-year-financial-plan.component';
import { AcademicYearSubjectUnitsComponent } from './academic-year-subject-units/academic-year-subject-units.component';
import { AcademicYearArchivesComponent } from './academic-year-archives/academic-year-archives.component';
import { AcademicYearComponent } from './academic-year.component';
import { CreateAcademicYearComponent } from './create-academic-year/create-academic-year.component';
import { ViewAcademicYearComponent } from './view-academic-year/view-academic-year.component';
import { AppLoadingBubbleModule } from 'src/app/modules/app-loading-bubble';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppDashboardLinksModule } from 'src/app/modules/app-dashboard-links';
import { NgSelectModule } from '@ng-select/ng-select';
import { AppInputModule } from 'src/app/modules/app-input.module';
import { ErrorModule } from 'src/app/components/error/error.module';


@NgModule({
  declarations: [
    AcademicYearUnitAllocationComponent,
    ViewAcademicYearInfoComponent,
    AcademicYearFinancialPlanComponent,
    AcademicYearSubjectUnitsComponent,
    AcademicYearArchivesComponent,
    AcademicYearComponent,
    CreateAcademicYearComponent,
    ViewAcademicYearComponent,

  ],
  imports: [
    CommonModule,
    AcademicYearRoutingModule,
    AppLoadingBubbleModule,
    FormsModule,
    ReactiveFormsModule,
    AppDashboardLinksModule,
    NgSelectModule,
    AppInputModule,
    ErrorModule
  ]
})
export class AcademicYearModule { }