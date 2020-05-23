import { Component, OnInit } from '@angular/core';
import { AcademicYearService } from '../../services/academic-year.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-academic-year-unit-allocation',
  templateUrl: './academic-year-unit-allocation.component.html',
  styleUrls: ['./academic-year-unit-allocation.component.css']
})
export class AcademicYearUnitAllocationComponent implements OnInit {
  academicYears$: Observable<any>;
  selectedAcademicYear: number;
  constructor(private academicYear: AcademicYearService) { }

  ngOnInit() {
    this.academicYears$ = this.academicYear.all$;
  }

}
