import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromStore from '../../store/reducers';

@Component({
  selector: 'app-academics-curriculum-class-levels',
  templateUrl: './academics-curriculum-class-levels.component.html',
  styleUrls: ['./academics-curriculum-class-levels.component.css']
})
export class AcademicsCurriculumClassLevelsComponent implements OnInit {

  constructor(private store: Store<fromStore.AppState>) { }

  ngOnInit() {
  }

}
