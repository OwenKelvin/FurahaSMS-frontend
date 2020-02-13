import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromStore from '../../../../store/reducers';
import { Observable } from 'rxjs';
import { selectStudentProfile } from 'src/app/store/selectors/student-profile.selector';

@Component({
  selector: 'app-view-student-info',
  templateUrl: './view-student-info.component.html',
  styleUrls: ['./view-student-info.component.css']
})
export class ViewStudentInfoComponent implements OnInit {
  student$: Observable<any>;
  constructor(private store: Store<fromStore.AppState>) { }

  ngOnInit() {
    this.student$ = this.store.select(selectStudentProfile);
  }

}
