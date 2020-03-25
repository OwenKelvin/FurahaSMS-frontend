import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromStore from '../../../store/reducers';
import { ActivatedRoute } from '@angular/router';
import { takeWhile, map } from 'rxjs/operators';

@Component({
  selector: 'app-edit-procurement-request',
  templateUrl: './edit-procurement-request.component.html',
  styleUrls: ['./edit-procurement-request.component.css']
})
export class EditProcurementRequestComponent implements OnInit, OnDestroy {
  requestId: number;
  componentIsActive: boolean;

  constructor(private store: Store<fromStore.AppState>, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.componentIsActive = true;
    this.activatedRoute.paramMap
      .pipe(map(params => Number(params.get('id'))))
      .pipe(takeWhile(() => this.componentIsActive))
      .subscribe(id => {
        this.requestId = id;
    });

  }
  ngOnDestroy() {
    this.componentIsActive = false;
  }

}
