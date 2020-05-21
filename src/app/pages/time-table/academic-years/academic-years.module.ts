import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AcademicYearsComponent } from './academic-years.component';
import { AcademicYearsRoutingModule } from './academic-years-routing.module';
import { TimeTableAcademicYearViewComponent } from './time-table-academic-year-view/time-table-academic-year-view.component';
import { AccordionModule } from 'ngx-bootstrap/accordion';



@NgModule({
  declarations: [AcademicYearsComponent, TimeTableAcademicYearViewComponent],
  imports: [
    CommonModule,
    AcademicYearsRoutingModule,
    AccordionModule.forRoot()
  ]
})
export class AcademicYearsModule { }
