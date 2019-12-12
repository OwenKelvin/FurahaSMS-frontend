import { Component, OnInit, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromStore from '../../store/reducers';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-view-student-info',
  templateUrl: './view-student-info.component.html',
  styleUrls: ['./view-student-info.component.css']
})
export class ViewStudentInfoComponent implements OnInit {
  @Input() studentId;
  viewStudentId$: Observable<any>;
  student$: Observable<any>
  constructor(private store: Store<fromStore.AppState>) { }
  
  ngOnInit() {
    console.log(this.studentId)
    this.viewStudentId$ = of(1);
    this.student$ = of({
      dateOfBirth: '1/10/2023'
    })
    
  }

}
