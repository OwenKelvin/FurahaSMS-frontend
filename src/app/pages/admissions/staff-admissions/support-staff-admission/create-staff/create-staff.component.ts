import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { AppState } from 'src/app/store/reducers';
import { selectStaffTypes, selectStaffType } from '../../../store/selectors/staff-type.selectors';
import { ActivatedRoute } from '@angular/router';
import { map, mergeMap, takeWhile } from 'rxjs/operators';

@Component({
  selector: 'app-create-staff',
  templateUrl: './create-staff.component.html',
  styleUrls: ['./create-staff.component.css']
})
export class CreateStaffComponent implements OnInit, OnDestroy {
  staffType: {id: number, name: string} = { id: 0, name: '' };
  componentIsActive: boolean;
  constructor(
    private store: Store<AppState>,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.componentIsActive = true;
    this.route.paramMap
      .pipe(map(params => +params.get('id')))
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
