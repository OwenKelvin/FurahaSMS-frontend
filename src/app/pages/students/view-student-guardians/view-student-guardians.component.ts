import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { AppState } from '../../../store/reducers';
import { selectStudentId } from 'src/app/store/selectors/student-profile.selector';
import { Observable } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';
import { GuardiansService } from 'src/app/services/guardians.service';
import { takeWhile, map, mergeMap, tap } from 'rxjs/operators';
import { selectStudent } from '../store/selectors/student-profile.selectors';

@Component({
  selector: 'app-view-student-guardians',
  templateUrl: './view-student-guardians.component.html',
  styleUrls: ['./view-student-guardians.component.css']
})
export class ViewStudentGuardiansComponent implements OnInit {
  guardians$: Observable<any[]> | undefined;
  componentIsActive: boolean;
  studentId: number;

  constructor(
    private route: ActivatedRoute,
    private guardianService: GuardiansService) { }

  ngOnInit() {

    this.guardians$ = this.route.parent?.parent?.paramMap
      .pipe(map(params => Number(params.get('id'))))
      .pipe(tap(studentId => this.studentId = studentId))
      .pipe(mergeMap(studentId => this.guardianService.getForStudent(Number(studentId))));
  }
}
