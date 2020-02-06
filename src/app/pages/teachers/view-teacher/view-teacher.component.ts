import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { TeacherService } from '../../admissions/services/teacher.service';
import { ActivatedRoute } from '@angular/router';
import { map, mergeMap } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/reducers';
import { loadTeacherProfiles } from '../store/actions/teacher-profile.actions';

@Component({
  selector: 'app-view-teacher',
  templateUrl: './view-teacher.component.html',
  styleUrls: ['./view-teacher.component.css']
})
export class ViewTeacherComponent implements OnInit {
  teacherProfile$: Observable<any>;
  linkBase: any[];
  links: any[];
  constructor(
    private teacherService: TeacherService,
    private route: ActivatedRoute,
    private store: Store<AppState>
  ) { }

  ngOnInit() {
    this.teacherProfile$ = this.route.paramMap
      .pipe(map(params => +params.get('id')))
      .pipe(mergeMap(id => this.teacherService.getTeacherById(id)));
    this.teacherProfile$.subscribe(profile => this.store.dispatch(loadTeacherProfiles(profile)))
    
  }

}
