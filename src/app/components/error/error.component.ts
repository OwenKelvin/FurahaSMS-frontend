import { Component, OnInit, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromStore from '../../store/reducers';
import { selectErrorState } from 'src/app/store/selectors/error-message.selector';
import { Observable } from 'rxjs';
import { ErrorMessageStateInterface } from 'src/app/store/reducers/error-message.reducer';
import { loadErrorMessagesFailure } from 'src/app/store/actions/error-message.actions';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css']
})
export class ErrorComponent implements OnInit {
  errorBody$: Observable<ErrorMessageStateInterface>;
  constructor(private store: Store<fromStore.AppState>) { }

  ngOnInit() {
    this.errorBody$ = this.store.select(selectErrorState);
  }

  closeMessage() {
    this.store.dispatch(loadErrorMessagesFailure());
  }

}
