import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromStore from '../../store/reducers';
import { of, Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';

@Component({
  selector: 'app-view-student',
  templateUrl: './view-student.component.html',
  styleUrls: ['./view-student.component.css']
})
export class ViewStudentComponent implements OnInit {
  student$: any;
  fullName$: Observable<any>;
  constructor(private store: Store<fromStore.AppState>) { }

  ngOnInit() {
    this.student$ = of({
      firstName: 'First',
      lastName: 'Last',
      otherNames: 'Other',
      middleName: 'Middle',
      schoolId: '52'
    });
    this.fullName$ = this.student$.pipe(map(item => {
      const asAnyitem = item as any;
      return asAnyitem.firstName + ' ' + asAnyitem.lastName + ' ' + asAnyitem.middleName + ' | ' + asAnyitem.schoolId 
    }))
    
  }
  // get fullName$() {
  //   return of("OKAY");
  //   return this.student$.pipe(map(item => {
  //     console.log(item)
  //     return "TRIAL";
  //   }))
  // }

}
