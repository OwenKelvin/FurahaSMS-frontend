import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromStore from '../../store/reducers';

@Component({
  selector: 'app-academics-curriculum-class-level-categories',
  templateUrl: './academics-curriculum-class-level-categories.component.html',
  styleUrls: ['./academics-curriculum-class-level-categories.component.css']
})
export class AcademicsCurriculumClassLevelCategoriesComponent implements OnInit {

  constructor(private store: Store<fromStore.AppState>) { }

  ngOnInit() {
  }

}
