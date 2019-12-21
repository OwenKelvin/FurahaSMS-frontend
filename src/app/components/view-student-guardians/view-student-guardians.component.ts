import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromStore from '../../store/reducers';
import { selectStudentId } from 'src/app/store/selectors/student-profile.selector';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-view-student-guardians',
  templateUrl: './view-student-guardians.component.html',
  styleUrls: ['./view-student-guardians.component.css']
})
export class ViewStudentGuardiansComponent implements OnInit {
  studentId$: Observable<number>;

  constructor(private store: Store<fromStore.AppState>) { }

  ngOnInit() {
    this.studentId$ = this.store.select(selectStudentId);
  }

}
