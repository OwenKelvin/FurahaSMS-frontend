import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromStore from '../../store/reducers';

@Component({
  selector: 'app-academic-year-archives',
  templateUrl: './academic-year-archives.component.html',
  styleUrls: ['./academic-year-archives.component.css']
})
export class AcademicYearArchivesComponent implements OnInit {

  constructor(private store: Store<fromStore.AppState>) { }

  ngOnInit() {
  }

}
