import { Component, OnInit, OnDestroy } from '@angular/core';
import * as fromToastSelector from './../../store/selectors/toast.selector';
import { Store, select } from '@ngrx/store';
import { loadToastShowsFailure } from './../../store/actions/toast-show.actions';
import { AppState } from './../../store/reducers';
import { Observable } from 'rxjs';
import { takeWhile } from 'rxjs/operators';

@Component({
  selector: 'app-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.css']
})
export class ToastComponent implements OnInit, OnDestroy {
  showToast$: Observable<boolean>;
  toastHeader$: Observable<string>;
  toastBody$: Observable<string>;
  toastTime$: Observable<string>;
  componentIsActive: any;
  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.componentIsActive = true;
    this.showToast$ = this.store.pipe(select(fromToastSelector.selectShowToastMessage));
    this.toastHeader$ = this.store.pipe(select(fromToastSelector.selectToastHeader));
    this.toastBody$ = this.store.pipe(select(fromToastSelector.selectToastBody));
    this.toastTime$ = this.store.pipe(select(fromToastSelector.selectToastTime));
    this.showToast$
      .pipe(takeWhile(() => this.componentIsActive))
      .subscribe(showToast => {
      if (showToast) {
        setTimeout(() => {
          this.hideToast();
        }, 4000);
      }
    });
  }
  hideToast() {
    this.store.dispatch(loadToastShowsFailure());
  }
  ngOnDestroy() {
    this.componentIsActive = false;
  }
}
