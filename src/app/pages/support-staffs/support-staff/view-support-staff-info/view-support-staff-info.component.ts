import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { AppState } from 'src/app/store/reducers';
import { map, mergeMap } from 'rxjs/operators';
import { selectSupportStaffWithId } from '../../store/selectors/support-staff.selectors';


@Component({
  selector: 'app-view-support-staff-info',
  templateUrl: './view-support-staff-info.component.html',
  styleUrls: ['./view-support-staff-info.component.css']
})
export class ViewSupportStaffInfoComponent implements OnInit {
  supportStaffProfile$: Observable<any> | undefined;

  constructor(
    private route: ActivatedRoute,
    private store: Store<AppState>
  ) { }

  changeProfile($event: any) {
    console.log($event, 'Method Not Implemented');
  }

  ngOnInit() {
    this.supportStaffProfile$ = this.route.parent?.paramMap
      .pipe(
        map(params => Number(params.get('id'))),
        mergeMap(id => this.store.pipe(select(selectSupportStaffWithId(id))))
      );
  }

}
