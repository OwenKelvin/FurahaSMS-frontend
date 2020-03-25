import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { AppState } from 'src/app/store/reducers';
import { map, mergeMap } from 'rxjs/operators';
import { selectSupportStaffState } from '../../store/selectors/support-staff.selectors';


@Component({
  selector: 'app-view-support-staff-info',
  templateUrl: './view-support-staff-info.component.html',
  styleUrls: ['./view-support-staff-info.component.css']
})
export class ViewSupportStaffInfoComponent implements OnInit {
  supportStaffProfile$: Observable<any>

  constructor(
    private route: ActivatedRoute,
    private store: Store<AppState>
  ) { }

  ngOnInit() {
    this.supportStaffProfile$ = (this.route.parent as ActivatedRoute).paramMap
      .pipe(map(params => Number(params.get('id'))))
      .pipe(
        mergeMap(id => {
          return this.store.pipe(select(selectSupportStaffState))
            .pipe(
              map((supportStaffProfile: any) => supportStaffProfile ? supportStaffProfile[id] : null)
            );
        })
      );
  }

}
