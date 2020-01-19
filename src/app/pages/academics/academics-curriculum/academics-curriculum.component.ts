import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromStore from '../../../store/reducers';

@Component({
  selector: 'app-academics-curriculum',
  templateUrl: './academics-curriculum.component.html',
  styleUrls: ['./academics-curriculum.component.css']
})
export class AcademicsCurriculumComponent implements OnInit {

  constructor(private store: Store<fromStore.AppState>) { }

  ngOnInit() {
  }

}
