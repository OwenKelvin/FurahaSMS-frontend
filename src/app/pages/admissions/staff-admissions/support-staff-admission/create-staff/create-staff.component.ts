import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { AppState } from 'src/app/store/reducers';
import { selectStaffType } from '../../../store/selectors/staff-type.selectors';
import { ActivatedRoute } from '@angular/router';
import { map, mergeMap, takeWhile } from 'rxjs/operators';
import * as fromStaffType from 'src/app/pages/admissions/store/reducers/staff-type.reducer';

@Component({
  selector: 'app-create-staff',
  templateUrl: './create-staff.component.html',
  styleUrls: ['./create-staff.component.css']
})
export class CreateStaffComponent implements OnInit, OnDestroy {

  componentIsActive: boolean;
  staffType: fromStaffType.State | null;
  constructor(
    private store: Store<AppState>,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.componentIsActive = true;
    this.route.paramMap
      .pipe(map(params => Number(params.get('id'))))
      .pipe(mergeMap(id => this.store.pipe(select(selectStaffType(id)))))
      .pipe(takeWhile(() => this.componentIsActive))
      .subscribe(res => {
        this.staffType = res;
      })
  }
  ngOnDestroy() {
    this.componentIsActive = false;
  }
}
