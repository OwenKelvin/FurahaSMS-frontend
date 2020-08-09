import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AcademicYearsComponent } from './academic-years.component';
import { AcademicYearsRoutingModule } from './academic-years-routing.module';
import { TimeTableAcademicYearViewComponent } from './time-table-academic-year-view/time-table-academic-year-view.component';
import { AccordionModule } from 'ngx-bootstrap/accordion';
import { TimeTableAcademicYearEditComponent } from './time-table-academic-year-edit/time-table-academic-year-edit.component';
import { TimetableEditorDirective } from '../directives/timetable-editor.directive';
import { ModalModule } from 'ngx-bootstrap/modal';
import { AppInputModule } from 'src/app/components/input/app-input.module';
import { ReactiveFormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';



@NgModule({
  declarations: [
    AcademicYearsComponent,
    TimeTableAcademicYearViewComponent,
    TimeTableAcademicYearEditComponent,
    TimetableEditorDirective
  ],
  imports: [
    CommonModule,
    AcademicYearsRoutingModule,
    AccordionModule.forRoot(),
    ModalModule.forRoot(),
    NgSelectModule,
    ReactiveFormsModule
  ]
})
export class AcademicYearsModule { }
