import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/reducers';
import { GuardiansService } from 'src/app/services/guardians.service';
import { selectStudentId } from 'src/app/store/selectors/student-profile.selector';
import { map, mergeMap } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view-guardian-students',
  templateUrl: './view-guardian-students.component.html',
  styleUrls: ['./view-guardian-students.component.css']
})
export class ViewGuardianStudentsComponent implements OnInit {

  students$: Observable<any>;

  constructor(
    private store: Store<AppState>,
    private guardianService: GuardiansService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.students$ = (this.route.parent as ActivatedRoute).paramMap
      .pipe(map(params => Number(params.get('id'))))
      .pipe(mergeMap(guardianId => this.guardianService.getStudents(guardianId)));

  }
}
