import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../../../store/reducers';
import { selectStudentId } from 'src/app/store/selectors/student-profile.selector';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { GuardiansService } from 'src/app/services/guardians.service';

@Component({
  selector: 'app-view-student-guardians',
  templateUrl: './view-student-guardians.component.html',
  styleUrls: ['./view-student-guardians.component.css']
})
export class ViewStudentGuardiansComponent implements OnInit {
  studentId$: Observable<number>;
  guardians$: Observable<any>;

  constructor(
    private store: Store<AppState>,
    private guardianService: GuardiansService) { }

  ngOnInit() {
    this.studentId$ = this.store.select(selectStudentId);
    this.studentId$.subscribe(studentId => {
      this.guardians$ = this.guardianService.getForStudent(studentId);
    });
  }

}
