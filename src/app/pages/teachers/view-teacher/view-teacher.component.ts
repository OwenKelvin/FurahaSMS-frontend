import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs';
import { TeacherService } from '../../admissions/services/teacher.service';
import { ActivatedRoute } from '@angular/router';
import { map, mergeMap, takeWhile } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/reducers';
import { loadTeacherProfiles } from '../store/actions/teacher-profile.actions';

@Component({
  selector: 'app-view-teacher',
  templateUrl: './view-teacher.component.html',
  styleUrls: ['./view-teacher.component.css']
})
export class ViewTeacherComponent implements OnInit, OnDestroy {
  teacherProfile$: Observable<any>;
  linkBase: any[];
  links: any[];
  componentIsActive: boolean;
  constructor(
    private teacherService: TeacherService,
    private route: ActivatedRoute,
    private store: Store<AppState>
  ) { }

  ngOnInit() {
    this.componentIsActive = true;
    this.teacherProfile$ = this.route.paramMap
      .pipe(map(params => Number(params.get('id'))))
      .pipe(mergeMap(id => this.teacherService.getTeacherById(id)));
    this.teacherProfile$
      .pipe(takeWhile(() => this.componentIsActive))
      .subscribe(profile => this.store.dispatch(loadTeacherProfiles(profile)));

  }
  ngOnDestroy() {
    this.componentIsActive = false;
  }

}
