import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CrudComponent } from '../components/crud/crud.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ErrorModule } from '../components/error/error.module';
import { AppInputModule } from './app-input.module';


@NgModule({
  declarations: [
    CrudComponent
  ],
  exports: [
    CrudComponent
  ],

  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ErrorModule,
    AppInputModule
  ]
})
export class AppCrudModule { }
