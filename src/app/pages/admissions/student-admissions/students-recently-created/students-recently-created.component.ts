import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromStore from '../../../../store/reducers';
import { Observable } from 'rxjs';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-students-recently-created',
  templateUrl: './students-recently-created.component.html',
  styleUrls: ['./students-recently-created.component.css']
})
export class StudentsRecentlyCreatedComponent implements OnInit {
  students$: Observable<any[]>

  constructor(
    private studentsService: StudentService,
    private store: Store<fromStore.AppState>) { }

  ngOnInit() {
    this.students$ = this.studentsService.getRecentlyCreatedStudents();
    this.students$.subscribe(item => console.log(item))
  }

}
