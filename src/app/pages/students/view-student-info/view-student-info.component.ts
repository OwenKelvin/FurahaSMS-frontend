import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import * as fromStore from '../../../store/reducers';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { map, mergeMap } from 'rxjs/operators';
import { selectStudent } from '../store/selectors/student-profile.selectors';

@Component({
  selector: 'app-view-student-info',
  templateUrl: './view-student-info.component.html',
  styleUrls: ['./view-student-info.component.css']
})
export class ViewStudentInfoComponent implements OnInit {
  student$: Observable<any> | undefined;
  constructor(
    private store: Store<fromStore.AppState>,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.student$ = this.route.parent?.paramMap
      .pipe(map(params => Number(params.get('id'))))
      .pipe(mergeMap(id => this.store.pipe(select(selectStudent(id)))));
  }

}
