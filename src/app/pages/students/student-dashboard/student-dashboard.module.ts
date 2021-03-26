import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {StudentDashboardComponent} from './student-dashboard.component';
import {NgSelectModule} from '@ng-select/ng-select';
import {DashboardRoutingModule} from '../../dashboard/dashboard-routing.module';
import {AppPrintModule} from '../../../shared/print/print.module';
import { ReactiveComponentModule } from '@ngrx/component';

@NgModule({
  declarations: [
    StudentDashboardComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgSelectModule,
    DashboardRoutingModule,
    AppPrintModule,
    ReactiveComponentModule
  ]
})
export class StudentDashboardModule {
}
