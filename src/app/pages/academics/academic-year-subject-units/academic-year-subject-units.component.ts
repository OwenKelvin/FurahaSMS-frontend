import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromStore from '../../../store/reducers';

@Component({
  selector: 'app-academic-year-subject-units',
  templateUrl: './academic-year-subject-units.component.html',
  styleUrls: ['./academic-year-subject-units.component.css']
})
export class AcademicYearSubjectUnitsComponent implements OnInit {

  constructor(private store: Store<fromStore.AppState>) { }

  ngOnInit() {
  }

}
