import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromStore from '../../../../store/reducers';

@Component({
  selector: 'app-student-admissions-edit',
  templateUrl: './student-admissions-edit.component.html',
  styleUrls: ['./student-admissions-edit.component.css']
})
export class StudentAdmissionsEditComponent implements OnInit {

  constructor(private store: Store<fromStore.AppState>) { }

  ngOnInit() {
  }

}
