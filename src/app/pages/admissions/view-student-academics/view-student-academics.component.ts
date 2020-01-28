import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromStore from '../../../store/reducers';
import { selectStudentId } from 'src/app/store/selectors/student-profile.selector';

@Component({
  selector: 'app-view-student-academics',
  templateUrl: './view-student-academics.component.html',
  styleUrls: ['./view-student-academics.component.css']
})
export class ViewStudentAcademicsComponent implements OnInit {
  studentId$: any;

  constructor(private store: Store<fromStore.AppState>) { }

  ngOnInit() {
    this.studentId$ = this.store.select(selectStudentId);
  }

}
