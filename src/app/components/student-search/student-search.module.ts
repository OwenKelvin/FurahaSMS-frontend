import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TypeaheadModule } from 'ngx-bootstrap/typeahead';
import { StudentSearchComponent } from './student-search.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    StudentSearchComponent
  ],
  exports: [
    StudentSearchComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    TypeaheadModule.forRoot(),
    RouterModule
  ]
})

export class StudentSearchModule { };
