import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromStore from '../../store/reducers';

@Component({
  selector: 'app-academics-curriculum-units',
  templateUrl: './academics-curriculum-units.component.html',
  styleUrls: ['./academics-curriculum-units.component.css']
})
export class AcademicsCurriculumUnitsComponent implements OnInit {

  constructor(private store: Store<fromStore.AppState>) { }

  ngOnInit() {
  }

}
