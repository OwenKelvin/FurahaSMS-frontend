import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromStore from '../../store/reducers';

@Component({
  selector: 'app-academics-curriculum-unit-categories',
  templateUrl: './academics-curriculum-unit-categories.component.html',
  styleUrls: ['./academics-curriculum-unit-categories.component.css']
})
export class AcademicsCurriculumUnitCategoriesComponent implements OnInit {

  constructor(private store: Store<fromStore.AppState>) { }

  ngOnInit() {
  }

}
