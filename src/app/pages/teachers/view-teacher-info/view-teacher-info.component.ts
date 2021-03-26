import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Store, select} from '@ngrx/store';
import {AppState} from 'src/app/store/reducers';
import {selectTeacher} from '../store/selectors/teacher-profile.selectors';
import {map, mergeMap, takeWhile, tap} from 'rxjs/operators';
import {Observable} from 'rxjs';
import {GenderService} from 'src/app/services/gender.service';
import {ReligionService} from 'src/app/services/religion.service';
import {selectGenders, selectReligions} from 'src/app/store/selectors/app.selectors';
import {loadTeacherProfilesSuccess} from '../store/actions/teacher-profile.actions';

@Component({
  selector: 'app-view-teacher-info',
  templateUrl: './view-teacher-info.component.html',
  styleUrls: ['./view-teacher-info.component.css']
})
export class ViewTeacherInfoComponent implements OnInit {
  teacherProfile$: any;
  componentIsActive: boolean;
  genders$: Observable<any[]>;
  religions$: Observable<any[]>;
  teacherId: number;

  constructor(
    private route: ActivatedRoute,
    private store: Store<AppState>,
    private genderService: GenderService,
    private religionService: ReligionService
  ) {
  }

  ngOnInit() {
    this.componentIsActive = true;
    this.genderService.loadAll$.pipe(takeWhile(() => this.componentIsActive)).subscribe();
    this.religionService.loadAll$.pipe(takeWhile(() => this.componentIsActive)).subscribe();
    this.genders$ = this.store.pipe(select(selectGenders));
    this.religions$ = this.store.pipe(select(selectReligions));
    this.teacherProfile$ = this.route.parent?.paramMap
      .pipe(map(params => Number(params.get('id'))))
      .pipe(tap(id => this.teacherId = id))
      .pipe(mergeMap((id) => this.store.pipe(select(selectTeacher(id)))));
  }

  changeProfile(fieldName: string, $event: string | number) {
    this.store.dispatch(loadTeacherProfilesSuccess({
      data: {
        id: this.teacherId,
        [fieldName]: $event,
      }
    }));
  }

  updateSelectValue(fieldName: string, $event: { id: number; name: string }) {
    this.store.dispatch(loadTeacherProfilesSuccess({
      data: {
        id: this.teacherId,
        [fieldName + '_id']: $event.id,
        [fieldName + '_name']: $event.name,
      }
    }));

  }

}
