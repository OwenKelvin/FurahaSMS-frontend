import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromStore from '../../store/reducers';
import { of, Observable } from 'rxjs';

@Component({
  selector: 'app-time-table',
  templateUrl: './time-table.component.html',
  styleUrls: ['./time-table.component.css']
})
export class TimeTableComponent implements OnInit {
  links$: Observable<any>;

  constructor(private store: Store<fromStore.AppState>) { }

  ngOnInit() {
    this.links$ = of([
      { name: 'My Schedules', icon: 'icon-user-circle-o', link: 'time-table/my-schedules' },
      { name: 'Admin', icon: 'icon-user-secret', link: 'time-table/admin' },
    ]);
  }

}
