import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SemesterRoutingModule } from './semester-routing.module';
import { SemesterComponent } from './semester.component';
import { AppViewItemsModule } from 'src/app/modules/app-view-items.module';
import { ErrorModule } from 'src/app/components/error/error.module';
import { CreateSemesterComponent } from './create-semester/create-semester.component';
import { ViewSemesterComponent } from './view-semester/view-semester.component';
import { EditSemesterComponent } from './edit-semester/edit-semester.component';
import { AppCrudModule } from 'src/app/components/crud/app-crud.module';
import { ReactiveComponentModule } from '@ngrx/component';


@NgModule({
  declarations: [SemesterComponent, CreateSemesterComponent, ViewSemesterComponent, EditSemesterComponent],
  imports: [
    CommonModule,
    SemesterRoutingModule,
    AppViewItemsModule,
    ErrorModule,
    AppCrudModule,
    ReactiveComponentModule
  ]
})
export class SemesterModule { }
