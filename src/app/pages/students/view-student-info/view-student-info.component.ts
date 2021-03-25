import {Component, OnInit, OnDestroy} from '@angular/core';
import {Store, select} from '@ngrx/store';
import * as fromStore from '../../../store/reducers';
import {Observable} from 'rxjs';
import {ActivatedRoute} from '@angular/router';
import {map, mergeMap, takeUntil, tap} from 'rxjs/operators';
import {selectStudent} from '../store/selectors/student-profile.selectors';
import {GenderService} from 'src/app/services/gender.service';
import {ReligionService} from 'src/app/services/religion.service';
import {selectGenders, selectReligions} from 'src/app/store/selectors/app.selectors';
import {loadStudentProfilesSuccess} from '../store/actions/student-profile.actions';
import {subscribedContainerMixin} from '../../../shared/mixins/subscribed-container.mixin';

@Component({
  selector: 'app-view-student-info',
  templateUrl: './view-student-info.component.html',
  styleUrls: ['./view-student-info.component.css']
})
export class ViewStudentInfoComponent extends subscribedContainerMixin() implements OnInit {
  student$: Observable<any> | undefined;
  genders$: Observable<any[]>;
  religions$: Observable<any[]>;
  studentId: number;

  constructor(
    private store: Store<fromStore.AppState>,
    private route: ActivatedRoute,
    private genderService: GenderService,
    private religionService: ReligionService
  ) {
    super();
  }

  ngOnInit() {
    this.genderService.loadAll$.pipe(takeUntil(this.destroyed$)).subscribe();
    this.religionService.loadAll$.pipe(takeUntil(this.destroyed$)).subscribe();
    this.genders$ = this.store.pipe(select(selectGenders));
    this.religions$ = this.store.pipe(select(selectReligions));
    this.student$ = this.route.parent?.paramMap
      .pipe(
        map(params => Number(params.get('id'))),
        tap(id => this.studentId = id),
        mergeMap(id => this.store.pipe(select(selectStudent(id))))
      );
  }

  changeProfile(fieldName: string, $event: string | number) {
    this.store.dispatch(loadStudentProfilesSuccess({
      data: {
        id: this.studentId,
        [fieldName]: $event,
      }
    }));
  }

  updateSelectValue(fieldName: string, $event: { id: number; name: string }) {

    this.store.dispatch(loadStudentProfilesSuccess({
      data: {
        id: this.studentId,
        [fieldName + '_id']: $event.id,
        [fieldName + '_name']: $event.name,
      }
    }));

  }
}
