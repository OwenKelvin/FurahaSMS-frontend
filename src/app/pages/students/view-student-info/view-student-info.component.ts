import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store, select } from '@ngrx/store';
import * as fromStore from '../../../store/reducers';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { map, mergeMap, takeWhile, tap } from 'rxjs/operators';
import { selectStudent } from '../store/selectors/student-profile.selectors';
import { GenderService } from 'src/app/services/gender.service';
import { ReligionService } from 'src/app/services/religion.service';
import { selectGenders, selectReligions } from 'src/app/store/selectors/app.selectors';
import { loadStudentProfilesSuccess } from '../store/actions/student-profile.actions';

@Component({
  selector: 'app-view-student-info',
  templateUrl: './view-student-info.component.html',
  styleUrls: ['./view-student-info.component.css']
})
export class ViewStudentInfoComponent implements OnInit, OnDestroy {
  student$: Observable<any> | undefined;
  componentIsActive: boolean;
  genders$: Observable<any[]>;
  religions$: Observable<any[]>;
  studentId: number;
  constructor(
    private store: Store<fromStore.AppState>,
    private route: ActivatedRoute,
    private genderService: GenderService,
    private religionService: ReligionService
    
  ) { }

  ngOnInit() {
    this.componentIsActive = true;
    this.genderService.loadAll$.pipe(takeWhile(() => this.componentIsActive)).subscribe();
    this.religionService.loadAll$.pipe(takeWhile(() => this.componentIsActive)).subscribe();
    this.genders$ = this.store.pipe(select(selectGenders))
    this.religions$ = this.store.pipe(select(selectReligions))
    this.student$ = this.route.parent?.paramMap
      .pipe(map(params => Number(params.get('id'))))
      .pipe(tap(id => this.studentId = id))
      .pipe(mergeMap(id => this.store.pipe(select(selectStudent(id)))));
  }
  ngOnDestroy() {
    this.componentIsActive = false;
  }
  
  updateSelectValue(fieldName: string, $event: {id: number, name: string}) {
    
    this.store.dispatch(loadStudentProfilesSuccess({
      data: {
        id: this.studentId,
        [fieldName + "_id"]: $event.id,
        [fieldName + "_name"]: $event.name,
      }
    }))
    
  }
}
