import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromStore from '../../../store/reducers';
import { selectStudentId } from 'src/app/store/selectors/student-profile.selector';
import { StudentAcademicsService } from '../services/student-academics.service';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { map, mergeMap, tap } from 'rxjs/operators';

@Component({
  selector: 'app-view-student-academics',
  templateUrl: './view-student-academics.component.html',
  styleUrls: ['./view-student-academics.component.css']
})
export class ViewStudentAcademicsComponent implements OnInit {
  studentId: number | undefined;
  componentIsActive: boolean;
  academicYearSubjects$: Observable<any> | undefined;

  constructor(
    private route: ActivatedRoute,
    private studentAcademicsService: StudentAcademicsService) { }

  ngOnInit() {
    this.componentIsActive = true;
    this.academicYearSubjects$ =this.route.parent?.paramMap
      .pipe(map(params => Number(params.get('id'))))
      .pipe(tap(studentId => this.studentId = studentId))
      .pipe(mergeMap(studentId => this.studentAcademicsService.getForStudentWithId(studentId)))
      ;
  }

}
