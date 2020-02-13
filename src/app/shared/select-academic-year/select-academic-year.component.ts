import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { AcademicYearService } from 'src/app/pages/academics/services/academic-year.service';

@Component({
  selector: 'app-select-academic-year',
  templateUrl: './select-academic-year.component.html',
  styleUrls: ['./select-academic-year.component.css']
})
export class SelectAcademicYearComponent implements OnInit {
  @Input() title: string;
  @Input() routes: (string | number)[];
  academicYears$: Observable<any>;
  selectedAcademicYear: number;
  constructor(private academicYear: AcademicYearService) { }

  ngOnInit() {
    this.academicYears$ = this.academicYear.getAll();
  }

  get routesLinks(): (string | number)[] {
    return this.routes
      .map(item => item === ':id' ? (this.selectedAcademicYear ? this.selectedAcademicYear : '') : item);
  }

}
