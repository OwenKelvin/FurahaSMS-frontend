import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { AppState, REDUCER_TOKEN, metaReducers } from 'src/app/store/reducers';
import { selectTeacherProfileState } from '../store/selectors/teacher-profile.selectors';
import { map, mergeMap } from 'rxjs/operators';

@Component({
  selector: 'app-view-teacher-info',
  templateUrl: './view-teacher-info.component.html',
  styleUrls: ['./view-teacher-info.component.css']
})
export class ViewTeacherInfoComponent implements OnInit {
  teacherProfile$: any;

  constructor(
    private route: ActivatedRoute,
    private store: Store<AppState>
  ) { }

  ngOnInit() {
    this.teacherProfile$ = this.route.parent.paramMap
      .pipe( map(params => +params.get('id')))
      .pipe(
        mergeMap(id => {
          return this.store.pipe(select(selectTeacherProfileState))
            .pipe(
              map(teacherProfile => teacherProfile[id])
            );
        })
      );
  }

}
