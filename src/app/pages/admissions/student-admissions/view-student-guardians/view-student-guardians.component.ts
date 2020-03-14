import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../../../store/reducers';
import { selectStudentId } from 'src/app/store/selectors/student-profile.selector';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { GuardiansService } from 'src/app/services/guardians.service';
import { takeWhile } from 'rxjs/operators';

@Component({
  selector: 'app-view-student-guardians',
  templateUrl: './view-student-guardians.component.html',
  styleUrls: ['./view-student-guardians.component.css']
})
export class ViewStudentGuardiansComponent implements OnInit, OnDestroy {
  studentId$: Observable<number>;
  guardians$: Observable<any>;
  componentIsActive: boolean;

  constructor(
    private store: Store<AppState>,
    private guardianService: GuardiansService) { }

  ngOnInit() {
    this.componentIsActive = true;
    this.studentId$ = this.store.select(selectStudentId);
    this.studentId$
      .pipe(takeWhile(() => this.componentIsActive))
      .subscribe(studentId => {
      this.guardians$ = this.guardianService.getForStudent(studentId);
      });
  }
  ngOnDestroy() {
    this.componentIsActive = false;
  }
}
