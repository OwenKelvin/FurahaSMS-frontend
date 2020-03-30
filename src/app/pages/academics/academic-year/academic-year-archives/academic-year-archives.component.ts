import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromStore from '../../../../store/reducers';
import { AcademicYearService } from 'src/app/pages/academics/services/academic-year.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-academic-year-archives',
  templateUrl: './academic-year-archives.component.html',
  styleUrls: ['./academic-year-archives.component.css']
})
export class AcademicYearArchivesComponent implements OnInit {
  academicYears$: Observable<any>;
  constructor(
    private store: Store<fromStore.AppState>,
    private academicYearService: AcademicYearService) { }

  ngOnInit() {
    this.academicYears$ = this.academicYearService.getAll();
  }

}
