import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromStore from '../../store/reducers';

@Component({
  selector: 'app-create-student-guardian',
  templateUrl: './create-student-guardian.component.html',
  styleUrls: ['./create-student-guardian.component.css']
})
export class CreateStudentGuardianComponent implements OnInit {

  constructor(private store: Store<fromStore.AppState>) { }

  ngOnInit() {
  }

}
